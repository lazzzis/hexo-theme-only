# Customize 404 Page

Create a new markdown file under source directory, which you can name anything, like `404.md`, `not-found.md`. Append `layout: page404` in the `front-matter`.

The 404 page will show like a post. Therefore, the content of the `not-found.md` is just the content of your 404 page, such as

```yaml
---
title: not-found
layout: page404 # can not be omitted
date: 2018-03-24 14:31:52
comments: false
---

### 迷路了么？这里什么也不存在

回到 [最开始的地方吧](/)

![](https://as.bitinn.net/upload/cite0l5z200oiz35nbv8t5xox.1200.jpg)

```

> `comments: false` is recommended, since this can disable commenting on the 404 page

will be rendered as:

![](../404_page.png)
