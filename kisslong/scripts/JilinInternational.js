$(function(){
	//无缝轮播
	var fourLi,timer,lefp=0,flage=true;
		fourLi=$('.file-in li:eq(0),.file-in li:eq(1),.file-in li:eq(2)').clone(true);
		$('.file-in ul').append(fourLi);
		timer=setInterval(roll,30);
		function roll(){
			var lilen=$('.file-in li').length;
			var liw=parseInt($('.file-in li').css('width'))+20;
			var view=parseInt($('.file-in').css('width'));
			var jval=(lilen*liw)-view;
			if(flage){
				lefp-=3;
				if(lefp<-jval){lefp=0;}
				$('.file-in ul').css('left',lefp);
			}else{
				lefp+=3;
				if(lefp>0){/*lefp=-1217;*/lefp=-jval;}
				$('.file-in ul').css('left',lefp);
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

		$('.file-in').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(roll,30);
		})
		
		$('.file-in li').mouseover(function(){
			$(this).children('img').stop().fadeTo(500,1);
			$(this).siblings().children('img').stop().fadeTo(500,0.2);
		})
		$('.file-in').mouseleave(function(){
			$('.file-in li img').stop().fadeTo(500,1);
		})
		
		//二维码悬浮效果
		$('.hot-line .chat').hover(function(){$('.hot-line .chat .ewmxf').show();},function(){$('.hot-line .chat .ewmxf').hide();})
		guinav();
})
