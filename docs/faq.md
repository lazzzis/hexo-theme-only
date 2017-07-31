一些你可能会问的问题，不断完善中，你也可以直接提交 ISSUE

Q: 为什么本地测试 (hexo server) 时，可能出现 `Cannot GET /tags/` 等类似错误?



A: 这是正常的，但是你把它传到 GitHub Pages 上就不会出现这个错误。原因是，本机测试时，是没有 tags 这个文件夹的，所以找不到可以访问的 index.html。但在 GitHub Pages 上时，GitHub Pages 有一个 fallback 机制，但出现 404 访问不到时，会先去看看项目中是不是有一个 404.html，如果有，就返回它。于是，当你访问 /tags/ 时，GitHub Pages 会返回 404.html。而这个主题中的 404.html 与项目目录中 的 index.html 是一样的。

Q: 为什么我不科学上网的话，这个博客打开有一点慢?

A: 里面用了一些国外的 cdn。


Q: 如何更换首页的背景图片?

A: 在主题文件夹的 source/img 下，有一个 background.jpg，将其替换即可。当然，文件名要与之前保持一致


Q: 为什么更新了图片但博客还是没有更新?

A: 之前也与遇到过类似的问题，貌似跟缓存有关。可以清楚缓存或者过一段时间再试试看。
