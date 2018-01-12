angular.module("commend",[])
.directive("deCommend",function(){
	return {
		restrict:"E",
		templateUrl:"components/commend.html",
		replace:true,
		scope:true,
		controller:function($scope){
		}
	}
})