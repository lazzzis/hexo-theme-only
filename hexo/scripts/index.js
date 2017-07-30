const restful = require('./lib/restful')
const router = require('./lib/router-add-one')
const highlight_code = require('./lib/highlight_code')

hexo.extend.generator.register('restful', function (site) {
  let {config, theme: {config: themeConfig}} = hexo
  return restful(config, themeConfig, site)
})

hexo.extend.generator.register('router-add-one', function (site) {
  return router(site)
})

hexo.extend.filter.register('after_post_render', highlight_code)
