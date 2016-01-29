'use strict';

var angular = require('angular');

module.exports = angular.module('drpxShoppingCartDemoApp', [

	require('./cart'),
	require('./products'),
	require('./route-catalog'),

	require('angular-route'),
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/catalog',
	});
})

.name;
