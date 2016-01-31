angular.module('tchme').service('Data', function () {
     var data = {
        userType: 1,
        user : null
    };
    return data;
}).controller('mainController', function($scope, Data) {


	$scope.data = Data;
    
        // <input type="file" name="fileToUpload" id="fileToUpload"/>
        // <input type="button" ng-click="uploadFile()" value="Upload" />

    $scope.userType = function(ut){
    	console.log("set user type :" + ut);
    	$scope.data.userType = ut;
    }

    $scope.uploadFile = function(){
    	console.log(document.getElementById('fileToUpload').files);

    	var reader = new FileReader();
	    reader.onloadend = function(e){
	    	var bytes = new Uint8Array(e.target.result);
	    	console.log(bytes);
	        console.log(e.target.result.byteLength);
	    }
	    reader.readAsArrayBuffer(document.getElementById('fileToUpload').files[0]);
    };
});

