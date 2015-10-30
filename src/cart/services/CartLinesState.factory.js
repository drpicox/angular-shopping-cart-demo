// CartLinesState.factory.js
/*
	CartLinesState:
		
		A state that ontains all cart lines.   

*/
'use strict';

module.exports = CartLinesStateFactory;

/* @ngInject */
function CartLinesStateFactory(CartLine, drpxUpdateable) {
	var state = {
		list: [],
		map: {},
		getOrCreate: getOrCreate,//(product): CartLine
		isBought: isBought,//(product): boolean
		$update: drpxUpdateable('scd.cartLinesUpdate'),
	};
	return state;

	//////

	function getOrCreate(product) {

		var line = state.map[product.id];
		if (!line) {
			line = new CartLine({product: product});
			state.list.push(line);
			state.map[product.id] = line;
		}

		return line;
	}

	function isBought(product) {

		var line = state.map[product.id];
		var bought = line && line.quantity;

		return !!bought;
	}
}