// CartService.factory.js
'use strict';

module.exports = CartServiceFactory;

/* @ngInject */
function CartServiceFactory(cartLinesDictionary, cartLinesService, cartSingleton, productsDictionary, $rootScope) {
	var service = {
		buy: buy,//(productId)
	};

	$rootScope.$on('scd.cartLinesUpdate', _update);
	$rootScope.$on('scd.productsUpdate', _update);
	return service;

	//////

	function buy(productId) {
		cartLinesService.increase(productId, 1);
	}

	//////

	function _update() {
		var cart = cartSingleton.instance;
		
		cart.clear();
		cartLinesDictionary.list.forEach(function(cartLine) {
			var product = productsDictionary.map[cartLine.id];
			cart.account(product, cartLine.quantity);
		});

		cartSingleton.$update();
	}
}