module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/vendor": "vendor"});

  eleventyConfig.addWatchTarget("./src/**/*");

  return {
    dir: {
      input:    'src/pages',
      layouts:  'src/templates',
      output:   'docs'
    },
  };
};
