// ProductsService.spec.js
describe('productsService', function() {
	'use strict';
	
	beforeEach(module('scd.products.services'));

	var productsRemote, productsDictionary;
	beforeEach(module(function($provide) {
		productsRemote = jasmine.createSpyObj('productsRemote', ['retrieveAll']);
		productsDictionary = jasmine.createSpyObj('productsDictionary', ['takeAll','$update']);
	
		productsDictionary.list = [];

		$provide.value('productsDictionary', productsDictionary);
		$provide.value('productsRemote', productsRemote);
	}));

	it('load all products from remote, store them in the dictionary and return dictionary list', inject(function(productsService, $q, $rootScope) {
		
		var rawList = [1,2,3], result;
		productsRemote.retrieveAll.and.returnValue($q.when(rawList));
		productsService.loadAll().then(function(newResult) {
			result = newResult;
		});

		$rootScope.$digest();

		expect(productsRemote.retrieveAll).toHaveBeenCalled();
		expect(productsDictionary.takeAll).toHaveBeenCalledWith(rawList);
		expect(productsDictionary.$update).toHaveBeenCalled();
		expect(result).toBe(productsDictionary.list);
	}));

});