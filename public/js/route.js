angular.module('tchme', ['ngRoute', 'userService','azure-mobile-service.module']).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/main.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        });
}).constant('AzureMobileServiceClient', {
  API_URL: "https://tmh1981.azure-mobile.net/",
  API_KEY: "QXtXEyoxRMcAZmpDFHaEQHFZCYjGUL29",
});


