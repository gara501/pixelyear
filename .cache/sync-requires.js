// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/dev-404-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/src/templates/blog-post.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/src/pages/my-files.js")),
  "component---src-pages-posts-js": preferDefault(require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/src/pages/posts.js"))
}

exports.json = {
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "pandas-and-bananas.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/pandas-and-bananas.json"),
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "sweet-pandas-eating-sweets.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/sweet-pandas-eating-sweets.json"),
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "workout-general-2018.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/workout-general-2018.json"),
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "about.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/about.json"),
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/index.json"),
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "my-files.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/my-files.json"),
  "layout-index.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/layout-index.json"),
  "posts.json": require("/Users/gonzaloramirez/Sites/jscode/mood/pixelyear/.cache/json/posts.json")
}