// index.js
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.route-catalog', [

	require('./components'),
	require('./routes'),

	require('angular-route'),
])

.name;