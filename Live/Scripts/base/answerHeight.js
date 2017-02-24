
//Pay attention to in response to the height of the core code, order must not be confused...
var AutoHeight=function (){
	var ohtml,top,introduceh,videoBoxh,lvctbox,owidth,body,positonh,chitchath,botmh,dissCumsgh,rightnotice,
		bannerh,videoh,inforotherh,videonotich,rightinforh,rightnoticeh,righthelph,faceh,speakh,slicklist,iebanner;
	var	setdate=function(){
			owidth=$('html').width();
			ohtml=$('html').height();
			 top=$('#top').height()+10;
			 lvctbox=$('.lvctbox').height();
			 bannerh=$('#introduce').attr('class') == 'col-lg-8 col-md-1 zdn'? 0 : ($('.banner').height() + 10);
			 iebanner=$('.banner').height()
			 inforotherh=(owidth<=1199?0:$('.infor-other').outerHeight());
			 videonotich=$('.video-notice').height();
			 rightinforh=$('.right-infor').height();
			 rightnotice=$('.right-notice').height()+10;
			 righthelph=$('.right-help').outerHeight();
			 faceh=$('.face').outerHeight();
			 speakh=$('.speak').height();
			 body=$('body');
			 botmh=10;
		},
		operation=function(){
			positonh=ohtml-top-35;
			 introduceh=ohtml-top-botmh-inforotherh-10;
			 videoh=ohtml-top-botmh-bannerh-videonotich;
			 chitchath=ohtml-top-botmh;
			 dissCumsgh=ohtml-top-botmh-rightinforh-rightnotice-righthelph-faceh-speakh-10;
		},
		evaluation=function(){
			var positon=$('.positon'),
				guidan=$('.Bscwrap-guidance'),
				video=$('.video'),
				dissCumsg=$('#dissCumsg');
				slicklist=$('.slick-list.draggable')
			body.width(owidth);
			guidan.height(introduceh);
			video.height(videoh);
			dissCumsg.height(dissCumsgh);
			slicklist.height(iebanner);
		};	
		setdate();
		operation();
		evaluation();
		setdate();
		operation();
		evaluation();
}

var videoBoxAutoWidth=function (){
	var videoBox=$('#videoBox'),
	introduce=$('#introduce'),
	viewW=$('html').width(),
	leftW=introduce.outerWidth()+0.5,
	rightW=$('#chitchat').outerWidth()+0.5,
	wif=function(V,lw,rw){
		if(viewW<=V){leftW=lw;rightW=rw;}
	};
	// if(viewW<=1600){
	// 	leftW=200;rightW=400;
	// }else if(viewW<=1440){
	// 	leftW=180;rightW=360;
	// }else if(viewW<=1366){
	// 	leftW=170.75;rightW=341.5;
	// }
	wif(1600,200,400);
	wif(1440,180,360);
	wif(1366,170.75,341.5);
	
	var videoBoxW=viewW-leftW-rightW;
	videoBox.width(videoBoxW);
}



