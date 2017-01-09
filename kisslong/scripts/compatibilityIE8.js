$(function(){
	var key=0;
	$(document).unbind('mousewheel');
	$('.list li').unbind('click');
	$(document).bind('mousewheel',ViewScrol)
	function ViewScrol(event, num){
    	if (!$('.wrap').is(':animated')){
            key = key - num;
            if (key > 4) key = 4;
            if (key < 0) key = 0;
            animate();
            $('.wrap').stop().animate({ 'top': -key * 100 + '%' }, 1000);
            $('.list li').removeClass('current').eq(key).addClass('current');
        }
    }
	function animate(){
		if(key==1){$('.abstract-tex,.abstract-img').stop().fadeTo(1500,1);}else{$('.abstract-tex,.abstract-img').stop().fadeTo(1500,0);}
		if(key==2){$('.xycenter.infor,.meshtelecast h2').stop().fadeTo(1500,1);}else{$('.xycenter.infor,.meshtelecast h2').stop().fadeTo(1500,0);}
		if(key==3){$('.kissApp h2,.kissApp-app,.kissApp-main').stop().fadeTo(1500,1);}else{$('.kissApp h2,.kissApp-app,.kissApp-main').stop().fadeTo(1500,0);}
        if(key==4){$('.attractconsult h2,.main-in').stop().fadeTo(1500,1);}else{$('.attractconsult h2,.main-in').stop().fadeTo(1500,0);}
	}
	$('.list li').bind('click',ClickRnav);
	function ClickRnav(){
    	key = $(this).index();
    	animate();
        $('.wrap').stop().animate({ 'top': -key * 100 + '%' }, 1000);
        $(this).addClass('current').siblings().removeClass('current');
    }
	function dhua() {
        $('.page').eq(key).addClass('TlinIE').siblings().removeClass('TlinIE');
    }
})

