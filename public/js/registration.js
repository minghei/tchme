angular.module('tchme').controller('registerController', function($scope, Data, Admin, User, Category, $window) {

    $scope.data = Data;
    $scope.subjects = [];
    $scope.subCategory = [];

    $scope.registerStudent = function(){
    	var data ={

    	};
      console.log($scope.subjects);
    	//User.registerStudent(data);
    }
    $scope.registerTutor = function(){
    	var data ={

    	};
    	User.registerTutor(data); 	
    }

    $scope.addSubject = function(){

      var sub = {
        index : $scope.subjects.length,
        subject : 0,
        grade : ''
      }
      $scope.subjects.push(sub);

      setTimeout(function(){
        $("#sdropdownSubject"+sub.index).kendoDropDownList({
          dataTextField: "subCategory",
          dataValueField: "id",
          dataSource: $scope.subCategory
        });
        $("#sdropdownSubject"+sub.index).data("kendoDropDownList").select(-1);
      },10);

     // $("#tdropdownSubject"+sub.index).data("kendoDropDownList").dataSource.data($scope.subCategory);
    }




    $scope.init = function(){

        $("#sdropdownGender").kendoDropDownList({
          dataTextField: "name",
          dataValueField: "id",
          dataSource: [{id:1 ,name:'Male'},{ id:0, name: 'Female'}]
        });

        $("#tdropdownGender").kendoDropDownList({
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

        $("#tdropdownHighest").kendoDropDownList({
          dataTextField: "name",
          dataValueField: "id",
          dataSource: [{id:5 ,name:'Undergraduate'},{id:1 ,name:'Bachelor'},{ id:2, name: 'Master'}, {id:3 ,name:'PhD'},{ id:4, name: 'Others'}] 
        });

        $("#tdropdownArea").kendoDropDownList({
          dataTextField: "name",
          dataValueField: "id",
          dataSource: [{id:5 ,name:'All'},{id:1 ,name:'East'},{ id:2, name: 'South'}, {id:3 ,name:'West'},{ id:4, name: 'North'}] 
        });

        $("#tdropdownFavourite1").kendoDropDownList({
          dataTextField: "subCategory",
          dataValueField: "id",
          dataSource: []
        });

        $("#tdropdownFavourite2").kendoDropDownList({
          dataTextField: "subCategory",
          dataValueField: "id",
          dataSource: []
        });

        Category.getCategory().then(function(results){
          $("#sdropdownLevel").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $scope.srefresh();
        });

        Category.getAllSubCategory().then(function(results){
          
          $("#tdropdownFavourite1").data("kendoDropDownList").dataSource.data($scope.subCategory);
          $("#tdropdownFavourite2").data("kendoDropDownList").dataSource.data($scope.subCategory);
        });
        
    }

    $scope.srefresh = function(){
          Category.getSubCategory($("#sdropdownLevel").data("kendoDropDownList").value()).then(function(results){
            $scope.subCategory  = results.detail.detail;
            $("#sdropdownWorst").data("kendoDropDownList").dataSource.data(results.detail.detail);
            $("#sdropdownBest").data("kendoDropDownList").dataSource.data(results.detail.detail);
            $("#sdropdownBest").data("kendoDropDownList").select(0);
            $("#sdropdownWorst").data("kendoDropDownList").select(0);
            
          });
    }


    $scope.init();
});

