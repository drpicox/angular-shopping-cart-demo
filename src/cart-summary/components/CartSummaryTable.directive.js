// CartSummaryTable.directive.js
/*
	CartSummaryTable
*/
'use strict';

module.exports = CartSummaryTableDirective;

/* @ngInject */
function CartSummaryTableDirective() {
	var directive = {
		restrict: 'E',
		template: require('./CartSummaryTable.tpl.html'),
		scope: {},
		controller: CartSummaryTableController,
		controllerAs: 'vm',
		bindToController: {
			cart: '=',
			fireDecrement: '&onDecrement',
			fireDrop: '&onDrop',
			fireIncrement: '&onIncrement',
		},
	};
	return directive;
}

/* @ngInject */
function CartSummaryTableController() {
	//var vm = this;
}

