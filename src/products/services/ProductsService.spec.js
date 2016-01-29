// ProductsService.spec.js
describe('productsService', function() {
	'use strict';
	
	beforeEach(module('scd.products.services'));

	it('load all products from remote, store them and return list instance', inject(function(productsService, $httpBackend) {
		var list = productsService.getList();

		var result;
		var expected = [{id:1},{id:2},{id:3}];
		$httpBackend.expect('GET','/api/v1/products').respond(expected);

		productsService.loadAll().then(function(newResult) {
			result = newResult;
		});

		$httpBackend.flush();

		var product1 = productsService.get(1);
		var product2 = productsService.get(2);
		var product3 = productsService.get(3);

		expect(result).toBe(list);
		expect(list.length).toBe(3);
		expect(product1.id).toBe(1);
		expect(product2.id).toBe(2);
		expect(product3.id).toBe(3);
		expect(list).toContain(product1);
		expect(list).toContain(product2);
		expect(list).toContain(product3);
	}));

	it('load product details correctly', inject(function(productsService, $httpBackend) {
		var list = productsService.getList();

		var expected = [{id:1,name:'aname',price:'aprice',image:'animage'}];
		$httpBackend.expect('GET','/api/v1/products').respond(expected);

		productsService.loadAll();

		$httpBackend.flush();

		var product1 = list[0];
		expect(product1.id).toBe(expected[0].id);
		expect(product1.name).toBe(expected[0].name);
		expect(product1.price).toBe(expected[0].price);
		expect(product1.image).toBe(expected[0].image);
	}));

	it('load triggers update event', inject(function(productsService, $httpBackend, $rootScope) {
		var list = productsService.getList();
		var product1;

		$rootScope.$on('scd.productsUpdate', function() {
			product1 = list[0];
		});

		var expected = [{id:1}];
		$httpBackend.expect('GET','/api/v1/products').respond(expected);

		productsService.loadAll();

		$httpBackend.flush();
		$rootScope.$digest();

		expect(product1.id).toBe(1);
	}));

	afterEach(inject(function($httpBackend) {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	}));
});