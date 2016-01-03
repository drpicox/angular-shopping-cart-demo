'use strict';

var ngCore = require('angular2/core');

var PRODUCTS = require('./MockProducts.js');

module.exports = ngCore.Injectable().Class({
	constructor: function() {
	},

	retrieveAll: function() {
		return new Promise(function(resolve) {
			setTimeout(function() {
				resolve(PRODUCTS);
			}, 2000); // 2 second
		});
	},
});