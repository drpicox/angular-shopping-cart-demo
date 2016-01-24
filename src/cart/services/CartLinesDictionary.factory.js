// CartLinesDictionary.factory.js
'use strict';

module.exports = CartLinesDictionaryFactory;

/* @ngInject */
function CartLinesDictionaryFactory(CartLine, drpxUpdateable) {
	var dictionary = {
		list: [],
		map: {},
		decrease: decrease,
		increase: increase,
		remove: remove,//(id)
		$update: drpxUpdateable('scd.cartLinesUpdate'),
	};
	return dictionary;

	//////

	function decrease(id, quantity) {
		var cartLine = _getOrCreate(id);
		cartLine.decrease(quantity);
	}

	function increase(id, quantity) {
		var cartLine = _getOrCreate(id);
		cartLine.increase(quantity);
	}

	function remove(id) {
		var cartLine = dictionary.map[id];
		if (cartLine) {
			var idx = dictionary.list.indexOf(cartLine);
			dictionary.list.splice(idx, 1);
			delete dictionary.map[id];
		}
		return cartLine;
	}

	//////

	function _getOrCreate(id) {
		var cartLine = dictionary.map[id];
		if (!cartLine) {
			cartLine = new CartLine(id);
			dictionary.list.push(cartLine);
			dictionary.map[id] = cartLine;
		}
		return cartLine;
	}
}