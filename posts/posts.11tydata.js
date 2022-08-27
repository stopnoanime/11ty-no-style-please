module.exports = {
    eleventyComputed: {
      title: data => data.title || data.page.filePathStem.split('/').pop(),
      layout: "post.njk"
    }
};