// CartLinesDictionary.factory.js
'use strict';

module.exports = CartLinesDictionaryFactory;

/* @ngInject */
function CartLinesDictionaryFactory(CartLine, drpxUpdateable) {
	var dictionary = {
		list: [],
		map: {},
		increase: increase,
		$update: drpxUpdateable('scd.cartLinesUpdate'),
	};
	return dictionary;

	//////

	function increase(id, quantity) {
		var cartLine = _getOrCreate(id);
		cartLine.increase(quantity);
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