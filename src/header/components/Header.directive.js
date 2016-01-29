// Header.directive.js
/*
	Header
*/
'use strict';

module.exports = HeaderDirective;

/* @ngInject */
function HeaderDirective() {
	var directive = {
		restrict: 'E',
		template: require('./Header.tpl.html'),
		scope: {},
		controller: HeaderController,
		controllerAs: 'vm',
		bindToController: {},
	};
	return directive;
}

/* @ngInject */
function HeaderController() {
	//var vm = this;
}

