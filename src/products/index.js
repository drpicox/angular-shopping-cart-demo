// index.js
/*
	Module scd.products
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('scd.products', [

	require('drpx-updateable'),
])

// Product is registered with capital P because we do **new** Product()
.factory('Product', require('./Product.factory'))
// other artifacts are singletons (one instance) so with camelCase
.factory('productsRemote', require('./ProductsRemote.factory'))
.factory('productsService', require('./ProductsService.factory'))
.factory('productsState', require('./ProductsState.factory'))

.name;