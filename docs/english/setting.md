# Settings

Update `_config.yml` under your theme folder

## Splash & Drawer

`Splash` corresponds to the links in your home page (index page)
`Drawer` corresponds to the links in your sidebar

### type

#### sitelink

The links whose type is sitelink are reserved ones. You have to use these links for the following purpose:

- `/` home page
- `/posts` list of posts
- `/post/:title` a post with one specific title
- `/tags` list of tags
- `/tags/:tag` list of posts with one specific tag

This seems implements redirect for `/tags`. For example, if there exist there tags, such as ['foo', 'bar', 'baz'], it will redirect to `/tags/foo` when you visit `/tags`

```yml
-
    title: Blog
    type: sitelink
    link: '/posts'
```

The value of `title` can be arbitrary. It will be shown in your index page (Splash) or side bar (Drawer).

#### permalink

generally corresponds to links other than your blog, such as

```yml
-
    title: Twitter
    type: permalink
    link: https://twitter.com/lazzzis
    _blank: true
```

`_blank` only works for `permalink`. If it is set to true, the page will be opened in a new tab.

#### page

`page` is used for your custom pages. To make it work, you have to create a new `markdown` file in `source` folder under your root directory

```yml
-
    title: About
    type: page
    link: /about
```

Let's say you would like a new page with the url `/about`. Then create a file with the command `hexo init about`. Move this file to upper level directory; that is move it from `source/_posts/about.md` to `source/about`.

**Note:** the `title` in [`front-matter`](https://hexo.io/docs/front-matter.html) must be same as the `title` in `_config.yml`.

You can set `link` as arbitrary, as long as it does not conflict with previous links.

## disqus_shortname

the `disqus` id for your [disqus](disqus.com) comment system. If you leave it blank, the comments would be hidden.

## livere_uid

(Beta Stage)

the `livere` uid for [livere](https://livere.com/) comment system. If you leave it blank, the comments would be hidden.

## favicon.ico

Put `favicon.ico` under the `source` folder of theme directory
