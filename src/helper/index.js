function disqusUrl () {
  const origin = window.location.origin
  const pathname = window.location.pathname.endsWith('/')
    ? window.location.pathname
    : window.location.pathname + '/'
  return origin + pathname
}

export {
  disqusUrl
}
