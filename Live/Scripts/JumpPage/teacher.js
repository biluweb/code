  $(document).ready(function(){  	
			
$(".content .teacher .text a").on('click', function(){ 
				var player;
	 			layer.closeAll(); 	 			  
				layer.open({						  						
					type: 1,
					title: false,
					shade :0,
					area : ['auto','470px'],
					shadeClose: true, //点击遮罩关闭   				
					content:$('#popUp'),
					success:function() {
                        player = jwplayer('jwplayerBox').setup({
                            flashplayer: '/scripts/component/jwplayer/jwplayer.flash.swf',
                            file: "http://live.longding999.com/video/wmy.mp4",//$(this).attr('data-video'),
                            key: 'gAj8EfKr4B6xqu29fx4aoSphPu3QUzTUQx/slw==',
                            //skin: 'five',
                            dock: false,
                            width: 700,
                            height: 400
                        });
                        player.onFullscreen(function () {
                            player.setFullscreen(false);
                        });
                    },
          end: function () {
                        player.stop();
                  },
   			});

});

})

//	$(".content .teacher .text a").on('click', function(){ 
//			$('.shade,#popUp').show();
//			
//	 	});
//		
//					$('.shade,.closeButton').on('click', function(){					
//						$('.shade,#popUp').hide();
//						event.preventDefault(); 
//					});
//			
//			jwplayer('myElement').setup({  
//          flashplayer: '/Scripts/ComPonent/jwplayer/jwplayer.flash.swf', 
//          file: '/Images/JumpPage/img/teacher/videotest.mp4',
//          width: 500,  
//          height: 350,  
//          dock: false,
//          key: 'gAj8EfKr4B6xqu29fx4aoSphPu3QUzTUQx/slw=='
//     });
//			$('.blackbox .likebox .assistant').click(function(){
//				$(this).addClass("assistanted");
//			}); 
// 		
//		$('.blackbox .likebox .good .pic').click(function(){
//		$(this).addClass("piced");
//		});
