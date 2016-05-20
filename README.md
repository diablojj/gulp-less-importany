gulp-less-importany
=========

A LESS plugin for Gulp

[![NPM Version](https://img.shields.io/npm/v/gulp-less.svg)](https://www.npmjs.com/package/gulp-less)
[![Build Status](https://img.shields.io/travis/plus3network/gulp-less.svg)](https://travis-ci.org/plus3network/gulp-less)

## Installation

```
npm install gulp-less-importany
```

## Basic Usage

```js
gulp.src(['src/themes/css/index.less', 'src/themes/css/form.less'])
        .pipe(lessimportany('src/themes/css/custom/common.less'))
        .pipe(less())
        .pipe(gulp.dest('dist/themes/css'));
```

## Options

