angular.module("randomApp", [])
.directive("packOfBeer", function () {
	return {
		controller: "packOfBeerCtrl",
		template: "<div><h1>This is a pack of beer with a hiding cat {{catName}} in it</h1><p><===|</p><p><===|</p><p>@_@</p><p><===|</p><p><===|</p><button ng-click='killCat(catName)'>Kill kitty</button><button ng-click='makeCat({name: kidName()})'>Make a kid</button></div>",
		scope: {catName: '=', killCat: '&', makeCat: '&'}
	};
})
.controller('packOfBeerCtrl', ['$scope', function($scope) {
	$scope.kidName = function () {
		return $scope.catName + "'s kid";
	}
}])
.controller('WarehouseCtrl', ['$scope', function($scope) {
	$scope.cats = ["Morris", "Felix", "Josh", "Billy"];
	$scope.killCat = function(cat) {
		var index = $scope.cats.indexOf(cat);
		if (index > -1) {
			$scope.cats.splice(index, 1);
		};
		alert("Good bye, " + cat);
	}
	$scope.makeCat = function(cat) {
		$scope.cats.push(cat);
		alert("Welcome, " + cat);
	}
}]);