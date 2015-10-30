'use strict';

var angular = require('angular');

module.exports = angular.module('shoppingCartDemoApp', [

	require('./cart'),
	require('./products'),
	require('./products-catalog'),

	require('angular-route'),
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/catalog',
	});
})

.name;
