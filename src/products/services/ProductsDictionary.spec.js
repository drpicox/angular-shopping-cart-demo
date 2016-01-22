// ProductsDictionary.spec.js
describe('ProductsDictionary', function() {
	'use strict';

	beforeEach(module('scd.products.services'));

	function Product(id) {
		this.id = id;
	}
	Product.prototype.take = function(data) { this.taken = data; };
	beforeEach(module(function($provide) {
		$provide.value('Product', Product);
	}));

	it('should take an array of data as Product', inject(function(productsDictionary) {
		
		var datas = [{id:1},{id:2}];
		productsDictionary.takeAll(datas);

		expect(productsDictionary.list.length).toBe(2);
		expect(productsDictionary.map[1].id).toBe(1);
		expect(productsDictionary.map[2].id).toBe(2);

		var first = productsDictionary.list[0].id === 1 ? productsDictionary.list[0] : productsDictionary.list[1];
		var second = productsDictionary.list[0].id === 2 ? productsDictionary.list[0] : productsDictionary.list[1];

		expect(first).toBe(productsDictionary.map[1]);
		expect(second).toBe(productsDictionary.map[2]);

		expect(first.taken).toBe(datas[0]);
		expect(second.taken).toBe(datas[1]);

		expect(first instanceof Product).toBe(true);
		expect(second instanceof Product).toBe(true);
	}));

	it('should not replicate values', inject(function(productsDictionary) {
		
		var data1 = {id:1,t:1};
		var data2 = {id:1,t:2};

		productsDictionary.takeAll([data1]);
		var product1 = productsDictionary.list[0];
		expect(product1.taken).toBe(data1);

		productsDictionary.takeAll([data2]);
		var product2 = productsDictionary.list[0];

		expect(product1).toBe(product2);
		expect(productsDictionary.map[1]).toBe(product1);
		expect(product1.taken).toBe(data2);
	}));

	it('should have a getOrCreate method', inject(function(productsDictionary) {
		var product = productsDictionary.getOrCreate(1);
		expect(product.id).toBe(1);
		expect(productsDictionary.list[0]).toBe(product);
		expect(productsDictionary.map[1]).toBe(product);
		product.taken = 3;

		var same = productsDictionary.getOrCreate(1);
		expect(same).toBe(product);
		expect(product.taken).toBe(3);
	}));
	
	it('should evantually fire scd.productUpdate when $update', inject(function(productsDictionary, $rootScope) {
		var fired;

		var unlisten = $rootScope.$on('scd.productsUpdate', function() {
			fired = true;
		});
		productsDictionary.$update();
		$rootScope.$digest();

		expect(fired).toBe(true);
		unlisten();
	}));
});
