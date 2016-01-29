// CartService.factory.js
'use strict';

module.exports = CartServiceFactory;

/* @ngInject */
function CartServiceFactory(cartLinesService, cartSingleton, productsService, $rootScope) {
	var service = {
		getInstance: getInstance,//():cart
	};

	$rootScope.$on('scd.cartLinesUpdate', _update);
	$rootScope.$on('scd.productsUpdate', _update);
	_update();
	return service;

	//////

	function getInstance() {
		return cartSingleton.instance;
	}

	//////

	function _update() {
		var cart = cartSingleton.instance;
		
		cart.clear();
		cartLinesService.getList().forEach(function(cartLine) {
			var product = productsService.get(cartLine.id);
			cart.account(product, cartLine.quantity);
		});

		cartSingleton.$update();
	}
}