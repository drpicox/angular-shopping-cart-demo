// CartState.factory.js
/*
	CartState:
		
		State that contains the current shopping and totals.
		Note: total price is derived value from cartLines, the same
		that list that is a subset.

*/
'use strict';

module.exports = CartStateFactory;

/* @ngInject */
function CartStateFactory(cartLinesState, drpxUpdateable, $rootScope) {
	var state = {
		list: [],
		totalItems: 0,
		totalPrice: 0,
		$update: drpxUpdateable('scd.CartUpdate'),
	};

	// it depenends of cart lines and product prices
	$rootScope.$on('scd.productsUpdate', _update);
	$rootScope.$on('scd.cartLinesUpdate', _update);
	// trigger always the action of the event, just if you missed it
	_update(); 

	return state;

	//////

	//////

	// update its state depending of others, it should be repeatable
	// in short: it computes the "invariants"
	// do you want to optimize it? (really? not needed): use one for loop
	function _update() {

		state.list.length = 0;
		cartLinesState.list.forEach(function(cartLine){
			if (cartLine.quantity) {
				state.list.push(cartLine);
			}
		});

		state.totalItems = state.list.reduce(function(sum, cartLine) {
			return sum + cartLine.quantity;
		}, 0);

		state.totalPrice = state.list.reduce(function(sum, cartLine) {
			return sum + cartLine.product.price * cartLine.quantity;
		}, 0);

		// cartState is updated... so, we notify
		state.$update();
	}

}