angular.module('userService', ['azure-mobile-service.module']).factory('User' , [ '$q' ,'Azureservice', function($q, Azureservice){ 

	 var factory = {};


	factory.login = function(username, password){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("login", {
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
			 	if(results.error==0){
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
	
	factory.registerStudent = function(data){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("register", {
		    body: {
		    	data : data
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	if(results.error==0){
			 		deferred.resolve({result:true , detail:results});
			 	}else{
			  		deferred.resolve({result:false , detail:results});
			 	}
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}
	

	factory.registerTutor = function(data){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("register", {
		    body: {
		    	data : data
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
				console.log(results);
			 	if(results.error==0){
			 		deferred.resolve({result:true , detail:results});
			 	}else{
			  		deferred.resolve({result:false , detail:results});
			 	}
			}, function(err) {
			  console.log(err);
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}
	
	 return factory;
}]);
