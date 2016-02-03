angular.module('tchme').controller('registerController', function($scope, Data, Admin, User, Category, $window) {

    $scope.data = Data;
    $scope.subjects = [];
    $scope.subCategory = [];

    $scope.registerStudent = function(){
    	var data ={
         username : $("#sname").val(),
         password : $("#spass").val(),
         gender : $("#sdropdownGender").data("kendoDropDownList").value(),
         level : $("#sdropdownLevel").data("kendoDropDownList").value(),
         school : $("#sschool").val(),
         worst : $("#sdropdownWorst").data("kendoDropDownList").value(),
         best : $("#sdropdownBest").data("kendoDropDownList").value(),
         beTutor : $("#stutor").is(":checked"),
         contactable : $("#scontact").is(":checked"),
         groupTuition : $("#sgroup").is(":checked"),
         email : $("#semail").val(),
         subjects : $scope.subjects,
         userType : 1
    	};

      for(var i in data.subjects){
        delete data.subjects[i]['$$hashKey'];
        delete data.subjects[i]['index'];
      }

      console.log(data);
    	User.registerStudent(data).then(function(results){
           console.log(results);
            if(results.result){
                $scope.subjects = [];
               $("#sname").val("");
               $("#spass").val("");
               $("#sdropdownGender").data("kendoDropDownList").select(0);
               $("#sdropdownLevel").data("kendoDropDownList").select(0);
               $("#sschool").val("");
               $("#sdropdownWorst").data("kendoDropDownList").select(0);
               $("#sdropdownBest").data("kendoDropDownList").select(0);
               $("#stutor").attr('checked', false);
               $("#scontact").attr('checked', false);
               $("#sgroup").attr('checked', false);
               $("#semail").val("");

               $window.location.href= "#list";
             }else{
                alert(results.detail.message);
             }
        }); 
    }
    $scope.registerTutor = function(){
    	var data ={
         username : $("#tname").val(),
         password : $("#tpass").val(),
         gender : $("#tdropdownGender").data("kendoDropDownList").value(),
         qualification :  $("#tdropdownHighest").data("kendoDropDownList").value(),
         exp : $("#texp").val(),
         area : $("#tdropdownArea").data("kendoDropDownList").value(),
         favourite1 : $("#tdropdownFavourite1").data("kendoDropDownList").value(),
         favourite2 : $("#tdropdownFavourite2").data("kendoDropDownList").value(),
         fee : $("#tfee").val(),
         address : $("#taddress").val(),
         job : $("#tjob").val(),
         about : $("#tabout").val(),
         userType : 2
    	};

      console.log(data);
    	User.registerTutor(data).then(function(results){
           console.log(results);
           if(results.result){
             $("#tname").val("");
             $("#tpass").val("");
             $("#tdropdownGender").data("kendoDropDownList").select(0);
             $("#tdropdownHighest").data("kendoDropDownList").select(0);
             $("#texp").val("");
             $("#tdropdownArea").data("kendoDropDownList").select(0);
             $("#tdropdownFavourite1").data("kendoDropDownList").select(0);
             $("#tdropdownFavourite2").data("kendoDropDownList").select(0);
             $("#tfee").val("");
             $("#taddress").val("");
             $("#tjob").val("");
             $("#tabout").val("");

             $window.location.href= "#list";
            }else{
              alert(results.detail.message);
            }
        });	
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
          
          $("#tdropdownFavourite1").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#tdropdownFavourite2").data("kendoDropDownList").dataSource.data(results.detail.detail);
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

