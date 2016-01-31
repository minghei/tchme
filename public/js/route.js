angular.module('tchme', ['ngRoute', 'userService','azure-mobile-service.module']).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/main.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        }).when('/list', {
            templateUrl : 'pages/list.html',
            controller  : 'listController'
        }).when('/admin', {
            templateUrl : 'pages/admin.html',
            controller  : 'adminController'
        });
}).constant('AzureMobileServiceClient', {
  API_URL: "https://tchmem.azure-mobile.net/",
  API_KEY: "qLsexbOwlkxRvImimpiuiZCdLWVAHF80",
});


