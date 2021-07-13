/* eslint-disable prefer-arrow-callback */

Package.describe({
  name: 'corefihub:publication-collector',
  version: '1.1.1',
  summary: 'Test a Meteor publication by collecting its output.',
  documentation: 'README.md',
  git: 'https://github.com/corefihub/meteor-publication-collector.git',
  debugOnly: true
});

Npm.depends({
  chai: '4.1.2',
  sinon: '4.2.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'underscore',
    'mongo',
    'check'
  ], 'server');

  api.mainModule('publication-collector.js', 'server');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'mongo',
    'random',
    'meteortesting:mocha',
    'accounts-password@1.3.1',
    'underscore'
  ], 'server');

  api.addFiles('./tests/collections.js', 'server');

  api.mainModule('publication-collector.test.js', 'server');
});
