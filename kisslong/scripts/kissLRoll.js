$(function () {
    var key = 0,startY;
    $(document).bind('mousewheel',ViewScrol);
    function ViewScrol(event, num){
    	if (!$('.wrap').is(':animated')){
            key = key - num;
			console.log(num);
            if (key > 4) key = 4;
            if (key < 0) key = 0
            $('.wrap').stop().animate({ 'top': -key * 100 + '%' }, 1000);
            $('.list li').removeClass('current').eq(key).addClass('current');
            dhua();
        }
    }
    $('.list li').bind('click',ClickRnav);
    function ClickRnav(){
    	key = $(this).index();
        $('.wrap').stop().animate({ 'top': -key * 100 + '%' }, 1000);
        $(this).addClass('current').siblings().removeClass('current');
        dhua();
    }

    function dhua() {
        $('.page').eq(key).addClass('Tlin').siblings().removeClass('Tlin');
    }
    
    function movefn(event,num){
    	if (!$('.wrap').is(':animated')) {
	        var touch = event.originalEvent.changedTouches[0];
	        var moveY = touch.pageY;
	        var s=Math.abs(startY-moveY);
	        if (startY > moveY&&s>50) {		//↑
	        	num=-1;
	        }else if(startY < moveY&&s>50){
	        	num=1;
	        }
	        if(typeof num!=='undefined'){
		        key = key - num;
		        if (key > 4) key = 4;
		        if (key < 0) key = 0;
		        if (key == 4) { $('.down').css('display', 'none') } else { $('.down').css('display', 'block')}
		        $('.wrap').stop().animate({ 'top': -key * 100 + '%' }, 1000);
		        $('.list li').removeClass('current').eq(key).addClass('current');
		        dhua();
	        }
        }
    }
    
    if(isMobileDevice()){
		$(window).on('touchstart',function(event){
			var touch = event.originalEvent.changedTouches[0];
    		    startY = touch.pageY;
    		 $(window).on('touchmove',movefn);
		})
     }
})