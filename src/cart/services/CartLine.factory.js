// CartLine.factory.js
/*
	CartLine:
		.product
		.quantity

*/
'use strict';

module.exports = CartLineFactory;

var extend = require('angular').extend;

/* @ngInject */
function CartLineFactory() {
	/*jshint validthis: true */

	function CartLine(lineDescription) {
		this.quantity = 0;
		extend(this, lineDescription);
	}

	CartLine.prototype.decrement = decrement;
	CartLine.prototype.drop = drop;
	CartLine.prototype.increment = increment;

	return CartLine;

	///////

	function decrement() {

		// decrement cannot go below 1
		if (this.quantity > 1) {
			this.quantity = this.quantity - 1;
		} 
	}

	function drop() {
		this.quantity = 0;
	}

	function increment() {
		this.quantity = this.quantity + 1;
	}
}