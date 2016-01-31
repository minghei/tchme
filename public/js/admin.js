angular.module('tchme').controller('adminController', function($scope, Data, User) {

    $scope.data = Data;
	$scope.loginform = {};

    $scope.login = function(form){
    	console.log($scope.loginform.loginuser.$viewValue ,$scope.loginform.loginpassword.$viewValue );
    	var username = $scope.loginform.loginuser.$viewValue;
    	var password = $scope.loginform.loginpassword.$viewValue;
		$('#loginform').find("input[type=text], textarea").val("");

		$scope.loginform.loginuser.$viewValue = "";
        $scope.loginform.loginpassword.$viewValue = "";


        User.createAdmin(username, password).then(function(results){
        	console.log(results);
        });
    }

});

