var fs = require('hexo-fs')
var path = require('path')

module.exports = function (config, themeConfig, site) {
  var res = []
  var generator = {}
  var postNameList = site.posts.sort('-date').filter(function (post) {
    return post.published && post.slug !== themeConfig.Page404
  }).map((value) => {
    return value.slug
  })
  var pageNameList = site.pages.map((value) => {
    return value.title
  })

  postNameList.forEach((value) => {
    res.push({
      path: '/post/' + value + '/index.html',
      layout: 'index',
      data: {}
    })
  })

  pageNameList.forEach((value) => {
    res.push({
      path: '/page/' + value + '/index.html',
      layout: 'index',
      data: {}
    })
  })

  res.push({
    path: '/search/index.html',
    layout: 'index',
    data: {}
  })

  res.push({
    path: '/posts/index.html',
    layout: 'index',
    data: {}
  })

  res.push({
    path: '/tags/index.html',
    layout: 'index',
    data: {}
  })

  try {
    themeConfig
      .Drawer
      .filter((item) => item.type === 'page')
      .forEach((item) => res.push({
        path: item.link + '/index.html',
        layout: 'index',
        data: {}
      }))
  } catch (error) {
    // pass
  }

  try {
    themeConfig
      .Splash
      .filter((item) => item.type === 'page')
      .forEach((item) => res.push({
        path: item.link + '/index.html',
        layout: 'index',
        data: {}
      }))
  } catch (error) {
    // pass
  }

  return res
}
