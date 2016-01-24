// CartLinesService.factory.js
'use strict';

module.exports = CartLinesServiceFactory;

/* @ngInject */
function CartLinesServiceFactory(cartLinesDictionary) {
	var service = {
		increase: increase,//(productId, quantity)
	};
	return service;

	//////

	function increase(productId, quantity) {
		cartLinesDictionary.increase(productId, quantity);
		cartLinesDictionary.$update();
	}
}