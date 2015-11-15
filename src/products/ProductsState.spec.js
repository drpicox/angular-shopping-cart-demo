// ProductsState.spec.js
describe('productsState', function() {
	'use strict';

	beforeEach(module('scd.products'));

	beforeEach(module('ng', function($exceptionHandlerProvider) {
		$exceptionHandlerProvider.mode('log');
	}));
	
	it('should evantually fire scd.productsUpdate when $update', inject(function(productsState, $rootScope) {
		var fired;

		var unon = $rootScope.$on('scd.productsUpdate', function() {
			fired = true;
		});
		productsState.$update();
		$rootScope.$digest();

		expect(fired).toBe(true);
		unon();
	}));
});
