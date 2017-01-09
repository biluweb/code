$(function(){
	var nub=0,timer,flage=true;
	function togec(){
		nub++;
		if(nub>8){nub=8}
		if(nub==1){
			$('.Plane').attr('class','Plane f1');
			setTimeout(function(){
				$('.path .a1').attr('src','images/kisslong_img/001b.png')
			},1500)
		}
		if(nub==2){
			$('.Plane').attr('class','Plane f2');
			setTimeout(function(){
				$('.path .a2').attr('src','images/kisslong_img/002b.png')
			},1500)
		}
		if(nub==3){
			$('.Plane').attr('class','Plane f3');
			setTimeout(function(){
				$('.path .a3').attr('src','images/kisslong_img/003b.png')
			},1500)
		}
		if(nub==4){
			$('.Plane').attr('class','Plane f4');
			setTimeout(function(){
				$('.path .a4').attr('src','images/kisslong_img/004b.png')
			},1500)
		}
		if(nub==5){
			$('.Plane').attr('class','Plane f5');
			setTimeout(function(){
				$('.path .a5').attr('src','images/kisslong_img/005b.png')
			},1500)
		}
		if(nub==6){
			$('.Plane').attr('class','Plane f6');
			setTimeout(function(){
				$('.path .a6').attr('src','images/kisslong_img/006b.png')
			},1500)
		}
		if(nub==7){
			$('.Plane').attr('class','Plane f7');
			setTimeout(function(){
				$('.path .a7').attr('src','images/kisslong_img/007b.png')
			},1500)
		}
		if(nub==8){
			$('.Plane').attr('class','Plane f8');
			setTimeout(function(){
				$('.path .a8').attr('src','images/kisslong_img/008b.png')
			},1500)
		}
	}
	$(window).scroll(function(){
		var st=$(window).scrollTop();
		var mft=$('.course').offset().top-600;
		if(st>=mft){
			if(flage){
				flage=false;
				clearInterval(timer);
				timer=setInterval(togec,900);
			}
			
		}
	})
})
