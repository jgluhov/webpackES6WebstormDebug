'use strict';

import angular from 'angular';

class HomeCtrl {
	constructor() {
		this.name = 'HomeCtrl'
	}

	show() {
		console.log(this.name);
	}
}

const app = angular.module('app', [])
	.controller('HomeCtrl', HomeCtrl)
	.name;

angular.bootstrap(document, [app]);