// Cart.factory.js
'use strict';

module.exports = CartFactory;

/* @ngInject */
function CartFactory() {
	/*jshint validthis: true */

	function Cart() {
		this.count = 0;
		this.price = 0;
	}

	Cart.prototype.account = account;
	Cart.prototype.clear = clear;

	return Cart;

	///////

	function account(product, quantity) {
		this.count += quantity;
		this.price += product.price * quantity;
	}

	function clear() {
		this.count = 0;
		this.price = 0;
	}
}