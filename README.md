# Rollup.js Test
Testing out Rollup.js, thanks to the excellent work of [@jlengstorf](https://github.com/jlengstorf).

### Installation
```
npm install
```

### Development

- The `build/` directory contains `index.html`
- The main JavaScript file is located at `src/scripts/main.js`
- The main Scss file is located at `src/styles/main.scss`

The following command runs Rollup with the `--watch` flag, as well as a livereload server. This allows for live reloading of both JavaScript and CSS.

```
npm run watch
```

### Build

The following command runs Rollup in production mode, without logging and with uglified JavaScript.

```
npm run build
```
