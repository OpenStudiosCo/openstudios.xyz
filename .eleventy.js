module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/vendor": "vendor"});

  eleventyConfig.addWatchTarget("./src/**/*");
  eleventyConfig.setServerOptions({
    https: {
      key: "./aux/ssl-cert-snakeoil.key",
      cert: "./aux/ssl-cert-snakeoil.pem",
    }
  });

  return {
    dir: {
      input:    'src/web',
      layouts:  'src/templates',
      output:   'web'
    },
  };
};
