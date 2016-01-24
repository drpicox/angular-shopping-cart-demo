// CartLinesService.factory.js
'use strict';

module.exports = CartLinesServiceFactory;

/* @ngInject */
function CartLinesServiceFactory(cartLinesDictionary) {
	var service = {
		decrease: decrease,//(productId, quantity)
		drop: drop,//(productId)
		increase: increase,//(productId, quantity)
	};
	return service;

	//////

	function decrease(productId, quantity) {
		cartLinesDictionary.decrease(productId, quantity);
		cartLinesDictionary.$update();
	}

	function drop(productId) {
		cartLinesDictionary.remove(productId);
		cartLinesDictionary.$update();
	}

	function increase(productId, quantity) {
		cartLinesDictionary.increase(productId, quantity);
		cartLinesDictionary.$update();
	}
}