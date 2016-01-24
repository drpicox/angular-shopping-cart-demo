// Product.spec.js
describe('Product', function() {
	'use strict';

	beforeEach(module('scd.products.services'));

	it('should have a constructor with id', inject(function(Product) {
		
		var id = 1;
		var product = new Product(id);

		expect(product.id).toBe(id);
	}));

	it('should have a take method', inject(function(Product) {
		
		var productInfo = {
			id: 1,
			name: 'name',
			image: 'image',
			price: 'price',
		};
		var product = new Product(1);
		product.take(productInfo);

		Object.keys(productInfo).forEach(function(key) {
			expect(product[key]).toBe(productInfo[key]);
		});
	}));
});
