$(function(){
	/*二维码banner*/
	var nub=0,firstLi,timer;
		firstLi=$('.chop ul li:first').clone(true);//克隆第一张图片
        $(".chop ul").append(firstLi);//复制到列表最后
	$('.appb .btl').click(function(){
		btl();
	})
	$('.appb .btr').click(function(){
		btr();
	})
	timer=setInterval(btr,3000);
//	$('.appb').hover(function(){
//		clearInterval(timer);
//	},function(){
//		clearInterval(timer);
//		timer=setInterval(btr,3000);
//	})
	function btr(){
		if(!$('.chop ul').is(':animated')){
			nub++;
			var lilen=$('.chop li').length-1;
			var liw=$('.chop li').width();
			if(nub>lilen){nub=1;$('.chop ul').css({'left':0});}
//			console.log(nub,lilen);
			var move=nub*liw;
			$('.chop ul').animate({'left':-move},500);
		}
	}
	function btl(){
		if(!$('.chop ul').is(':animated')){
			nub--;
			var lilen=$('.chop li').length-1;
			var liw=$('.chop li').width();
			if(nub<0){
				$('.chop ul').css({'left':-lilen*liw});
				nub=lilen-1;
			}
//			console.log(nub,lilen);
			var move=nub*liw;
			$('.chop ul').animate({'left':-move},500);
		}
	}
})
