angular.module("randomApp", [])
.directive("packOfBeer", function () {
	return {
		template: "<div><h1>This is a pack of beer with a hiding cat {{catName}} in it</h1><p><===|</p><p><===|</p><p>@_@</p><p><===|</p><p><===|</p><button ng-click='killCat(catName)'>Kill kitty</button></div>",
		scope: {catName: '=', killCat: '&'}
	};
})
.controller('WarehouseCtrl', ['$scope', function($scope) {
	$scope.cats = ["Morris", "Felix", "Josh", "Billy"];
	$scope.killCat = function(cat) {
		var index = $scope.cats.indexOf(cat);
		if (index > -1) {
			$scope.cats.splice(index, 1);
		};
		alert("Good bye, " + cat);
	}
}]);