
function WinSize(){
	var ViewW=$(window).width();
	if(ViewW<=1420){
		$('html').addClass('Max1420');
	}else{
		$('html').removeClass('Max1420');
	}
	if(ViewW<=1200){
		$('html').addClass('Max1200');
	}else{
		$('html').removeClass('Max1200');
	}
}
$(function(){
	WinSize();
})

$(window).resize(function(){
	WinSize();
})
