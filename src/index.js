'use strict'
const zip = require('lodash/zip')

const createAudioElement = async (file) => {
  try {
    const div = document.createElement('div')
    const audio = document.createElement('audio')
    audio.setAttribute('controls', 'controls')
    audio.setAttribute('preload', 'none')
    audio.setAttribute('src', file)
    div.appendChild(audio)
    return div
  } catch (e) {
    console.error(e)
  }
}

const processPost = async (post) => {
  try {
    let plainText = ''
    const elmNodes = post.querySelector('.entry').childNodes
    for (const elm of elmNodes) {
      if (elm.nodeName === '#text') {
        plainText = elm.textContent
      }
    }
    const tracks = plainText
      .trim()
      .replace('[audio:', '')
      .replace(']', '')
      .split(',')
    const files = []
    tracks.forEach((track, i) => {
      files.push(`https://ektoplazm.com/audio/${track}`)
    })
    const siblings = post.querySelector('.tl').getElementsByClassName('t')
    return [files, siblings]
  } catch (e) {
    console.error(e)
  }
}

const main = async () => {
  try {
    const posts = document.getElementsByClassName('post')
    const comb = Array.from(posts).map(await processPost)
    for (const post of comb) {
      const postArr = await post
      const zipped = zip(postArr[0], postArr[1])
      zipped.forEach(async (item, i) => {
        const after = item[1]
        after.parentNode.insertBefore(
          await createAudioElement(item[0]),
          after.nextSibling
        )
      })
    }
  } catch (e) {
    console.error(e)
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  main()
})
