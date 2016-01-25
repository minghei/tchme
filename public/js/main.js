  var tchme = angular.module('tchme', ['ngRoute']);

    tchme.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            });
    });

    tchme.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    tchme.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });


