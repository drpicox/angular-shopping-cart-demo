// ProductMedia.directive.js
/*
	ProductMedia
*/
'use strict';

module.exports = ProductMediaDirective;

/* @ngInject */
function ProductMediaDirective() {
	var directive = {
		restrict: 'E',
		template: require('./ProductMedia.tpl.html'),
		scope: {},
		controller: ProductMediaController,
		controllerAs: 'vm',
		bindToController: {
			product: '=',
			bought: '=',
			fireBuy: '&onBuy',		
		},
	};
	return directive;
}

/* @ngInject */
function ProductMediaController() {
	//var vm = this;
}

