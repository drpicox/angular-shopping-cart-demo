// CatalogRoute.config.js
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
function CatalogRouteController(products) {
	var vm = this;

	vm.products = products;
}
