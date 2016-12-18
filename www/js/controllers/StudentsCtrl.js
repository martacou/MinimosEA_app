/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('StudentsCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {

  $scope.newstudent = {};

  // get all students
  $http.get(base_url+'/students')
    .success(function(data) {
      $scope.students = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });


  $scope.DeleteStudent = function (id) {
    $http.delete(base_url+'/students/' + id)
      .success(function(data){
        $scope.students = data;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

});
