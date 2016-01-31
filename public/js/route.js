angular.module('tchme', ['ngRoute', 'userService', 'adminService', 'categoryService','azure-mobile-service.module']).config(function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl : 'pages/main.html',
            controller  : 'mainController'
        }).when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        }).when('/list', {
            templateUrl : 'pages/list.html',
            controller  : 'listController'
        }).when('/login', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        }).when('/adminlist', {
            templateUrl : 'pages/adminlist.html',
            controller  : 'adminlistController'
        });
}).constant('AzureMobileServiceClient', {
  API_URL: "https://tchmem.azure-mobile.net/",
  API_KEY: "qLsexbOwlkxRvImimpiuiZCdLWVAHF80",
});


