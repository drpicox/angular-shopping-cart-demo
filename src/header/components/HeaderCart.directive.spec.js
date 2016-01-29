// CatalogProductDirective.spec.js
'use strict';

describe('<scd-header-cart>', function() {
	var element, vm;

	beforeEach(module('scd.header.components'));

	var cartService;
	beforeEach(module(function($provide) {
		$provide.factory('cartService', function($q) {
			return cartService = {
				_cart: {count:0},
				getInstance: function() { return this._cart; },
			}
		});
	}));

	beforeEach(inject(function($compile,$location,$rootScope) {
		element = $compile('<scd-header-cart product="product"></scd-header-cart>')($rootScope);
		$rootScope.$digest();
		vm = element.isolateScope().vm;
	}));

	it('should have the cart', inject(function() {
		expect(vm.cart).toBe(cartService._cart);
	}));

	it('should show the count if greater than 0', inject(function($rootScope) {
		cartService._cart.count = 123;
		$rootScope.$digest();
		var html = element.html();
		expect(html).toContain('123');
	}));

	it('should show the count if 0', inject(function($rootScope) {
		var html = element.html();
		expect(html).not.toContain('0');
	}));

});
