angular.module('tchme').controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';


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

