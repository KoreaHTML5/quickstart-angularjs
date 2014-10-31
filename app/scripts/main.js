angular.module("quickStartApp",["ui.select"])
	.controller('MainCtrl', ['$scope', function ($scope) {
		
		$scope.slogan = {
			text : "Hello, Quick start AngularJS"
		};

		$scope.words = [{
			text : "Hello, Quick start AngularJS"
		},{
			text : "Hello"
		},{
			text : "Quickstart"
		},{
			text : "AngularJS"
		},{
			text : "WebFramework"
		}];
		
	}]);