// index.js
/*
	Module scd.products.services
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.products.services', [
	require('drpx-updateable'),
])

.factory('productsDictionary', require('./ProductsDictionary.factory'))
.factory('productsRemote', require('./ProductsRemote.factory'))
.factory('productsService', require('./ProductsService.factory'))

.name;