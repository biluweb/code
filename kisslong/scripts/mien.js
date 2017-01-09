$(function(){
	var fourLi,timer,lefp=0,flage=true;
		fourLi=$('.carousel-in li:eq(0),.carousel-in li:eq(1),.carousel-in li:eq(2),.carousel-in li:eq(3),.carousel-in li:eq(4)').clone(true);
		$('.carousel-in ul').append(fourLi);
		timer=setInterval(roll,30);
		function roll(){
			var lilen=$('.carousel-in li').length;
			var liw=parseInt($('.carousel-in li').css('width'))+20;
			var jval=(lilen*liw)/2;//----注意这里不是除以2，而是总宽度减去视口宽度(lilen*liw)-view
			if(flage){
				lefp-=3;
				if(lefp<-jval){lefp=0;}
				$('.carousel-in ul').css('left',lefp);
			}else{
				lefp+=3;
				if(lefp>0){/*lefp=-1217;*/lefp=-jval;}
				$('.carousel-in ul').css('left',lefp);
			}
		}
		
		$('.btr').click(function(){
			flage=false;
			clearInterval(timer);
			timer=setInterval(roll,30);
		})
		$('.btl').click(function(){
			flage=true;
			clearInterval(timer);
			timer=setInterval(roll,30);
		})

		$('.carousel-in').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(roll,30);
		})
		
		$('.carousel-in li').mouseover(function(){
			$(this).children('img').stop().fadeTo(500,1);
			$(this).siblings().children('img').stop().fadeTo(500,0.2);
		})
		$('.carousel-in').mouseleave(function(){
			$('.carousel-in li img').stop().fadeTo(500,1);
		})
})
