'use strict';

var ngCore = require('angular2/core');

module.exports = ngCore.Injectable().Class({
	constructor: function() {
		this.totalItems = 1;
	},
});