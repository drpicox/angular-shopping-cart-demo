// ProductsService.factory.js
'use strict';

module.exports = ProductsServiceFactory;

/* @ngInject */
function ProductsServiceFactory(productsDictionary, productsRemote) {
	var service = {
		loadAll: loadAll,//()
	};
	return service;

	//////

	function loadAll() {
		return productsRemote.retrieveAll().then(function(productInfoList) {
			productsDictionary.takeAll(productInfoList);
			productsDictionary.$update();

			return productsDictionary.list;
		});
	}
}