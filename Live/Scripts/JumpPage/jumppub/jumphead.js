  $(document).ready(function(){
  	       $(function (){  
            setSlip();  
        });  
        var setSlip = function(){  
            var slip = $('#navslip');  
            $('.nav a').hover(function(){  
                //显示滑块  
                if(slip.css('display') == 'none'){  
                    slip.show();  
                };  
                //移动滑块  
                slip.stop().animate({left:parseInt($(this).position().left)},300);  
            },function(){
            	//slip.css({"left":parseInt($(this).position().left)});
 							slip.hide();
            });           	 
        }; 
 
 //回到顶部  		
  		$("#fixedBox .getBack").click(function () {
  			var sheight= document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			if(sheight>0){
        //700;滑动的速度
        $('body,html').stop(true,false).animate({ scrollTop: 0 }, 700);
        return false;                    
       	};
/*        var speed=700;//滑动的速度
        $('body,html').stop(true,true).animate({ scrollTop: 0 }, speed);
        return false; */
 			});
})
 