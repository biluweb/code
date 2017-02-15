$(document).ready(function(){  	
		$(".box2").hide();
	 	$(".teahList li").hover(function(){	 		
	 		$(this).children(".box2").show();
	 		var a =$(this).find("a");
	 		a.click(function(){	 			
	 			alert(1);
			event.stopPropagation();
	 		});
			},function(){$(this).children(".box2").hide();})
	 	
	 	
}) 
