
console.log("...l");
angular.module('userService', ['azure-mobile-service.module']).factory('User' , [ function($q, Azureservice){ 

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
			 		promise.resolve({result:true , user: results.user});
			 	}else{
			  		promise.resolve({result:false});
			 	}
			}, function(err) {
			  promise.resolve({result:false});
			}
		);
		return deferred.promise;
	}
	 return userFactory;
}]);

 //$q, $http, Azureservice
 //, ['azure-mobile-service.module']
	//console.log(". //, ['azure-mobile-service.module']..");

 //     userFactory.dbuser = null;


console.log("...2");