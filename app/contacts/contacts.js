'use strict';

angular.module('myContacts.contacts', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope','$log','$firebaseArray',  function($scope,$log, $firebaseArray) {
  var ref = new Firebase('https://mycontactsstore.firebaseio.com/contacts');
  $scope.contacts = $firebaseArray(ref);

  $scope.showAddForm = function(){
    $scope.addFormShow = true;
  };
}]);