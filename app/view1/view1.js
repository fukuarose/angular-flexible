'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
		$http.get("data/data.json").then(function (response) {$scope.code = response.data;}).catch(function (response) { //捕捉错误处理
　　alert(error)

});;
}]);