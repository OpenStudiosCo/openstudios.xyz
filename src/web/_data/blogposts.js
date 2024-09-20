/**
 * Blog posts CMS integration
 * 
 * @see https://stevenwoodson.com/blog/pulling-wordpress-content-into-eleventy/
 */
const { AssetCache } = require("@11ty/eleventy-fetch");
const axios = require("axios");
const jsdom = require("jsdom");
const loadLanguages = require("prismjs/components/");
const Prism = require("prismjs");
const fs = require('fs');
const path = require('path');
const { exit } = require( "process" );

const { JSDOM } = jsdom;
loadLanguages(["php"]);
loadLanguages(['glsl']);

// Config
const ITEMS_PER_REQUEST = 10;
const API_BASE = "https://portal.openstudios.xyz/wp-json/wp/v2/posts";

/**
 * Blog post API call by page
 *
 * @param {Int} page - Page number to fetch, defaults to 1
 * @return {Object} - Total, Pages, and full API data
 */
async function requestPosts(page = 1) {
  try {
    // https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
    const url = API_BASE;
    const params = {
      params: {
        page: page,
        per_page: ITEMS_PER_REQUEST,
        _embed: "wp:featuredmedia",
        order: "desc",
      },
    };
    const response = await axios.get(url, params);

    return {
      total: parseInt(response.headers["x-wp-total"], 10),
      pages: parseInt(response.headers["x-wp-totalpages"], 10),
      data: response.data,
    };
  } catch (err) {
    console.error("API not responding, no data returned", err);
    return {
      total: 0,
      pages: 0,
      data: [],
    };
  }
}

/**
 * Get all blog posts from the API
 * Use cached values if available, pull from API if not.
 *
 * @return {Array} - array of blog posts
 */
async function getAllPosts() {
  const cache = new AssetCache("blogposts");
  let requests = [];
  let apiData = [];

  if (cache.isCacheValid("24h")) {
    console.log("Using cached blogposts");
    return cache.getCachedValue();
  }

  // make first request and marge results with array
  const request = await requestPosts();
  console.log(
    "Using API blogposts, retrieving " +
      request.pages +
      " pages, " +
      request.total +
      " total posts."
  );
  apiData.push(...request.data);

  if (request.pages > 1) {
    // create additional requests
    for (let page = 2; page <= request.pages; page++) {
      const request = requestPosts(page);
      requests.push(request);
    }

    // resolve all additional requests in parallel
    const allResponses = await Promise.all(requests);
    allResponses.map((response) => {
      apiData.push(...response.data);
    });
  }

  // return data
  await cache.save(apiData, "json");
  return apiData;
}

/**
 * Clean up and convert the API response for our needs
 */
async function processPosts(blogposts) {
  return Promise.all(
    blogposts.map(async (post) => {
      // remove HTML-Tags from the excerpt for meta description
      let metaDescription = post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");
      metaDescription = metaDescription.replace("\n", "");

      let published = new Date( post.date );
      let month = ("0" + (published.getMonth() + 1)).slice(-2);
      let year = published.getFullYear();

      // Code highlighting with Eleventy Syntax Highlighting
      // https://www.11ty.dev/docs/plugins/syntaxhighlight/
      let content = highlightCode(post.content.rendered);

      content = await saveAndReplaceImages( content, year, month );

      const coverPath = 'https://openstudios.xyz/' + getFirstImagePath( content, year, month );

      // Return only the data that is needed for the actual output
      return {
        year: year,
        month: month,
        content: content,
        date: post.date,
        modifiedDate: post.modified,
        excerpt: post.excerpt.rendered,
        formattedDate: new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        cover: coverPath,
        metaDescription: metaDescription,
        slug: post.slug,
        title: post.title.rendered,
      };
    })
  );
}



function getFilenameFromUrl(url) {
  let filename = url.split('/').pop();
  
  // If no extension is found in the filename, default to .jpg
  if (!path.extname(filename)) {
    filename += '.jpg';
  }

  return filename;
}

function getFirstImagePath( content, year, month ) {
  const dom = new JSDOM(content);
  const images = dom.window.document.querySelectorAll("img");

  const src = images[0].getAttribute("src");
  const filename = getFilenameFromUrl(src);
  
  return `/assets/blog/${year.toString()}/${month.toString()}/${filename}`;
}

/**
 * Download CMS images to static file store and replace inline sources.
 */
async function saveAndReplaceImages(content, year, month) {
  const dom = new JSDOM(content);
  const images = dom.window.document.querySelectorAll("img");

  for (let img of images) {
    const src = img.getAttribute("src");

    if (src) {
      try {
        const filename = getFilenameFromUrl(src);
        const filePath = path.join(__dirname, "../../", "assets", "blog", year.toString(), month.toString(), filename);
        // Replace the src with the local file path
        img.setAttribute("src", `/assets/blog/${year.toString()}/${month.toString()}/${filename}`);

        // Check if the file already exists
        if (!fs.existsSync(filePath)) {
          console.log('Downloading ' + filePath);

          const response = await axios.get(src, { responseType: "arraybuffer" });

          // Ensure the directory exists
          fs.mkdirSync(path.dirname(filePath), { recursive: true });

          // Save the image to the file system
          fs.writeFileSync(filePath, response.data);

          // Add a delay between requests (e.g., 1 second)
          await sleep(1000);
        }
        else {
          console.log('Skipping ' + filePath);
        }
      } catch (error) {
        console.error(`Failed to download image: ${src}`, error);
      }
    }
  }

  // Return the modified HTML content
  return dom.window.document.body.innerHTML;
}

// Helper function to add a delay (in milliseconds)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * Use Prism.js to highlight embedded code
 */
function highlightCode(content) {
  // since Prism.js works on the DOM,
  // we need an instance of JSDOM in the build
  const dom = new JSDOM(content);

  let preElements = dom.window.document.querySelectorAll("pre");

  // WordPress delivers a `code`-tag that is wrapped in a `pre`
  // the used language is specified by a CSS class
  if (preElements.length) {
    preElements.forEach((pre) => {
      let code = pre.querySelector("code");

      if (code) {
        
        // get specified language from css-classname
        let codeLanguage = "html";
        const preClass = pre.className.toString();
        
        // set grammar that prism should use for highlighting
        let prismGrammar = Prism.languages.html;

        if ( preClass.indexOf('language-glsl') >= 0 ) {
          codeLanguage = 'glsl';
          prismGrammar = Prism.languages.glsl;
        }

        if ( preClass.indexOf('language-html') >= 0 ) {
          codeLanguage = 'html';
          prismGrammar = Prism.languages.html;
        }

        if ( preClass.indexOf('language-css') >= 0 ) {
          codeLanguage = 'css';
          prismGrammar = Prism.languages.css;
        }

        if ( preClass.indexOf('language-php') >= 0 ) {
          codeLanguage = 'php';
          prismGrammar = Prism.languages.php;
        }

        if ( preClass.indexOf('language-js') >= 0 ) {
          codeLanguage = 'js';
          prismGrammar = Prism.languages.javascript;
        }

        // save the language for later use in CSS
        pre.dataset.language = codeLanguage;

        // highlight code
        code.innerHTML = Prism.highlight(
          code.textContent,
          prismGrammar,
          codeLanguage
        );

        code.classList.add(`language-${codeLanguage}`);
      }
    });

    content = dom.window.document.body.innerHTML;
  }

  return content;
}

// export for 11ty
module.exports = async () => {
  const blogposts = await getAllPosts();
  const processedPosts = await processPosts(blogposts);
  return processedPosts;
};
