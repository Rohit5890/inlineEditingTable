(function(){
    angular.module('myApp',[])
    .controller('editCtrl',function editCtrl($scope){
      $scope.model = {
        Employee : [
          {
            id:1001,
            name:"Emp 1",
            age: 28
          },{
            id:1002,
            name:"Emp 2",
            age: 40
          },{
            id:1003,
            name:"Emp 3",
            age: 35
          },
          {
            id:1003,
            name:"Emp 3",
            age: 35
          }
        ],
        selectedRow :{}
      }

    $scope.getTemplate = function(employee){
      debugger;
       return( employee.id === $scope.model.selectedRow.id ? 'editable' : 'normal' );
    }
    $scope.editDetails= function(employee){
      $scope.model.selectedRow = angular.copy(employee);
    }
    $scope.saveDetails= function (index) {
      $scope.model.Employee[index] = angular.copy($scope.model.selectedRow);
      $scope.resetSelection();
    }
    $scope.addRow = function(index){
      var item={
        id:'',
        name:'',
        age:''
      }
      $scope.model.Employee.splice((index+1),0,item);
    }
    $scope.deleteRow = function(index){
      $scope.model.Employee.splice(index,1);
    }
    $scope.resetSelection= function(){
      $scope.model.selectedRow = {};
    }
  })
})();
