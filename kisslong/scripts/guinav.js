
function guinav(){ //-----引导导航
	var twoviewh=$(window).height()*2;
	$(window).scroll(function(event){
        if($(window).scrollTop()>twoviewh){
            $('.guidance-nav').show();
        }else{$('.guidance-nav').hide();}
    })
	$('.guidance-nav li').bind({
		mouseover:function(){
			$(this).find('i').hide();
			$(this).find('.em').show();
		},
		mouseout:function(){
			$(this).find('i').show();
			$(this).find('.em').hide();
		}
	})
	
	$('.guidance-nav ul li.returntop').bind('click',function(){
		 $('html,body').stop().animate({
    		'scrollTop':0
		 },500);
	})
}