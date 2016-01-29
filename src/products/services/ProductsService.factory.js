// ProductsService.factory.js
'use strict';

module.exports = ProductsServiceFactory;

/* @ngInject */
function ProductsServiceFactory(productsDictionary, productsRemote) {
	var service = {
		get: get,//(productId): product
		getList: getList,//(): [product]
		loadAll: loadAll,//()
	};
	return service;

	//////

	function get(productId) {
		return productsDictionary.map[productId];
	}

	function getList() {
		return productsDictionary.list;
	}

	function loadAll() {
		return productsRemote.retrieveAll().then(function(productInfoList) {
			productsDictionary.takeAll(productInfoList);
			productsDictionary.$update();

			return productsDictionary.list;
		});
	}
}