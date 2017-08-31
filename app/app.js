"use strict";
console.log( "app.js" );

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider.
	when('/', {
		templateUrl: 'partials/mushroom-list.html',
		controller: 'MushroomCtrl'
	}).
	otherwise('/');
});