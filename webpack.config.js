const path = require('path')
const WebpackUserscript = require('webpack-userscript')
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin')
const baseManifest = require('./baseManifest.js')
const pkg = require('./package.json')
const dev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: dev ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${pkg.name}.user.js`
  },
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        name: baseManifest.name,
        version: dev ? `[version]-build.[buildNo]` : `[version]`,
        match: baseManifest.content_scripts[0].matches,
        license: pkg.license,
        namespace: pkg.author
      }
    }),
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
        extend: {
          version: pkg.version
        }
      }
    })
  ]
}
