// index.js
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.header.components', [

	require('scd-cart'),
])

.directive('scdHeader', require('./Header.directive'))
.directive('scdHeaderCart', require('./HeaderCart.directive'))

.name;