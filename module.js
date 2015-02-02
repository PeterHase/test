angular.module('test', [])//

.directive('testComp', ['$log', function($log){
	
	return {
		restrict: 'A',
		replace: true,
		template: '<div></div>'
	};
	
}]);