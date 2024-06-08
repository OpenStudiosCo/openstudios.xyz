module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/vendor": "vendor"});
  eleventyConfig.addPassthroughCopy({
    "./node_modules/keen-slider/keen-slider.js": "./assets/js/keen-slider.js",
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/keen-slider/keen-slider.min.css": "./assets/css/keen-slider.min.css",
  });

  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addWatchTarget("./src/**/*");
  eleventyConfig.setServerOptions({
    https: {
      key: "./etc/ssl-cert-snakeoil.key",
      cert: "./etc/ssl-cert-snakeoil.pem",
    }
  });

  return {
    dir: {
      input:    'src/web',
      layouts:  'src/templates',
      output:   'docs'
    },
  };
};
