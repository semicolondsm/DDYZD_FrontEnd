module.exports = {
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        "/": { page: "/" },
        "mobile/feedslide/id": {
            page: "/mobile/feedslide/[id]",
            query: { slug: "id" }
        }
      }
    }
  }