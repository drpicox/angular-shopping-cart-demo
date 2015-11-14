// ProductsRemote.spec.js
describe('productsRemote', function() {
	'use strict';
	
	beforeEach(module('scd.products'));

	beforeEach(module('ng', function($exceptionHandlerProvider) {
		$exceptionHandlerProvider.mode('log');
	}));

	it('should return a list of products', inject(function(productsRemote,$httpBackend) {

		var result;
		var expected = 'something';
		$httpBackend.expect('GET','/api/products').respond(expected);

		productsRemote.retrieveAll().then(function(rawResult) {
			result = rawResult;
		});

		$httpBackend.flush();
		expect(result).toBe(expected);
	}));
	
	afterEach(inject(function($httpBackend) {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	}));
});
