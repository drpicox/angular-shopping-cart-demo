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

	CartLine.prototype.increase = increase;

	return CartLine;

	///////

	function increase(quantity) {
		this.quantity += quantity;
	}
}