'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {
		$(".info_list li").click(function(){
			var i=$(this).index();
			$(".tab-content .tab_list").eq(i).show().siblings().hide();
			$(".info_list li").eq(i).addClass("click_it").siblings().removeClass("click_it");
		})
}]);