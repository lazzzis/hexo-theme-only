此主题允许你想更改部分动画效果。

这个主题用到动画效果的地方有四个:

1. `/posts` 显示文章列表
2. `/post/:title` 显示一篇文章
3. `/tags` 以及 `/tags/:tag` 显示某一 tag 下的文章列表
4. 类型为 page 的页面

以上四项对应到 `_config.yml` 中 `animated` 属性的 `posts`, `post`, `tags`, `page`。

动画效果采用的是 [animate.css](https://daneden.github.io/animate.css/)。所以把对应字段的属性改成对应的动画效果即可。

举个例子，把显示 `posts` 的动画效果由默认的 `bounceInLeft` 更改为 `rotateInDownLeft`。那么更改后的 animated 为

```yml
animated:
    posts: rotateInDownLeft # 更改 posts 页面的动画效果
    tags: bounceInUp
    post: slideInLeft
    page: slideInLeft
```

配置后务必用 `hexo g` 重新生成静态文件
