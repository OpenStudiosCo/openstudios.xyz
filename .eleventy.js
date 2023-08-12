module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/vendor": "vendor"});

  eleventyConfig.addWatchTarget("./src/**/*");

  return {
    dir: {
      input:    'src/web',
      layouts:  'src/templates',
      output:   'web'
    },
  };
};
