# lsb-release [![Build Status](https://secure.travis-ci.org/bizzby/lsb-release.png)](http://travis-ci.org/mmalecki/lsb-release)
`lsb-release` is a parser for `lsb_release` command output.

This version has been syncified

## Installation

    npm install bizzby-lsb-release

## Usage
```js
var lsbRelease = require('bizzby-lsb-release');

data = lsbRelease()
console.dir(data)
```

Will output something similar to:

```
{ lsbVersion: ':core-4.0-amd64:core-4.0-noarch',
  distributorID: 'Fedora',
  description: 'Fedora release 14 (Laughlin)',
  release: '14',
  codename: 'Laughlin' }
```

or 

```
'null'
```