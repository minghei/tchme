angular.module('categoryService', ['azure-mobile-service.module']).factory('Category' , [ '$q' ,'Azureservice', function($q, Azureservice){ 

	 var factory = {};

	factory.getCategory = function(){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("getcategory", {
		    body: {
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}

	factory.getSubCategory = function(categoryId){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("getsubcategory", {
		    body: {
		    	data :{
			        categoryId: categoryId
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}
 
 	factory.addCategory = function(category){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("addcategory", {
		    body: {
		    	data:{
			    	category: category
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}

	factory.addSubCategory = function(categoryId, subCategory){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("addsubcategory", {
		    body: {
		    	data :{
			        categoryId: categoryId,
			        subCategory : subCategory
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}

	factory.removeCategory = function(categoryId){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("removecategory", {
		    body: {
		    	data :{
			        categoryId: categoryId
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}

	factory.removeSubCategory = function(subCategoryId, categoryId){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("removesubcategory", {
		    body: {
		    	data :{
			        subCategoryId: subCategoryId,
			        categoryId : categoryId
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}


	factory.updateCategory = function(categoryId,value){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("updatecategory", {
		    body: {
		    	data :{
			        categoryId: categoryId,
			        value : value
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}

	factory.updateSubCategory = function(subCategoryId, categoryId, value){
		var deferred = $q.defer(); 
		Azureservice.invokeApi("updatesubcategory", {
		    body: {
		    	data :{
			        subCategoryId: subCategoryId,
			        categoryId : categoryId,
			        value : value
			    }
		    },
		    headers : {
		             'Content-Type' : 'application/json'
		    },
		    method: "post"
		}).then(
			function (results){
			 	deferred.resolve({result:true , detail:results});
			}, function(err) {
			  deferred.resolve({result:false});
			}
		);
		return deferred.promise;
	}

	 return factory;
}]);
