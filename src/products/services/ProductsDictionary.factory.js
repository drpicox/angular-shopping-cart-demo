// ProductsDictionary.factory.js
'use strict';

module.exports = ProductsDictionaryFactory;

/* @ngInject */
function ProductsDictionaryFactory(Product, drpxUpdateable) {
	var dictionary = {
		list: [],
		map: {},
		getOrCreate: getOrCreate,
		takeAll: takeAll,
		$update: drpxUpdateable('scd.productsUpdate'),
	};
	return dictionary;

	//////

	function getOrCreate(id) {
		var product = dictionary.map[id];
		if (!product) {
			product = new Product(id);
			dictionary.list.push(product);
			dictionary.map[id] = product;
		}
		return product;
	}

	function takeAll(productInfoList) {
		productInfoList.forEach(function(productInfo) {
			var product = getOrCreate(productInfo.id);
			product.take(productInfo);
		});
	}
}