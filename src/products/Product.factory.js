// Product.factory.js
/*
	A Product that can be bought.
		- id
		- name
		- image
		- price
*/
'use strict';

module.exports = ProductFactory;

var extend = require('angular').extend;

/* @ngInject */
function ProductFactory() {
	/*jshint validthis: true */

	function Product() {
	}

	Product.prototype.deserialize = deserialize;

	return Product;

	///////

	function deserialize(serializedProduct) {
		extend(this, serializedProduct);
	}
}