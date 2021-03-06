'use strict';
var path = require('path'),
  assert = require('yeoman-assert'),
  helpers = require('yeoman-test'),
  fs = require('fs'),
  config = require('./config'),
  APP_PATH = config.appPath,
  TEMPLATES_PATH = APP_PATH + '/test_templates/gulpconfig_js',
  PROJECT_NAME = config.projectName;

describe('generator-frontend-dev:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, APP_PATH))
      .withPrompts({
        name: PROJECT_NAME,
        onlyFrontend: true
      })
      .toPromise();
  });

  it('Creates gulpconfig file for only-frontend projects', function () {
    var filepath = path.join(__dirname, TEMPLATES_PATH + '/only_frontend.js'),
      content = fs.readFileSync(filepath, { encoding: 'UTF-8' });

    assert.fileContent('gulpconfig.js', content);
  });
});

describe('generator-frontend-dev:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, APP_PATH))
      .withPrompts({
        name: PROJECT_NAME,
        onlyFrontend: false
      })
      .toPromise();
  });

  it('Creates gulpconfig file for not only-frontend projects', function () {
    var filepath = path.join(__dirname, TEMPLATES_PATH + '/not_only_frontend.js'),
      content = fs.readFileSync(filepath, { encoding: 'UTF-8' });

    assert.fileContent('gulpconfig.js', content);
  });
});