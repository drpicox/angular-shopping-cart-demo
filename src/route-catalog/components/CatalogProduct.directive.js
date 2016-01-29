// CatalogProduct.directive.js
/*
	CatalogProduct
*/
'use strict';

module.exports = CatalogProductDirective;

/* @ngInject */
function CatalogProductDirective() {
	var directive = {
		restrict: 'E',
		template: require('./CatalogProduct.tpl.html'),
		scope: {},
		controller: CatalogProductController,
		controllerAs: 'vm',
		bindToController: {
			product: '=',		
		},
	};
	return directive;
}

/* @ngInject */
function CatalogProductController(cartLinesService) {
	var vm = this;

	vm.buy = buy;//()
	vm.isBought = isBought;//()

	///////

	function buy() {
		cartLinesService.buy(vm.product.id);
	}

	function isBought() {
		cartLinesService.isBought(vm.product.id);
	}
}

