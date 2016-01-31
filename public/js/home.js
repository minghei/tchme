angular.module('tchme').controller('homeController', function($scope, Data) {

    $scope.data = Data;

    $scope.logout = function(){
    	console.log("logout");
    }

});

