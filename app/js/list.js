angular.module("list",[])
.directive("deList",function(){
	return {
		restrict:"E",
		templateUrl:"components/list.html",
		replace:true,
		scope:true,
		controller:function($scope){
		}
	}
})