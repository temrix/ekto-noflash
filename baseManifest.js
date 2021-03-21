const pkg = require('./package.json')

module.exports = {
  manifest_version: 2,
  name: 'Ektoplazm Noflash',
  description: pkg.description,
  version: pkg.version,

  content_scripts: [{
    matches: ['*://ektoplazm.com/*free-music*'],
    js: [`${pkg.name}.user.js`]
  }]
}
