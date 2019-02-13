'use strict'

const Buffer = require('buffer/').Buffer;

(() => {
  Array.prototype.forEach.call(document.getElementsByClassName('post'), (post) => {
    var source = post.querySelector('.audioplayer_container ~ p script').innerHTML
    var encoded = source.match(/soundFile:\s*"([^"]+)"/)[1]
    var decoded = Buffer.from(encoded, 'base64').toString()
    var files = decoded.split(',')

    var siblings = post.querySelector('.tl').getElementsByClassName('d')
    files.forEach((file, i) => {
      var divElement = document.createElement('div')

      var audio = document.createElement('audio')
      audio.setAttribute('controls', 'controls')
      audio.setAttribute('preload', 'none')
      audio.setAttribute('src', file)
      var after = siblings[i]
      divElement.appendChild(audio)
      after.parentNode.insertBefore(divElement, after.nextSibling)
    })

    post.querySelector('.audioplayer_container').innerHTML = ''
  })
})()
