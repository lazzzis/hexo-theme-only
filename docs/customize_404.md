# 自定义 404 页面

在 source 文件夹下新建一份 markdown 文件，名字随意。类似与 `page` 的创建，在 `front-matter` 中添加 `layout: page404` 即可。

404 页面的内容将会以一篇文章的形式展现，因此你在该文件里编辑的内容就是 404 页面展现的内容。比如

```yml
---
title: not-found
date: 2018-03-24 14:31:52
layout: page404 # 必须存在
comments: false
---

### 迷路了么？这里什么也不存在

回到 [最开始的地方吧](/)

![](https://as.bitinn.net/upload/cite0l5z200oiz35nbv8t5xox.1200.jpg)

```

> `comments: false` 可以用于取消对 404 页面的注释，推荐加上这一字段。

渲染后的样子

![](./404_page.png)
