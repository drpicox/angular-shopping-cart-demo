// CartLine.factory.js
'use strict';

module.exports = CartLineFactory;

/* @ngInject */
function CartLineFactory() {
	/*jshint validthis: true */

	function CartLine(id) {
		this.id = id;
		this.quantity = 0;
	}

	CartLine.prototype.decrease = decrease;
	CartLine.prototype.increase = increase;

	return CartLine;

	///////

	function decrease(quantity) {
		this.quantity -= quantity;
	}

	function increase(quantity) {
		this.quantity += quantity;
	}
}