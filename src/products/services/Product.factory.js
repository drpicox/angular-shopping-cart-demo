// Product.factory.js
/*
	Product:
		.

*/
'use strict';

module.exports = ProductFactory;

/* @ngInject */
function ProductFactory() {
	/*jshint validthis: true */

	function Product(id) {
		this.id = id;
	}

	Product.prototype.take = take;

	return Product;

	///////

	function take(productInfo) {
		this.name = productInfo.name;
		this.image = productInfo.image;
		this.price = productInfo.price;
	}
}