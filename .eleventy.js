module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./assets/alpine.js",
  });

  return {
    dir: {
      input: 'src/pages',
      layouts: 'src/templates',
      data: '../data',
      output: 'docs'
    },
  };
};
