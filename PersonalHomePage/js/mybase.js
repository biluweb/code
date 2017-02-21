define('mybase',['jquery','vue','mobileDevice'], function ($,Vue){
	//Device
	if(isMobileDevice()){
		$('head').append("<link rel='stylesheet' type='text/css' href='css/myMobile.css' />");
	}
	var vm=new Vue({
		el:'#app',
	  	data: {
	  		resume:null,
			navcurt:null
	  	},
	  	created: function () {
	  		// `this` 指向 vm 实例
	  		//url截取
	  		var url = window.location.href,
				loc = url.substring(url.lastIndexOf('/')+1, url.length);
	  		this.navcurt=loc;
	  		
	  		// `数据 交互
		    var _this=this;
		    $.ajax({
		    	type:"get",
		    	url:"/code/Api/myinfor/resume.json",
		    	async:false,
		    	success:function(data, textStatus){
		    		_this.resume=data.resume[0];
		    	}
		    });
	  	}
	})
});