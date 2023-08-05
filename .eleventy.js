module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/virtual_office": "virtual_office"});
  eleventyConfig.addPassthroughCopy({"src/vendor": "vendor"});

  return {
    dir: {
      input:    'src/pages',
      layouts:  'src/templates',
      output:   'docs'
    },
  };
};
