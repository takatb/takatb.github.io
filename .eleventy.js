module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy({
    "src/pages/mass_spring_simulation.html": "apps/mass_spring_simulation.html",
    "src/pages/pendulum_simulation.html": "apps/pendulum_simulation.html",
    "src/pages/qr_gen.html": "apps/qr_gen.html",
    "src/pages/893af8a5-ab82-4be0-bca4-c7c2d84df4cc.png": "apps/893af8a5-ab82-4be0-bca4-c7c2d84df4cc.png"
  });

  eleventyConfig.ignores.add("src/pages/**");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
