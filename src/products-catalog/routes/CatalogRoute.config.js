// CatalogRoute.config.js
/*
	CatalogRoute

*/
'use strict';

module.exports = CatalogRouteConfig;

/* @ngInject */
function CatalogRouteConfig($routeProvider) {
	$routeProvider.when('/catalog', {
		template: require('./CatalogRoute.tpl.html'),
		controller: CatalogRouteController,
		controllerAs: 'vm',
		resolve: {
			products: ProductsResolver,
		}
	});
}

/* @ngInject */
function ProductsResolver(productsService) {
	return productsService.loadAll();
}

/* @ngInject */
function CatalogRouteController(products, cartLinesState) {
	var vm = this;

	vm.products = products;
	vm.buy = buy;
	vm.isBought = isBought;

	///////

	function buy(product) {

		var line = cartLinesState.getOrCreate(product);
		line.increment();

		// cartLinesState contents modified, so... we notify it
		cartLinesState.$update();
	}

	function isBought(product) {

		return cartLinesState.isBought(product);
	}
}
