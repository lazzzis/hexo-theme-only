# Install

## Preparation

Update the `_config.yml` in your root directory: disable the default highlight function

```yml
highlight:
  enable: false
  line_number: false
  auto_detect: false
```

Install additional modules in your root directory: `locash.pick`, `highlight.js`

```bash
npm i lodash.pick highlight.js --save
```

Under `source` folder, which is in your root directory, create a file called `404.md`. The content can be arbitrary.

## Download theme

Go to [https://github.com/lazzzis/hexo-theme-only/releases](https://github.com/lazzzis/hexo-theme-only/releases) to download latest release and unzip to the `themes` folder.

**Note**: Rename `_config.yml.example` to `_config.yml`

Set this theme as the default one.
