// index.js
/*
	Module spc.cart.components
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('spc.cart.components', [
])

.directive('scdCartGetter', require('./CartGetter.directive'))

.name;