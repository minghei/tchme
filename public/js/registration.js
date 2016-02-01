angular.module('tchme').controller('registerController', function($scope, Data, Admin, User, Category, $window) {

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


    $scope.init = function(){
        console.log("init");

        $("#sdropdownGender").kendoDropDownList({
          dataTextField: "name",
          dataValueField: "id",
          dataSource: [{id:1 ,name:'Male'},{ id:0, name: 'Female'}]
        });

        $("#sdropdownWorst").kendoDropDownList({
          dataTextField: "subCategory",
          dataValueField: "id",
          dataSource: []
        });

        $("#sdropdownBest").kendoDropDownList({
          dataTextField: "subCategory",
          dataValueField: "id",
          dataSource: []
        });

        $("#sdropdownLevel").kendoDropDownList({
          dataTextField: "category",
          dataValueField: "id",
          dataSource: [],
          select: function(e) {
            setTimeout(function(){
              $scope.srefresh();
            },10);
          }
        });

        Category.getCategory().then(function(results){
          $("#sdropdownLevel").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $scope.srefresh();
        });
    }

    $scope.srefresh = function(){
          Category.getSubCategory($("#sdropdownLevel").data("kendoDropDownList").value()).then(function(results){
            $("#sdropdownWorst").data("kendoDropDownList").dataSource.data(results.detail.detail);
            $("#sdropdownBest").data("kendoDropDownList").dataSource.data(results.detail.detail);
            $("#sdropdownBest").data("kendoDropDownList").select(0);
            $("#sdropdownWorst").data("kendoDropDownList").select(0);
            
          });
    }

    $scope.init();
});

