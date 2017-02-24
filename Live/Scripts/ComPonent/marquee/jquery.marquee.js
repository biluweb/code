(function($){
	$.fn.qlMarquee=function(options){
	    var opts = $.extend({}, $.fn.qlMarquee.defaults, options);
	    var scrolling = true;
	    var _this = $(this);
	    if (_this.children().length <= 1){
            return;
	    }
	    var listHeight = _this.children().first().outerHeight();
	    var childrenLenth = _this.children().length;
	    _this.innerHTML += _this.innerHTML;
	    _this.onmouseover = function () { scrolling = false };
	    _this.onmouseout = function () { scrolling = true };
	    var scroll = function () {
	        var stop = ((_this.scrollTop() % listHeight == 0) && !scrolling);
	        if (!stop) {
	            if (_this.scrollTop() < listHeight * (childrenLenth-1)) {
	                _this.animate({ scrollTop: (_this.scrollTop() + (listHeight)) });
	            } else {
	                _this.animate({ scrollTop: 0 });
	            }
	        }
	        setTimeout(scroll, 5000);
	    };
	    scroll();
	};

	$.fn.qlMarquee.defaults = {
        //todo:
		//isEqual:true,		//所有滚动的元素长宽是否相等,true,false
		//loop: 0,			//循环滚动次数，0时无限
		//direction: "left",	//滚动方向，"left","right","up","down"
		//scrollAmount:1,		//步长
		//scrollDelay:20		//滚动延时
	};

	$.fn.qlMarquee.setDefaults = function (settings) {
	    $.extend($.fn.qlMarquee.defaults, settings);
	};
})(jQuery);