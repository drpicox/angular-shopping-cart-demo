// index.js
/*
	Module drpx.shopping-cart-demo.products-catalog-pages
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('drpx.shopping-cart-demo.products-catalog.routes', [

	require('angular-route'),
])

.config(require('./CatalogRoute.config'))

.name;