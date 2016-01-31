angular.module('tchme').controller('adminlistController', function($scope, Data, Admin, Category, $window) {

    $scope.data = Data;





    $scope.init = function(){
        console.log("init");

        $("#dropdownCategory").kendoDropDownList({
          dataTextField: "category",
          dataValueField: "id",
          dataSource: [],
          select: function(e) {
            setTimeout(function(){
              $scope.refresh();
            },10);
          }
        });
        $("#dropdownCategorySub").kendoDropDownList({
          dataTextField: "category",
          dataValueField: "id",
          dataSource: [],
          select: function(e) {
            setTimeout(function(){
              $scope.refresh();
            },10);
          }
        });
        $("#dropdownSubCategory").kendoDropDownList({
          dataTextField: "subCategory",
          dataValueField: "id",
          dataSource: [],
          select: function(e) {
            setTimeout(function(){
              $scope.refresh();
            },10);
          }
        });

        Category.getCategory().then(function(results){
          $("#dropdownCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownCategorySub").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $scope.refresh();
        });
    }

    $scope.addCat = function(){
      var value = $("#addCat").val();
      console.log(value);
      $("#addCat").val('');
      Category.addCategory(value).then(function(results){
          $("#dropdownCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownCategorySub").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownCategory").data("kendoDropDownList").select(0);
          $("#dropdownCategorySub").data("kendoDropDownList").select(0);
        $scope.refresh();
      });
    }

    $scope.addSubCat = function(){
      var value = $("#addSubCat").val();
      console.log(value);
      $("#addSubCat").val('');
      Category.addSubCategory($("#dropdownCategorySub").data("kendoDropDownList").value(), value).then(function(results){
        $("#dropdownSubCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
        $("#dropdownSubCategory").data("kendoDropDownList").select(0);
        $scope.refresh();
      });
    }

    $scope.removeCategory = function(){
      if($("#dropdownCategory").data("kendoDropDownList").value().length==0){
        return;
      }
      Category.removeCategory($("#dropdownCategory").data("kendoDropDownList").value()).then(function(results){
          $("#dropdownCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownCategorySub").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownCategory").data("kendoDropDownList").select(0);
          $("#dropdownCategorySub").data("kendoDropDownList").select(0);
          $scope.refresh();
      });
    }

    $scope.removeSubCategory = function(){
      if($("#dropdownSubCategory").data("kendoDropDownList").value().length==0){
        return;
      }
      Category.removeSubCategory($("#dropdownSubCategory").data("kendoDropDownList").value(), $("#dropdownCategorySub").data("kendoDropDownList").value()).then(function(results){
          $("#dropdownSubCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownSubCategory").data("kendoDropDownList").select(0);
          $scope.refresh();
      });
    }



    $scope.updateCategory = function(){
      if($("#dropdownCategory").data("kendoDropDownList").value().length==0){
        return;
      }
      Category.updateCategory($("#dropdownCategory").data("kendoDropDownList").value(), $("#updateCat").val()).then(function(results){
          $("#dropdownCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownCategorySub").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownCategory").data("kendoDropDownList").select(0);
          $("#dropdownCategorySub").data("kendoDropDownList").select(0);
          $scope.refresh();
      });
    }

    $scope.updateSubCategory = function(){
      if($("#dropdownSubCategory").data("kendoDropDownList").value().length==0){
        return;
      }
      Category.updateSubCategory($("#dropdownSubCategory").data("kendoDropDownList").value(), $("#dropdownCategorySub").data("kendoDropDownList").value(), $("#updateSubCat").val()).then(function(results){
          $("#dropdownSubCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
          $("#dropdownSubCategory").data("kendoDropDownList").select(0);
          $scope.refresh();
      });
    }



    $scope.refresh = function(){
          Category.getSubCategory($("#dropdownCategorySub").data("kendoDropDownList").value()).then(function(results){
            $("#dropdownSubCategory").data("kendoDropDownList").dataSource.data(results.detail.detail);
            var selectedSubCat = $("#dropdownSubCategory").data("kendoDropDownList").dataItem($("#dropdownSubCategory").data("kendoDropDownList").select());
            if(selectedSubCat){
              $("#updateSubCat").val(selectedSubCat.subCategory);
            }else{
              $("#updateSubCat").val('');
            }
            var selectedCat = $("#dropdownCategory").data("kendoDropDownList").dataItem($("#dropdownCategory").data("kendoDropDownList").select());
            if(selectedCat){
              $("#updateCat").val(selectedCat.category);
            }else{
              $("#updateCat").val('');
            }
          });
    }


    $scope.init();
});

