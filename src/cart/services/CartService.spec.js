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

	it('buy one article updates totals', inject(function(cartLinesService, cartService, $rootScope) {
		
		var cart = cartService.getInstance();
		cartLinesService.buy(1);		

		$rootScope.$digest();

		expect(cart.count).toBe(1);
		expect(cart.price).toBe(2.2);
	}));

	it('buy five times articles updates totals', inject(function(cartLinesService, cartService, $rootScope) {
		
		var cart = cartService.getInstance();
		cartLinesService.buy(1);
		cartLinesService.buy(3);

		$rootScope.$digest();

		cartLinesService.buy(1);
		cartLinesService.buy(1);
		cartLinesService.buy(3);

		$rootScope.$digest();

		expect(cart.count).toBe(5);
		expect(cart.price).toBe(3*2.2 + 2*4.4);
	}));

	it('increase acts like buy', inject(function(cartLinesService, cartService, $rootScope) {
		
		var cart = cartService.getInstance();
		cartLinesService.increase(1, 1);
		cartLinesService.increase(3, 1);

		$rootScope.$digest();

		cartLinesService.increase(1, 3);
		cartLinesService.increase(1, 1);
		cartLinesService.increase(3, 3);

		$rootScope.$digest();

		expect(cart.count).toBe(9);
		expect(cart.price).toBe(5*2.2 + 4*4.4);
	}));

	it('decrease reduces totals', inject(function(cartLinesService, cartService, $rootScope) {
		
		var cart = cartService.getInstance();
		cartLinesService.increase(1, 5);
		cartLinesService.decrease(1, 2);

		$rootScope.$digest();

		expect(cart.count).toBe(3);
		expect(cart.price).toBe(3*2.2);
	}));

	it('drop removes a product and updates totals', inject(function(cartLinesService, cartService, $rootScope) {
		
		var cart = cartService.getInstance();
		cartLinesService.increase(1, 3);
		cartLinesService.increase(3, 5);
		cartLinesService.drop(3);

		$rootScope.$digest();

		expect(cart.count).toBe(3);
		expect(cart.price).toBe(3*2.2);
	}));

	it('should fire update event', inject(function(cartLinesService, cartService, $rootScope) {

		var count, price;
		var cart = cartService.getInstance();

		$rootScope.$on('scd.cartLinesUpdate', function() {
			count = cart.count;
			price = cart.price;
		});

		cartLinesService.buy(1);
		$rootScope.$digest();

		expect(count).toBe(1);
		expect(price).toBe(2.2);
	}));


});
