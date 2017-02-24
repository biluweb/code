
'use strict';
//hover效果，解决镂空bug
var mousehover=function(obj,c,x){
	var timer=null,
		chil=obj.children(c),
		f=function(){
			if(x=='fade'){
				chil.stop().fadeOut('');
			}else if(x=='slid'){
				chil.stop().slideUp('');
			}
		},
		s=function(){
			if(x=='fade'){
				chil.stop().fadeIn('');
			}else if(x=='slid'){
				chil.stop().slideDown('');
			}	
		},
		objhover=function(a){
			a.hover(function() {
				s();
			}, function() {
				timer=setTimeout(f(), 200);
			});
			chil.hover(function() {
				clearTimeout(timer);
			}, function() {
				f();
			});
		};
		objhover(obj,c,x);
}

var layerhover=function(obj,c,z){
	var mousetype,
		chil=$(c),
		f=function(){
			layer.closeAll('tips');
		},
		s=function(obj,z){
			layer.tips(chil.prop('outerHTML'),obj,{tips:[z,'#fff'],time:0});
		},
		objhover=function(a,c,z){
			a.hover(function(){
				s(a,z);
				$(c).hover(function(e){
					mousetype=e.type;
				}, function(e) {
					mousetype=e.type;
					f();
				});
			}, function() {
				setTimeout(function(){
					if(mousetype=='mouseenter'){return;}
					f();
				},350)
			});
		};
	objhover(obj,c,z);
}