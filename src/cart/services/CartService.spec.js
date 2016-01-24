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

	it('buy five times articles updates totals', inject(function(cartLinesDictionary, cartService, cartSingleton, $rootScope) {
		
		cartService.buy(1);
		cartService.buy(3);

		$rootScope.$digest();

		cartService.buy(1);
		cartService.buy(1);
		cartService.buy(3);

		$rootScope.$digest();

		expect(cartLinesDictionary.list.length).toBe(2);
		expect(cartSingleton.instance.count).toBe(5);
		expect(cartSingleton.instance.price).toBe(3*2.2 + 2*4.4);
	}));

	it('increase acts like buy', inject(function(cartLinesDictionary, cartService, cartSingleton, $rootScope) {
		
		cartService.increase(1, 1);
		cartService.increase(3, 1);

		$rootScope.$digest();

		cartService.increase(1, 3);
		cartService.increase(1, 1);
		cartService.increase(3, 3);

		$rootScope.$digest();

		expect(cartLinesDictionary.list.length).toBe(2);
		expect(cartSingleton.instance.count).toBe(9);
		expect(cartSingleton.instance.price).toBe(5*2.2 + 4*4.4);
	}));

	it('decrease reduces totals', inject(function(cartLinesDictionary, cartService, cartSingleton, $rootScope) {
		
		cartService.increase(1, 5);
		cartService.decrease(1, 2);

		$rootScope.$digest();

		expect(cartLinesDictionary.list.length).toBe(1);
		expect(cartSingleton.instance.count).toBe(3);
		expect(cartSingleton.instance.price).toBe(3*2.2);
	}));

	it('drop removes a product and updates totals', inject(function(cartLinesDictionary, cartService, cartSingleton, $rootScope) {
		
		cartService.increase(1, 3);
		cartService.increase(3, 5);
		cartService.drop(3);

		$rootScope.$digest();

		expect(cartLinesDictionary.list.length).toBe(1);
		expect(cartLinesDictionary.map[3]).toBeUndefined();
		expect(cartSingleton.instance.count).toBe(3);
		expect(cartSingleton.instance.price).toBe(3*2.2);
		expect(cartSingleton.instance.price).toBe(3*2.2);
	}));


});
