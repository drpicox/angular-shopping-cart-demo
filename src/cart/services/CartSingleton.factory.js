// CartSingleton.factory.js
/*
	cartSingleton:
		-    

*/
'use strict';

module.exports = cartSingletonFactory;

/* @ngInject */
function cartSingletonFactory(Cart, drpxUpdateable) {
	var singleton = {
		instance: new Cart(),
		$update: drpxUpdateable('scd.cartUpdate'),
	};
	return singleton;

	//////


}