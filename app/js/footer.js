angular.module("footer",[])
.directive("deFooter",function(){
	return {
		restrict:"E",
		templateUrl:"components/footer.html",
		replace:true,
		scope:true,
		controller:function($scope){
		},
		link:function($scope){
			  function draw1(id){
		        var myCanvas =$('#myCanvas');  
		        var context =myCanvas.get(0).getContext("2d");
		        var canvasWidth = myCanvas.width();
		        var canvasHeight = myCanvas.height();
		        var playAnimation = true;
		        var startButton = $('#startAnimation');
		        var stopButton = $('#stopAnimation');
		        startButton.hide();
		        startButton.click(function(){
		        　　$(this).hide();
		        　　stopButton.show();
		        　　playAnimation = true;
		        　　animate();
		        })
		        stopButton.click(function(){
		        　　$(this).hide();
		        　　startButton.show();
		        　　playAnimation = false;
		        })
		        var shape = function(x,y,width,height){
		            this.x = x;
		            this.y = y;
		            this.width = width;
		            this.height = height;
		        }
		        var shapes = new Array();
		        for(var i = 0;i<10;i++){
		            var x = Math.random()*250;
		            var y = Math.random()*250;
		            var width = height = Math.random()*50;
		            shapes.push(new shape(x,y,width,height));
		        }
		        function animate(){
		            context.clearRect(0,0,canvasWidth,canvasHeight);
		            var shapesLength = shapes.length;
		            for(var i=0;i<shapesLength;i++){
		                var temshape = shapes[i];
		                 // 动画循环中，将x,y设为随机值,
		                temshape.x = Math.random()*200-2;
		                temshape.y = Math.random()*200-2;
		                var r=Math.floor(Math.random()*256);
						var g=Math.floor(Math.random()*256);
						var b=Math.floor(Math.random()*256);
		                context.fillRect(temshape.x,temshape.y,temshape.width,temshape.height)
		                context.fillStyle="rgb("+r+','+g+','+b+")";
		            };
		            if(playAnimation){
		                setTimeout(animate,100);
		             }
		        }
		        animate();
		    }draw1('myCanvas');
		}
	}
})