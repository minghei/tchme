angular.module('tchme').controller('loginController', function($scope, Data, Admin, User, $window) {

    $scope.data = Data;
	$scope.loginform = {};

    $scope.login = function(form){
    	console.log($scope.loginform.loginuser.$viewValue ,$scope.loginform.loginpassword.$viewValue );
    	var username = $scope.loginform.loginuser.$viewValue;
    	var password = $scope.loginform.loginpassword.$viewValue;
		$('#loginform').find("input[type=text], textarea").val("");

		$scope.loginform.loginuser.$viewValue = "";
        $scope.loginform.loginpassword.$viewValue = "";


        User.login(username, password).then(function(results){
        	$scope.data.user = results.detail;
            if($scope.data.user.userType=3){
        	   $window.location.href= "#adminlist";
            }else{
                $window.location.href= "#list";
            }
        });
    }

});

