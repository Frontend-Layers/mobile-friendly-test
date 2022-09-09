# Mobile Friendly Test

_Node.js library for testing HTML files on the fly and output errors in the console with Gulp.js compatibilities_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/andreymatin/mobile-friendly-test/LICENSE)
[![npm](https://img.shields.io/npm/v/html-test.svg)](https://www.npmjs.com/package/html-test)

## How to install


### API key

Before start you need to generate Google API key and add Google Search Console API into your Google APIs dashboard.

https://developers.google.com/webmaster-tools/search-console-api/v1/configure


### npm

```shell
npm i mobile-friendly-test
```

### yarn

```shell
yarn add mobile-friendly-test
```

## How to use

```javascript
import mobileFriendlyTest from './index.js'

const apiKey = ''
const url = ''

mobileFriendlyTest(url, apiKey)
```

## Gulp.js integration

```javascript
import gulp from 'gulp'
const { parallel } = gulp

import mobileFriendlyTest from './index.js'

const apiKey = ''
const url = ''

const mobileTestRes = () =>
  mobileFriendlyTest(url, apiKey)

export default
  parallel(
    mobileTestRes
  )
```

## Reference

- [Search Console Testing Tools API](https://developers.google.com/webmaster-tools/search-console-api/reference/rest/v1/urlTestingTools.mobileFriendlyTest)
- [Your Google API list](https://console.cloud.google.com/apis/dashboard)

---
[MIT License](LICENSE)