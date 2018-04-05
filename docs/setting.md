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
    layout: about
    link: /about-me
```

例如单独增加一个 `/about-me` 路由，那么在 source 目录下新建一个 `about-me.md` (你也可以命名为其它名字)。在文件的 `front-matter` 中必须包含 `layout: about`。

例如:

```yml
title: 标题随意
layout: about # 必须存在
---

文章内容随意
```

link 随意，一般不与之前冲突的就行。但是 `layout` 必须是唯一，不能存在两个相同 `layout` 的文件。

## disqus_shortname

评论用的 `disqus` id，如果不设置，就不显示评论

## livere_uid

**此功能当前处于 Beta 状态**
评论用的 `livere` (来必力) uid，如果不设置，就不显示评论。这里的 uid 指管理页面 -> 代码管理 -> 一般网站 代码中的 data-uid

## favicon

将 `favicon.ico` 放置于主题的 `source` 文件夹下即可
