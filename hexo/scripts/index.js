const url = require('url')
const restful = require('./lib/restful')
const highlight_code = require('./lib/highlight_code')

hexo.extend.generator.register('restful', function (site) {
  let {config, theme: {config: themeConfig}} = hexo
  return restful(config, themeConfig, site)
})

hexo.extend.filter.register('after_post_render', highlight_code)

// https://github.com/hexojs/hexo/issues/1030
hexo.extend.filter.register('server_middleware', function _404middleware (app) {
  app.use(function handle404(req, res, next) {
    res.writeHead(302, {
      'Location': url.resolve(hexo.config.root, '404.html')
    })
    res.end()
  }, 99)
})

// delete unnecessary files
hexo.extend.filter.register('after_generate', function (){
  const list = hexo.route.list()
  for (const l of list) {
    if (l.endsWith('.html') && l !== 'index.html' && l !== '404.html') {
      hexo.route.remove(l)
    }
  }
})
