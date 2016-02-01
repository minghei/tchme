angular.module('tchme').controller('registerController', function($scope, Data, Admin, User, $window) {

    $scope.data = Data;

    $scope.registerStudent = function(){
    	var data ={

    	};
    	User.registerStudent(data);
    }
    $scope.registerTutor = function(){
    	var data ={

    	};
    	User.registerTutor(data); 	
    }
});

