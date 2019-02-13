# Ektoplazm Noflash

This script replaces the non-free Flash-audioplayer with a browser-native audioplayer on the website Ektoplazm.

[Ektoplazm](http://ektoplazm.com) is a website where you can freely download Creative-Commons licensed psytrance, techno and downtempo music in MP3, FLAC and WAV format.

## Installation from source

Install using npm:

```bash
npm install ekto-noflash
```

Build using `npm run-script build`.

Build minified version using `npm run-script build:prod`.

Start a server and serve the `dist`-folder. It is important not to drag-and-drop the file into the browser because then the character encoding gets messed up (at least in Firefox).

For example:

```bash
npm install http-server --global
http-server dist/ -a localhost
```

Then install with [ViolentMonkey](https://violentmonkey.github.io/) or your userscript-manager of choice.

## Usage

This script is available to install from [openuserjs.org](https://openuserjs.org/scripts/temrix/Ektoplazm_Noflash).

## Contributing

Contributions are welcome, just make sure to create an issue first discussing what you would like to change.

## Donations

Donations should be directed to the owner of [Ektoplazm](http://ektoplazm.com). Read more about donation options and payment methods (including cryptocurrency) [here](http://www.ektoplazm.com/donate).

## License

[MIT](https://choosealicense.com/licenses/mit/)
