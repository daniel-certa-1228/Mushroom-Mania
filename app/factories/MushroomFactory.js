"use strict";
console.log( "MushroomFactory.js" );

app.factory("MushroomFactory", function($q, $http){

	let getMushrooms = () => {
		let items = [];
		return $q ((resolve, reject) => {
			$http.get('https://third-tester.firebaseio.com/mushrooms.json')
		.then((itemObject) => {
			let itemCollection = itemObject.data;
			resolve(itemCollection);
			console.log( "itemCollection", itemCollection );
			})
		.catch((error) => {
			reject(error);
			});
		});
	};
	return{getMushrooms};
});
