var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    lsbRelease = require('../');

var realReadFileSync = fs.readFileSync

fs.readFileSync = function () {
  return realReadFileSync(path.join(__dirname, 'fixtures', 'ubuntu'), 'utf8')
};

var releaseData = lsbRelease.fromFile()

assert.deepEqual(releaseData, {
  "distributorID": "Ubuntu",
  "description": "Ubuntu 12.04.1 LTS",
  "release": "12.04",
  "codename": "precise"
});
