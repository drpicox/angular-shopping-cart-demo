// ProductsService.factory.js
/*
	ProductsService:
	
		This artifact is responsible to create data paths of information between stores (remote, local, ...)   
	
		The separation (having a Remote, Store, State in addition to the Service) 
		helps to organize when to save data, when not, when send to server, 
		when load and when cache.


*/
'use strict';

module.exports = ProductsServiceFactory;

/* @ngInject */
function ProductsServiceFactory(productsRemote, productsState) {
	var service = {
		loadAll: loadAll,//()
	};

	var loadCache = null;

	return service;

	//////

	function loadAll() {
		// only loads data once
		if (!loadCache) { 
			// first it gets data from remote
			loadCache = productsRemote.loadAll()

			// next it deserializes and stores in products state
			.then(function(serializedProducts) {

				// load data into state and call $update
				productsState.deserializeAll(serializedProducts);
				productsState.$update();

				// and return all products list
				return productsState.list;
				
			});
		}

		return loadCache;
	}
}