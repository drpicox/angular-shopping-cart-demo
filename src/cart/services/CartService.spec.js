// CartService.spec.js
describe('cartService', function() {
	'use strict';

	beforeEach(module('scd.cart.services'));

	beforeEach(inject(function(productsDictionary) {
		productsDictionary.takeAll([{
			id: 1,
			price: 2.2,
		},{
			id: 3,
			price: 4.4,
		}]);
	}));

	it('buy one article updates totals', inject(function(cartLinesDictionary, cartService, cartSingleton, $rootScope) {
		
		cartService.buy(1);		

		$rootScope.$digest();

		expect(cartLinesDictionary.list.length).toBe(1);
		expect(cartLinesDictionary.list[0].id).toBe(1);
		expect(cartLinesDictionary.list[0].quantity).toBe(1);
		expect(cartLinesDictionary.list[0]).toBe(cartLinesDictionary.map[1]);
		expect(cartSingleton.instance.count).toBe(1);
		expect(cartSingleton.instance.price).toBe(2.2);
	}));
});
