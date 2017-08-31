"use strict";
console.log( "MushroomController.js" );

app.controller("MushroomCtrl", function($scope, MushroomFactory) {

	MushroomFactory.getMushrooms()
	.then(function(itemCollection){
		$scope.mushrooms = Object.values(itemCollection);
		console.log( "mushrooms", $scope.mushrooms );
	});

});