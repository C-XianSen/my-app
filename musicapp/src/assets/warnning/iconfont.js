(function (window) {
  var svgSprite = '<svg><symbol id="icon-cuowu" viewBox="0 0 1024 1024"><path d="M512 861.5m-68 0a68 68 0 1 0 136 0 68 68 0 1 0-136 0Z"  ></path><path d="M465.9 691.3c0 2.2 0.2 4.4 0.5 6.5v0.3c0 1 0.2 2 0.6 2.9 4.5 20.8 23 36.4 45.1 36.4 22.2 0 40.6-15.6 45.1-36.4 0.3-0.9 0.5-1.9 0.6-2.9v-0.3c0.3-2.1 0.5-4.3 0.5-6.5 0-1 0-2-0.1-3.1l21.2-574.4c0.4-10.7-8-19.4-18.8-19.4h-97c-10.8 0-19.2 8.7-18.8 19.4L466 688.3c-0.1 1-0.1 2-0.1 3z"  ></path></symbol></svg>'
  var script = function () {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute('data-injectcss')
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener('DOMContentLoaded', loadFn, false)
          fn()
        }
        document.addEventListener('DOMContentLoaded', loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded (w, fn) {
      var d = w.document
      var done = false
      var init = function () {
        if (!done) {
          done = true
          fn()
        }
      }
      var polling = function () {
        try {
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        init()
      }
      polling()
      d.onreadystatechange = function () {
        if (d.readyState === 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  }
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg () {
    var div, svg
    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }
  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write('<style>.svgfont {display: inline-blockwidth: 1emheight: 1emfill: currentColorvertical-align: -0.1emfont-size:16px}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)
