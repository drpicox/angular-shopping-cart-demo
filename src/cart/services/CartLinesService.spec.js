// CartLinesService.spec.js
describe('cartLinesService', function() {
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

	it('buy one article adds one line', inject(function(cartLinesService, CartLine, $rootScope) {
		
		cartLinesService.buy(1);
		var lines = cartLinesService.getList();
		var line1 = cartLinesService.get(1);

		$rootScope.$digest();

		expect(lines.length).toBe(1);
		expect(lines[0].id).toBe(1);
		expect(lines[0].quantity).toBe(1);
		expect(lines[0]).toBe(line1);
		expect(lines[0] instanceof CartLine).toBe(true);
	}));

	it('buy two article adds two line', inject(function(cartLinesService, $rootScope) {
		
		cartLinesService.buy(1);
		cartLinesService.buy(3);

		$rootScope.$digest();

		var lines = cartLinesService.getList();
		var line1 = findById(lines, 1);
		var line3 = findById(lines, 3);

		expect(lines.length).toBe(2);
		expect(line1).toBeDefined();
		expect(line3).toBeDefined();
		expect(cartLinesService.get(1)).toBe(line1);
		expect(cartLinesService.get(3)).toBe(line3);
	}));

	it('buy five times two articles articles updates quantities', inject(function(cartLinesService, $rootScope) {
		
		cartLinesService.buy(1);
		cartLinesService.buy(3);

		$rootScope.$digest();

		cartLinesService.buy(1);
		cartLinesService.buy(1);
		cartLinesService.buy(3);

		$rootScope.$digest();

		var line1 = cartLinesService.get(1);
		var line3 = cartLinesService.get(3);
		expect(line1.quantity).toBe(3);
		expect(line3.quantity).toBe(2);
	}));

	it('increase acts like buy', inject(function(cartLinesService, $rootScope) {
		
		cartLinesService.increase(1, 1);
		cartLinesService.increase(3, 1);

		$rootScope.$digest();

		cartLinesService.increase(1, 3);
		cartLinesService.increase(1, 1);
		cartLinesService.increase(3, 3);

		$rootScope.$digest();

		var line1 = cartLinesService.get(1);
		var line3 = cartLinesService.get(3);
		expect(line1.quantity).toBe(5);
		expect(line3.quantity).toBe(4);
	}));

	it('decrease reduces quantities', inject(function(cartLinesService, $rootScope) {
		
		var lines = cartLinesService.getList();
		cartLinesService.increase(1, 5);
		cartLinesService.decrease(1, 2);

		$rootScope.$digest();

		expect(lines.length).toBe(1);
		expect(lines[0].id).toBe(1);
		expect(lines[0].quantity).toBe(3);
	}));

	it('drop removes a product and updates totals', inject(function(cartLinesService, $rootScope) {
		
		var lines = cartLinesService.getList();
		cartLinesService.increase(1, 3);
		cartLinesService.increase(3, 5);
		cartLinesService.drop(3);

		$rootScope.$digest();

		expect(lines.length).toBe(1);
		expect(lines[0]).toBe(cartLinesService.get(1));
		expect(cartLinesService.get(3)).toBeUndefined();
		expect(lines[0].quantity).toBe(3);
	}));

	it('changes triggers Update event eventually', inject(function(cartLinesService, $rootScope) {
		var updates = {}, step;

		$rootScope.$on('scd.cartLinesUpdate', function() {
			updates[step] = step;
		});

		step = 'buy';
		cartLinesService.buy(1);
		$rootScope.$digest();

		step = 'increase';
		cartLinesService.increase(1, 3);
		$rootScope.$digest();

		step = 'decrease';
		cartLinesService.decrease(1, 1);
		$rootScope.$digest();

		step = 'drop';
		cartLinesService.drop(1);
		$rootScope.$digest();

		expect(updates['buy']).toBe('buy');		
		expect(updates['increase']).toBe('increase');		
		expect(updates['decrease']).toBe('decrease');		
		expect(updates['drop']).toBe('drop');		
	}));


	function findById(array, id) {
		var i, l;
		for (i = 0, l = array.length; i < l; i++) {
			if (array[i].id === id) { return array[i]; }
		}
	}


});
