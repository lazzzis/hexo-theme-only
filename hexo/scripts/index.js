const url = require('url')
const restful = require('./lib/restful')
const highlight_code = require('./lib/highlight_code')
const fs = require('fs')
const path = require('path')

hexo.extend.generator.register('restful', function (site) {
  let {config, theme: {config: themeConfig}} = hexo
  return restful(config, themeConfig, site)
})

hexo.extend.filter.register('after_post_render', highlight_code)

// https://github.com/hexojs/hexo/issues/1030
hexo.extend.filter.register('server_middleware', function _404middleware (app) {
  app.use(function handle404(req, res, next) {
    const { pathname } = url.parse(req.url)
    if (!pathname.endsWith('.json')) {
      res.writeHead(302, {
        'Location': url.resolve(hexo.config.root, '404.html?redirect=' + req.url)
      })
      res.end()
    } else {
      next()
    }
  }, 99)
})

// hexo.extend.filter.register('server_middleware', function _404middleware (app) {
//   app.use(function handle404(req, res, next) {
//     const s = fs.createReadStream(
//       path.resolve(__dirname, '../../../', hexo.config.public_dir, './index.html')
//     )
//     s.pipe(res)
//   }, 99)
// })

// hexo.extend.filter.register('server_middleware', function _404middleware (app) {
//   app.use(function handle404(req, res, next) {
//     hexo.render.render(
//       {path: path.resolve(__dirname, '../layout/index.ejs')},
//       {
//         config: hexo.config,
//         js: hexo.extend.helper.store.js.bind(HEXO),
//         css: hexo.extend.helper.store.css.bind(HEXO),
//       }
//     ).then(function(result) {
//       console.log(result)
//       res.write(result)
//       res.end()
//     })
//   }, 99)
// })

// delete unnecessary files
hexo.extend.filter.register('after_generate', function (){
  const list = hexo.route.list()
  for (const l of list) {
    if (l.endsWith('.html') && l !== 'index.html' && l !== '404.html') {
      hexo.route.remove(l)
    }
  }
})
