module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  return {
    dir: {
      input:    'src/pages',
      layouts:  'src/templates',
      output:   'docs'
    },
  };
};
