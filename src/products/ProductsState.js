'use strict';

var ngCore = require('angular2/core');

var Product = require('./Product');

module.exports = ngCore.Injectable().Class({
	constructor: function() {
		this.list = [];
		this.map = {};
	},

	getOrCreate: function(productId) {

		var product = this.map[serializedProduct.id];
		if (!product) {
			product = newProduct();
			this.list.push(product);
			this.map[serializedProduct.id] = product;
		}
		return product;
	},

	takeAll: function(serializedProducts) {
		serializedProducts.forEach(function(serializedProduct) {

			var product = this.getOrCreate(serializedProduct.id);
			product.take(serializedProduct);

		}, this);
	},
});