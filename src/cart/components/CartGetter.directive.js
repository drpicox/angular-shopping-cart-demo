// CartGetter.directive.js
/*
	CartGetterDirective: sets the cartState into the controller.

	<scd-cart-getter name="cart"></scd-cart-getter>
*/
'use strict';

module.exports = CartGetterDirective;

/* @ngInject */
function CartGetterDirective(cartState) {
	var directive = {
		restrict: 'E',
		link: link,
	};
	return directive;

	function link(scope, element, attrs) {
		scope[attrs.name] = cartState;
	}
}
