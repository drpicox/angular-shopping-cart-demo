// ProductsRemote.factory.js
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
		return $http.get('/api/v1/products').then(function(response) {
			return response.data;
		});
	}
}