// ProductsService.spec.js
describe('productsService', function() {
	'use strict';

	beforeEach(module('scd.products'));

	var productsRemote, productsState;
	beforeEach(module(function($provide) {
		productsRemote = jasmine.createSpyObj('productsRemote', ['retrieveAll']);
		productsState = jasmine.createSpyObj('productsState', ['deserializeAll','$update']);
	
		productsState.list = [];

		$provide.value('productsState', productsState);
		$provide.value('productsRemote', productsRemote);
	}));

	it('scd.products', inject(function(productsService, $q, $rootScope) {

		var rawList = [{id: 1, price: 1}], result;
		productsRemote.retrieveAll.and.returnValue($q.when(rawList));
		productsService.loadAll().then(function(newResult) {
			result = newResult;
		});

		$rootScope.$digest();

		expect(productsRemote.retrieveAll).toHaveBeenCalled();
		expect(productsState.deserializeAll).toHaveBeenCalledWith(rawList);
		expect(productsState.$update).toHaveBeenCalled();
		expect(result).toBe(productsState.list);
	}));

});