// ProductsRemote.factory.js
/*
	ProductsRemote:
		
		Retrieve products form a remote.
		Note: because it is a demo, it loads them from a stub, not $http.

*/
'use strict';

module.exports = ProductsRemoteFactory;

/* @ngInject */
function ProductsRemoteFactory($http) {
	var service = {
		retrieveAll: retrieveAll,//()
	};
	return service;

	//////

	function retrieveAll() {
		// use timeout as stub of $http
		return $http.get('/api/products').then(function(response) {
			return response.data;
		});
	}
}