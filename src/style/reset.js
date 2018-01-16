window.onload = window.onresize = function () {
  var windowW = document.body.clientWidth
  // iphone5->320 10
  var htmlPx = Math.ceil(windowW / 375) * 50

  document.getElementsByTagName('html')[0].style.fontSize = htmlPx + 'px'
}
