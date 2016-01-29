// HeaderCart.directive.js
/*
	HeaderCart
*/
'use strict';

module.exports = HeaderCartDirective;

/* @ngInject */
function HeaderCartDirective() {
	var directive = {
		restrict: 'E',
		template: require('./HeaderCart.tpl.html'),
		scope: {},
		controller: HeaderCartController,
		controllerAs: 'vm',
		bindToController: {},
	};
	return directive;
}

/* @ngInject */
function HeaderCartController(cartService) {
	var vm = this;

	vm.cart = cartService.getInstance();

	///////

}

