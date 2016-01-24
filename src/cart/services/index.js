// index.js
/*
	Module scd.cart.services
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.cart.services', [

	require('scd-products/services'),
])

.factory('Cart', require('./Cart.factory'))
.factory('CartLine', require('./CartLine.factory'))
.factory('cartLinesDictionary', require('./CartLinesDictionary.factory'))
.factory('cartLinesService', require('./CartLinesService.factory'))
.factory('cartService', require('./CartService.factory'))
.factory('cartSingleton', require('./CartSingleton.factory'))

.name;