angular.module('test', [])//

.directive('testComp', ['$log', function($log){
	
	return {
		restrict: 'A',
		replace: true,
		template: '<div></div>',
		link: function(scope, element, attrs){
		},
		controller: function($scope){
		}
	};
	
}]);