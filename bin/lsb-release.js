#!/usr/bin/env node
// Named `lsb-release.js` to avoid confusion
var result = require('../')()
console.log(JSON.stringify(result));

