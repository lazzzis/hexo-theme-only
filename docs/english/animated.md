Some animations can be replaced。

You can update the animations used in following urls:

1. `/posts` Demonstrating all the posts
2. `/post/:title` Showing one specific post
3. `/tags` and `/tags/:tag` Listing posts with one specific tag
4. Pages with type `page`

Each link corresponds to the `animated` attribute in `config.yml`: `posts`, `post`, `tags`, `page`。

The animations origin from [animate.css](https://daneden.github.io/animate.css/)。So update `animated` attributes by the animation names show in [animate.css](https://daneden.github.io/animate.css/)。

As an instance, Change the animation of `posts` from default `bounceInLeft` to `rotateInDownLeft`:

```yml
animated:
    posts: rotateInDownLeft # update animation of 'posts'
    tags: bounceInUp
    post: slideInLeft
    page: slideInLeft
```

Use `hexo g` to regenerate static files
