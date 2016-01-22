// ProductsRemote.spec.js
describe('productsRemote', function() {
	'use strict';

	beforeEach(module('scd.products.services'));

	//beforeEach(module('ng', function($exceptionHandlerProvider) {
	//	$exceptionHandlerProvider.mode('log');
	//}));

	it('should return the remote list of products', inject(function(productsRemote,$httpBackend) {

		var result;
		var expected = [1,2,3];
		$httpBackend.expect('GET','/api/v1/products').respond(expected);

		productsRemote.retrieveAll().then(function(rawResult) {
			result = rawResult;
		});

		$httpBackend.flush();
		expect(result).toEqual(expected);
	}));
	
	afterEach(inject(function($httpBackend) {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	}));
});
