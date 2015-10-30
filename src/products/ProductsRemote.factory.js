// ProductsRemote.factory.js
/*
	ProductsRemote:
		
		Retrieve products form a remote.
		Note: because it is a demo, it loads them from a stub, not $http.

*/
'use strict';

module.exports = ProductsRemoteFactory;

/* @ngInject */
function ProductsRemoteFactory($timeout) {
	var service = {
		loadAll: loadAll,//()
	};
	return service;

	//////

	function loadAll() {
		// use timeout as stub of $http
		return $timeout(function() {
			return [
				{
					id: 'banana',
					name: 'Banana',
					image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdMiOJN1mzCK0iNuz-L-ta4ec-pgET8nAZFjWCPQ74irvGoQugLQ',
					price: 5.0,
				},
				{
					id: 'tangerine',
					name: 'Tangerine',
					image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWTxaRazufScqWd8V4bMxc0-PZ6VxqFgb5SldVRButlXjD0pW3',
					price: 15.0,
				},
				{
					id: 'strawberry',
					name: 'Strawberry',
					image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjeGO-FFrwHY22yKUb0hLWnH96EJwPWEWjeHOrbjYdH3oEDbAkKg',
					price: 10.0,
				},
			];
		}, 1000);
	}
}