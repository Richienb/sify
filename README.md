# Sify [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sify/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sify)

Make a promise-style function synchronous.

[![NPM Badge](https://nodei.co/npm/sify.png)](https://npmjs.com/package/sify)

## Install

```sh
npm install sify
```

## Usage

```js
const sify = require("sify");
const got = require("got");

const {body} = sify(got)("https://google.com")

console.log(body)
//=> "<!doctype html>..."
```

## API

### sify(input)

#### input

Type: `function`

## Related

- [p-syncy](https://github.com/Richienb/p-syncy) - Resolve a promise synchronously.
