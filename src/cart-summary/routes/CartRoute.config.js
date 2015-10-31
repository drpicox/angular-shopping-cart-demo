// CartRoute.config.js
/*
	CartRoute

*/
'use strict';

module.exports = CartRouteConfig;

/* @ngInject */
function CartRouteConfig($routeProvider) {
	$routeProvider.when('/cart', {
		template: require('./CartRoute.tpl.html'),
		controller: CartRouteController,
		controllerAs: 'vm',
	});
}

/* @ngInject */
function CartRouteController(cartState, cartLinesState) {
	var vm = this;

	vm.cart = cartState;
	vm.decrement = decrement;
	vm.drop = drop;
	vm.increment = increment;

	///////

	function decrement(cartLine) {
		cartLine.decrement();
		cartLinesState.$update();
	}

	function drop(cartLine) {
		cartLine.drop();
		cartLinesState.$update();
	}

	function increment(cartLine) {
		cartLine.increment();
		cartLinesState.$update();
	}
}
