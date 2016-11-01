"use strict";

angular.module("homeService", [])

    .factory("Home", ["$http", function ($http) {
        //create a new object
        var homeFactory = {};

        homeFactory.getDetail = function (id) {
            return $http.get('/api/movie/detail/' + id);
        }

        

        return homeFactory;
    }]);
