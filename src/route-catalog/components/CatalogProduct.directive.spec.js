// CatalogProductDirective.spec.js
'use strict';

describe('<scd-catalog-product>', function() {
	var element, vm, product;

	beforeEach(module('scd.route-catalog.components'));

	var cartLinesService;
	beforeEach(module(function($provide) {
		$provide.factory('cartLinesService', function($q) {
			return cartLinesService = jasmine.createSpyObj('cartLinesService', ['buy','isBought']);
		});
	}));

	beforeEach(inject(function($compile,$location,$rootScope) {
		$rootScope.product = product = {id:'1',name:'##name',image:'##image',price:1.1};
		element = $compile('<scd-catalog-product product="product"></scd-catalog-product>')($rootScope);
		$rootScope.$digest();
		vm = element.isolateScope().vm;
	}));

	it('should have the product', inject(function() {
		expect(vm.product).toBe(product);
	}));

	it('should show the product', inject(function() {
		var html = element.html();
		expect(html).toContain(product.id);
		expect(html).toContain(product.name);
		expect(html).toContain(product.image);
	}));

	it('should call buy when primary button is clicked', inject(function() {
		element[0].querySelector('button.btn-primary').dispatchEvent(newEvent('click'));
		expect(cartLinesService.buy).toHaveBeenCalled();
	}));

	function newEvent(name) {
		var event = document.createEvent('Event');
		event.initEvent('click', true, true);
		return event;
	}

});
