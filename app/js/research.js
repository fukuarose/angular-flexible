angular.module("research",[])
.directive("deResearch",function(){
	return {
		restrict:"E",
		templateUrl:"components/research.html",
		replace:true,
		scope:true,
		controller:function($scope){
		}
	}
})