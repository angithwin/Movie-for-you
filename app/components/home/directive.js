"use strict";

angular.module('app.directives.home', [])
	.directive('homeForm', [function () {
		return {
			restrict: 'E',
			templateUrl: 'components/home/template.html',
			controller: ['$scope', '$http', '$location', '$timeout', '$mdSidenav', function ($scope, $http, $location, $timeout, $mdSidenav) {

				$scope.movie = {};

				$scope.images = ['https://image.tmdb.org/t/p/w500_and_h281_bestv2/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/6uBlEXZCUHM15UNZqNig17VdN4m.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/iWRKYHTFlsrxQtfQqFOQyceL83P.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/anmLLbDx9d98NMZRyVUtxwJR6ab.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/hETu6AxKsWAS42tw8eXgLUgn4Lo.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/a0wohltYr7Tzkgg2X6QKBe3txj1.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg',
					'https://image.tmdb.org/t/p/w500_and_h281_bestv2/nBvyktlVHjLx5nZ9Oxaoqo5jwbf.jpg']

				$scope.toggleLeft = buildToggler('left');
				$scope.toggleRight = buildToggler('right');

				function buildToggler(componentId) {
					return function () {
						$mdSidenav(componentId).toggle();
					}
				}

				//chamges

				// $scope.onSwipeLeft = function (ev) {
				// 	alert('You swiped left!!');
				// };

				// $scope.onSwipeRight = function (ev) {
				// 	alert('You swiped right!!');
				// };
				// $scope.onSwipeUp = function (ev) {
				// 	alert('You swiped up!!');
				// };

				// $scope.onSwipeDown = function (ev) {
				// 	alert('You swiped down!!');
				// };

			}]
		};
	}]);
