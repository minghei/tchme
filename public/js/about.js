angular.module('tchme').controller('aboutController' , function($scope, User) { 
    $scope.message = 'Look! I am an about page.'; 

     $scope.loginTest = function(){
      console.log("loginTest");
      User.reply();
      // User.login('kk', 'kk').then(function(result){
      //   if(result.result){
      //   	$("#result").html(result.user);
      //   }else{
      //   	$("#result").html("FALSE " + result.result);
      //   }
      // });
   }
});



