'use strict';

var bootstrap = require('angular2/platform/browser').bootstrap;

var AppComponent = require('./app/Component');


module.exports = boot;

function boot() {
	bootstrap(AppComponent);
}