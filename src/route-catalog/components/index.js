// index.js
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.route-catalog.components', [

	require('scd-cart'),
])

.directive('scdCatalogProduct', require('./CatalogProduct.directive'))

.name;