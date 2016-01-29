// index.js
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.route-catalog.routes', [

	require('../components'),
	require('scd-products'),

	require('angular-route'),
])

.config(require('./CatalogRoute.config'))

.name;