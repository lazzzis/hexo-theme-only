# 安装

## 准备工作

先对 hexo 目录中的字段修改，取消默认的高亮（否则最后的高亮效果十分难看。。）:

```yml
highlight:
  enable: false
  line_number: false
  auto_detect: false
```

在hexo目录中安装额外的模块: `lodash.pick`, `highlight.js`

```bash
npm i lodash.pick highlight.js --save
```

在 hexo 目录中的 `source` 文件夹下建立一个 `404.md` 文件，文件内容不重要，重要的是这个文件必须存在。

## 下载主题

前往 [https://github.com/lazzzis/hexo-theme-only/releases](https://github.com/lazzzis/hexo-theme-only/releases) 下载最新版主题，解压到 hexo 的 themes 目录中

将本主题设置为 hexo 默认主题。（在站点配置文件里将默认主题字段设置为与存放主题的文件夹相同的值）
