# Dev-Stack

Simple dev-stack with a set of reusable vanilla components. Based on [Gulp](https://gulpjs.com)
and [Webpack](https://webpack.js.org).

## Features

* Twig templates to HTML, Sass styles compilation
* Assets optimization for production
* Development server with live refresh

## Install

```
yarn
```

## Usage

### Gulp tasks

Compile twig templates and styles, copy images and fonts to `dist` folder:

```
gulp build
```

Compile and copy all assets to `dist`, than run server with [Browsersync](https://browsersync.io) and watch for changes:

```
gulp serve
```

Compile, optimize and copy all assets to `dist`:

```
gulp production
```

### Webpack tasks

Execute `gulp serve` and run webpack:

```
yarn dev
```

Execute `gulp production` and run webpack:

```
yarn prod
```