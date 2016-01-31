angular.module('userService', ['azure-mobile-service.module']).factory('User' , [ '$q' ,'Azureservice', function($q, Azureservice){ 

console.log("......3", Azureservice);

	 var userFactory = {};

	 // userFactory.reply = function(){
	 // 	console.log("reply...");
	 // }

	userFactory.reply = function(){
		var username = "kk";
		var password = "kk";
		var deferred = $q.defer(); 
		console.log("login1");
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
				console.log("login2");
				console.log(results);
			 	if(results.error==0){
			 		deferred.resolve({result:true , user: results.user});
			 	}else{
			  		deferred.resolve({result:false});
			 	}
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}

	userFactory.createAdmin = function(username, password){
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

	 return userFactory;
}]);
