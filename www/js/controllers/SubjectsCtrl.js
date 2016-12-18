/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('SubjectsCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {
  console.log('SubjectsCtrl');

  //GET all subjects
  $http.get(base_url+'/subjects')
    .success(function(data) {
      $scope.subjects = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.SubjectDetails = function (id) {
    $state.go('tab.subject-detail');
  }

  $scope.DeleteSubject = function (id) {
    $http.delete(base_url+'/subjects/' + id)
      .success(function(data){
        $scope.subjects = data;
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

});
