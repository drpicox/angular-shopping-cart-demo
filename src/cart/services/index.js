// index.js
/*
	Module spc.cart.services
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('spc.cart.services', [
])

.factory('CartLine', require('./CartLine.factory'))
.factory('cartLinesState', require('./CartLinesState.factory'))
.factory('cartState', require('./CartState.factory'))

.name;