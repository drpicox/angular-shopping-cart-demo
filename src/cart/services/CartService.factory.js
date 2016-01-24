// CartService.factory.js
'use strict';

module.exports = CartServiceFactory;

/* @ngInject */
function CartServiceFactory(cartLinesDictionary, cartLinesService, cartSingleton, productsDictionary, $rootScope) {
	var service = {
		buy: buy,//(productId)
		decrease: decrease,//(productId, quantity)
		drop: drop,//(productId)
		increase: increase,//(productId, quantity)
	};

	$rootScope.$on('scd.cartLinesUpdate', _update);
	$rootScope.$on('scd.productsUpdate', _update);
	_update();
	return service;

	//////

	function buy(productId) {
		cartLinesService.increase(productId, 1);
	}

	function decrease(productId, quantity) {
		cartLinesService.decrease(productId, quantity);
	}

	function drop(productId) {
		cartLinesService.drop(productId);
	}

	function increase(productId, quantity) {
		cartLinesService.increase(productId, quantity);
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