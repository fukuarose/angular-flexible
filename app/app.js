'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  "myApp.view3",
  'myApp.version',
  "content",
  "footer",
  "research",
  "list",
  "commend"
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller("myCtrl",function($scope){
	
})