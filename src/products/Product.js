var ngCore = require('angular2/core');

module.exports = ngCore.Class({
	constructor: function(values) {
		if (values) {
			this.take(values);
		}
	},

	take: function(values) {
		this.id = values.id;
		this.name = values.name;
		this.image = values.image;
		this.price = values.price;
	},
});