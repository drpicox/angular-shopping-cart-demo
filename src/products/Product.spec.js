describe('Product', function() {

	beforeEach(module('scd.products'));

	it('should deserialize values', inject(function(Product) {

		var product = new Product();
		var values = {
			id: 'id',
			name: 'name',
			price: 'price',
			image: 'image',
		};
		product.deserialize(values);

		angular.forEach(values, function(value, key) {
			expect(product[key]).toBe(value);
		});
	}));

});