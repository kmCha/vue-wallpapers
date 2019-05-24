function waitUntil(obj, key, callback) {
  var timer = setInterval(function () {
    if (obj[key]) {
      clearInterval(timer)
      callback && callback()
    }
  }, 200)
}

export { waitUntil }