// CartLinesService.factory.js
'use strict';

module.exports = CartLinesServiceFactory;

/* @ngInject */
function CartLinesServiceFactory(cartLinesDictionary) {
	var service = {
		buy: buy,//(productId)
		decrease: decrease,//(productId, quantity)
		drop: drop,//(productId)
		get: get,//(productId):cartLine
		getList: getList,//():[cartLine]
		increase: increase,//(productId, quantity)
	};
	return service;

	//////

	function buy(productId) {
		increase(productId, 1);
	}

	function decrease(productId, quantity) {
		cartLinesDictionary.decrease(productId, quantity);
		cartLinesDictionary.$update();
	}

	function drop(productId) {
		cartLinesDictionary.remove(productId);
		cartLinesDictionary.$update();
	}

	function get(productId) {
		return cartLinesDictionary.map[productId];
	}

	function getList() {
		return cartLinesDictionary.list;
	}

	function increase(productId, quantity) {
		cartLinesDictionary.increase(productId, quantity);
		cartLinesDictionary.$update();
	}
}