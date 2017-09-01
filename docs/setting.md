# 设置

主题目录下的 `_config.yml` 配置

## Splash 与 Drawer

Splash 对应的是首页页面的一批链接

Drawer 对应的是侧边导航栏的一批链接

### type

#### sitelink

sitelink 的链接是本主题已经使用了，分别是

- `/` 首页
- `/posts` 文章列表
- `/post/:title` 标题为 title 的文章
- `/tags` 标签列表
- `/tags/:tag` 标记了 tag 标签的文章列表

本主题实现了对 '/tags' 的自动跳转，如果拥有 ['foo', 'bar', 'barz'] 三个标签，那么访问 `/tags` 会自动跳转到 `/tags/foo`

请不要把这几个链接用于其它用途

```yml
-
    title: Blog
    type: sitelink
    link: '/posts'
```

title 的值可以随意，它就是最后显示在博客 Splash 或 Drawer 的字符串

#### permalink

一般指外链，比如链接到你的推特帐号，例如:

```yml
-
    title: Twitter
    type: permalink
    link: https://twitter.com/lazzzis
    _blank: true
```

`_blank` 仅对 permalink 有用，如果为 true，则会在新标签页打开

#### page

page 指你可以自定义的其它页面，要想使用 page 必须在 source 目录下建立一个新的 markdown 文件

```yml
-
    title: About
    type: page
    link: /about
```

例如像单独增加一个 `/about` 路由的页面，那么在 hexo 目中的 source 下建立一个 `About.md`，这个 markdown 文件里的 title 必须设置为 `About`，即文件中的 title 必须与配置中的 title 对应。

link 随意，一般不与之前冲突的就行。

## disqus_shortname

评论用的 `disqus` id，如果不设置，就不显示评论

## favicon

将 `favicon.ico` 放置于 `source` 文件夹下即可
