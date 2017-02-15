
$(document).ready(function(){
//tab切换
        $("#menu li").click(function(){        	
	        $("#menu li").eq($(this).index()).addClass("actived").siblings().removeClass('actived');
					//$("#rightBox div").hide().eq($(this).index()).show().siblings().hide()
	        //$("#rightBox>div").eq($("#menu li").index(this)).addClass("on").siblings().removeClass('on'); 

        });  		

//page页选中
        $("#rightBox div .pageBox .page li").click(function(){        	
	        $("#rightBox div .pageBox .page li").eq($(this).index()).addClass("active").siblings().removeClass('active');
        }); 
  });