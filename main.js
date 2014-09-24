angular.module("randomApp", [])
.directive("packOfBeer", function () {
	return {
		template: "<div><h1>This is a pack of beer with a hiding cat {{catName}} in it</h1><p><===|</p><p><===|</p><p>@_@</p><p><===|</p><p><===|</p></div>",
		scope: {catName: '@'}
	};
});