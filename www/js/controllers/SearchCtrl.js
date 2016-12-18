/**
 * Created by Marta_ on 18/12/2016.
 */
app.controller('SearchCtrl', function ($scope, $rootScope, $ionicPopup, $http, $stateParams, $timeout, $state) {
//GET all subjects
  $http.get(base_url+'/subjects')
    .success(function(data) {
      $scope.subjects = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

});
