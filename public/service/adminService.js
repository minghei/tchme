angular.module('adminService', ['azure-mobile-service.module']).factory('Admin' , [ '$q' ,'Azureservice', function($q, Azureservice){ 

	 var factory = {};

	factory.createAdmin = function(username, password){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("admincreate", {
		    body: {
		    	data :{
			        username: username,
			        password: password
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
				console.log(results);
			 	if(results.status==0){
			 		deferred.resolve({result:true , detail:results});
			 	}else{
			  		deferred.resolve({result:false});
			 	}
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}
 


	 return factory;
}]);
