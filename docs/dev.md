# 开发

下载源码:

`git clone https://github.com/lazzzis/hexo-theme-only.git`

安装依赖:

`yarn` (推荐) 或 `npm i`

启动后台静态服务器:

`yarn run dev:server` 或 `npm run dev:server`

启动前端开发模式:

`yarn run dev` 或 `npm run dev`

## 基本思路

1. 通过 `hexo/scripts` 里的代码(这部分来自于 `hexo-theme-one`)，可以生成 `api` 文件夹下的所有 `json` 文件。
2. 前端向后端请求相应的 `json` 文件并更新

## site.json 与 theme.json

site.json 的内容就是将你的 hexo 目录下的 `_config.yml` 转化成了 `json` 格式而已

类似地，theme.json 则是将 `theme` 目录下的 `_config.yml` 转化成了 `json` 格式而已

## posts.json 与 articles 文件夹下

记录所有博客的一个列表

而某一具体的文章的具体内容则在 `articles` 文件夹下

## tags.json

记录该网站的所有 tags 的一个列表

如果 `tag` 为 `Foo`, 则在 `tags/Foo.json` 中可以查询到所有带有 `Foo` 标签的文章的列表

> 其余文档完善中。。。
