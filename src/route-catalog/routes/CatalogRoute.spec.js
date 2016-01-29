// CatalogRoute.spec.js
'use strict';

describe('/catalog', function() {
	var ngView, vm;

	beforeEach(module('scd.route-catalog.routes'));

	var productsService;
	beforeEach(module(function($provide) {
		$provide.factory('productsService', function($q) {
			return productsService = {
				_list: [{id:1,name:'##name1',price:1.1,image:'##image1'},{id:2,name:'##name2',price:2.22,image:'##image2'}],
				loadAll: function() { return $q.when(this._list); },
			};
		});
	}));

	beforeEach(function() {
		ngView = vm = null;
	});

	it('should have vm which is the controller', function() {
		instanceRoute();
		expect(ngView.controller()).toBeDefined();
		expect(vm).toBe(ngView.controller());
	});

	it('should have products', inject(function(productsService) {
		instanceRoute();
		expect(vm.products).toBe(productsService._list);
	}));

	it('should show all products', inject(function(productsService) {
		instanceRoute();

		var html = ngView.html();
		productsService._list.forEach(function(product) {
			expect(html).toContain(product.name);
			expect(html).toContain(product.image);
			expect(html).toContain(product.price);
		});
	}));

	function instanceRoute() {
		inject(function($compile,$location,$rootScope) {
			var root = $compile('<div><div ng-view></div></div>')($rootScope);
			$location.path('/catalog');
			$rootScope.$digest();
			ngView = root.children();
			vm = ngView.scope().vm;
		});
	}
});
