var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    child_process = require('child_process'),
    lsbRelease = require('../');

// Hijack execSync
child_process.execSync = function () {
  return fs.readFileSync(path.join(__dirname, 'fixtures', 'fedora'))
};

var releaseInfo = lsbRelease.fromCommand();

assert.deepEqual(releaseInfo, {
  "lsbVersion": ":core-4.0-amd64:core-4.0-noarch",
  "distributorID": "Fedora",
  "description": "Fedora release 14 (Laughlin)",
  "release": "14",
  "codename":"Laughlin"
});
