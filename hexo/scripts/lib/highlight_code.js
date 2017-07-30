const map = {
  '&#39;': '\'',
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"'
}

const regex = /<pre><code class="(.*)?">([\s\S]*?)<\/code><\/pre>/igm

function unescape (str) {
  if (!str || str === null) return ''
  const re = new RegExp('(' + Object.keys(map).join('|') + ')', 'g')
  return String(str).replace(re, (match) => map[match])
}

const highlight = require('highlight.js')

highlight.configure({
  classPrefix: 'hljs-'     // don't append class prefix
})

function highlight_code (data) {
  data.content = data.content.replace(regex, (origin, lang, code) => {
    code = unescape(code)
    return `
    <pre><code class="lang-${lang}">${highlight.highlightAuto(code).value}</code></pre>`
  })

  return data
}

module.exports = highlight_code
