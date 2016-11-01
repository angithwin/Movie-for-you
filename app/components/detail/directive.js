"use strict";

angular.module('app.directives.detail', [])
    // angular.module('app.directive.detail', ['detailService'])
    .directive('detailForm', [function () {
        return {
            restrict: 'E',
            templateUrl: 'components/detail/template.html',
            controller: ['$scope', '$http', '$location', function ($scope, $http, $location) {
                $scope.movie = {};

                $scope.onSwipeLeft = function (ev) {
                    alert('You swiped left!!');
                };

                $scope.onSwipeRight = function (ev) {
                    alert('You swiped right!!');
                };
                $scope.onSwipeUp = function (ev) {
                    alert('You swiped up!!');
                };

                $scope.onSwipeDown = function (ev) {
                    alert('You swiped down!!');
                };
            }]
        };
    }]);
