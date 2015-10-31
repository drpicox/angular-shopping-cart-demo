// index.js
/*
	Module scd.cart-summary.routes
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.cart-summary.routes', [

	require('angular-route')
])

.config(require('./CartRoute.config'))

.name;