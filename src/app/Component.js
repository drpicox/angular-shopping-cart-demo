'use strict';

var ngCore = require('angular2/core');

var CartState = require('../cart/CartState');
var ProductsRemote = require('../products/ProductsRemote');

module.exports = ngCore.Component({
    selector: 'shopping-cart-demo-app',
    template: require('./Component.html'),
    providers: [CartState, ProductsRemote],
}).Class({
	constructor: [ 
			CartState, ProductsRemote, function (
			cartState, productsRemote) {
		this.cart = cartState;

		productsRemote.retrieveAll().then(function(data) {
			console.debug(data);
		});
	}],
});