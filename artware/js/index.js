$(document).ready(function(){
	$('#slider1').swipeslider({transitionDuration: 600,autoPlayTimeout: 10000,sliderHeight: '500px' });
});
var obj=null;
var ID=""
var _scrollHeight,_windowHeight,_windowWidth,_popupHeight,_popupWeight,_posiTop,_posiLeft
$(window).resize(function(){
		setcenter(obj)
		setShadeSize()
})
function setShadeSize(){
	h = $(window).height(),
	d = $(window).width(),
	$(".shade").css({"height": h + "px","width":d + "px"});
}
function popup(popupName,intime,outtime){
	if(obj==null){
			obj=popupName;
		}else{
			obj.fadeOut(outtime);
			obj=popupName;
		}
	setShadeSize()
	$(".shade").fadeIn(intime);
	setcenter(obj);
	obj.fadeIn(intime);
} 


function playvideo(url,id){
			ID=id
			$(".shade").fadeIn(500);
			popup($('.shadevideo'),500,500)
			$("."+id).attr("src",url);
}



function setcenter(){
	if(obj!==null){
		_scrollHeight = $(document).scrollTop(),
		_windowHeight = $(window).height(),
		_windowWidth = $(window).width(),
		_popupHeight = obj.height(),
		_popupWeight = obj.width();
		_posiTop = (_windowHeight - _popupHeight)/2 ; 
		_posiLeft = (_windowWidth - _popupWeight)/2; 
		obj.css({"left": _posiLeft + "px","top":_posiTop + "px"});
	}
}
$(".shade").click(function(){$(this).fadeOut(1000);obj.fadeOut(1000);$("."+ID).attr("src","");})
$(".close").click(function(){obj.fadeOut(1000);$(".shade").fadeOut(1000);})