angular.module('tchme').controller('listController', function($scope, Data) {

	$scope.data = Data;
    
    $scope.testUserType = function(){
    	console.log($scope.data.userType);
    }

});

