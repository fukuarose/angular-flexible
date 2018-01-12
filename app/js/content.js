angular.module("content",[])
.directive("deContent",function(){
	return {
		restrict:"E",
		templateUrl:"components/content.html",
		replace:true,
		scope:true,
		link:function($scope){
			  //设置轮播淡入淡出
			  //初始化数据
			  var timer=null;
			  var cur=0;
			  var len=3;
			  //鼠标滑过容器停止播放
			  $(".content-caursol").hover(function(){
			  	clearInterval(timer);
			  },function(){
			  	showImg();
			  })
			  //遍历所有原点导航实现滑过切换至对应的图片
			  $(".slide_list li").click(function(){
			  	clearInterval(timer);
			  	cur=$(this).index();
			  	$(this).addClass("active").siblings().removeClass("active");
			  	$(".img-outer img").eq( cur ).fadeIn(200).siblings("img").fadeOut(200);
			  })
			  function showImg(){
		        timer = setInterval(function(){
		            cur++;
		            if( cur>=len ){ cur=0; }
		            $(".img-outer img").eq( cur ).fadeIn(200).siblings("img").fadeOut(200);
		            $(".slide_list li ").eq( cur ).addClass("active").siblings().removeClass("active");
		
		        },8000);
		    }
			  showImg();
		}
	}
})
.controller("content-con",function($scope,$http){
	 $http.get('data/content.json').success(function (data) {
        console.log(data);
        $scope.imgs=data;
    });
})