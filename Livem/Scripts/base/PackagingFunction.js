//document简化为doc
window.doc=document;
//1.hasClass:判断样式是否存在
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  

//2.addClass:为指定的dom元素添加样式
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  

//3.removeClass:删除指定dom元素的样式
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  

//4.toggleClass:如果存在(不存在)，就删除(添加)一个样式
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}

//设备检测
function Device(){
	this.u=navigator.userAgent;
	this.iframewrap=null;
}
Device.prototype.isAndroid=function(){
	if(this.u.indexOf('Android') > -1 || this.u.indexOf('Adr') > -1){
		return true;
	}else{
		return false;
	}
}
Device.prototype.isIOS=function(){
	if(!!this.u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
		return true;
	}else{
		return false;
	}
}
Device.prototype.IframeScrool=function(Scroolbox){
	this.iframewrap=doc.querySelectorAll(Scroolbox);
	if(this.iframewrap){
		if(this.isIOS()){
			for(var i=0,l=this.iframewrap.length;i<l;i++){//Scrolling//-webkit-overflow-scrolling
				this.iframewrap[i].style.overflow='auto';
				this.iframewrap[i].style.webkitOverflowScrolling='touch';
//				this.iframewrap[i].style.webkitTransform='translate(20px,-20px)  ' 
			}
		}
		
		if(this.isAndroid()){
			for(var i=0,l=this.iframewrap.length;i<l;i++){
				this.iframewrap[i].style.overflow='inherit';
			}
		}
	}else{
		return typeof(this.iframewrap);
	}
}

//阻止默认事件
function stopDefault( e ) { 
     if ( e && e.preventDefault ) 
        e.preventDefault(); 
    else 
        window.event.returnValue = false; 
        
    return false; 
} 

//解决input焦点无法取消问题
function InputFocus(Input){
	this.iput=doc.querySelectorAll(Input);
}
InputFocus.prototype.clear=function(t){
	for(var i=0,l=t.length;i<l;i++){
		t[i].blur();
	}
}
InputFocus.prototype.init=function(){
	var This=this;
	for(var i=0,l=this.iput.length;i<l;i++){
		this.iput[i].onfocus=function(){
			doc.addEventListener('tap',function(){This.clear(This.iput)},false);
		}
		this.iput[i].onblur=function(){
			doc.removeEventListener('tap',function(){This.clear(This.iput)},false);
		}
	}
	return this;
}
InputFocus.prototype.hover=function(dom){
	var This=this;
	this.dm=doc.querySelectorAll(dom);
	for(var i=0,l=this.iput.length;i<l;i++){
		this.iput[i].index=i;
		this.iput[i].onfocus=function(){
			doc.addEventListener('tap',function(){This.clear(This.iput)},false);
			if(This.dm[this.index]){
				This.dm[this.index].style.backgroundColor='#ed1c39';
			}
			This.iput[this.index].style.borderColor='#333333';
		}
		this.iput[i].onblur=function(){
			doc.removeEventListener('tap',function(){This.clear(This.iput)},false);
			if(This.dm[this.index]){
				This.dm[this.index].style.backgroundColor='#c7c7c7';
			}
			This.iput[this.index].style.borderColor='rgba(0, 0, 0, 0.2)';
		}
	}
	return this;
}

//Tabs切换
function LogregTab(dom){
	this.box=doc.querySelector(dom);
	this.tabli=this.box.querySelectorAll('.tab li');
	this.tabinfor=this.box.querySelectorAll('.infor>div');
}
LogregTab.prototype.init=function(callback){
	var This=this;
	for(var i=0;i<this.tabli.length;i++){
		this.tabli[i].index=i;
		this.tabli[i].addEventListener('tap',function(){
			for(var i=0;i<This.tabli.length;i++){This.tabli[i].className='';This.tabinfor[i].className='';}
			this.className='on';
			This.tabinfor[this.index].className='active';
		})
	}
	if(typeof callback == "function") callback();
	return this;
}

//页面跳转
//function openPage(obj){
//	this.box=doc.querySelector(obj);
//	this.a=this.box.querySelectorAll('a');
//}
//openPage.prototype.init=function(){
//	var This=this;
//	for(var i=this.a.length-1;i>=0;i--){
//		if(this.a[i].getAttribute('href')&&this.a[i].getAttribute('href').slice(-5)=='.html'){
//			this.a[i].addEventListener('tap',function(){
//				mui.openWindow({
//				  url:this.getAttribute('href'),
//				});
//			})
//		}
//	}
//}

//下滑导航code
function SlideDt(id1,id2){
		this.source=doc.querySelector(id1);
		this.csource=doc.querySelector(id2);
		this.wrp=doc.querySelector('.mui-off-canvas-wrap');
		this.popver=doc.querySelector('#popover');
		this.inerwrp=doc.querySelector('.mui-inner-wrap');
}
SlideDt.prototype.init=function(){
	var This=this;
	this.source.addEventListener('tap',function(){
		 addClass(This.wrp,'mui-active');
		 addClass(This.popver,'mui-active');
		 if(!hasClass(This.popver,'mui-transitioning')){
		 		addClass(This.popver,'mui-transitioning');
		 }
		 if(!hasClass(This.inerwrp,'mui-transitioning')){
		 	  addClass(This.inerwrp,'mui-transitioning');
		 }
		 This.tapsource();
	});
}
SlideDt.prototype.tapsource=function(){
		this.popver.style.visibility='visible';
	  this.popver.style.webkitTransform='translate3d(0px, 0%, 0px)';
	  this.closesource();
}
SlideDt.prototype.tapcsource=function(){
	  this.popver.style.webkitTransform='translate3d(0px, -100%, 0px)';
}
SlideDt.prototype.closesource=function(){
	  var This=this;
	  this.csource.addEventListener('tap',function(){
	  	 This.tapcsource();
	  	 removeClass(This.wrp,'mui-active');
	  	 setTimeout(function(){
		 	    removeClass(This.popver,'mui-active');
	  	 },350)
	  })
}

//验证是否选中checkedbox
function CheckedBoolean(put){
	this.box=doc.querySelector(put);
	this.putchecked=null;this.label=null;
	if(this.box){
		if(this.box.checked){
			this.box.setAttribute("Boolean",true);
			return true;
		}else{
			this.box.setAttribute("Boolean",false);
			return false;
		}
	}else{
		return typeof(this.box);
	}
}
CheckedBoolean.prototype.init=function(obj){
	this.boxex=doc.querySelector(obj);
	if(this.box.checked){
		addClass(this.boxex,'yes')
	}else{
		removeClass(this.boxex,'yes')
	}
}
CheckedBoolean.prototype.setVal=function(obj,label,type){
	var This=this;
	this.putchecked=doc.querySelectorAll(obj);
	this.label=doc.querySelectorAll(label);
	if(this.putchecked){
		for (var i=0,l=this.putchecked.length;i<l;i++) {
			this.putchecked[i].setAttribute("disabled","disabled");
			this.putchecked[i].addEventListener('tap',function(){
				if(this.checked){
					this.removeAttribute("checked");
				}else{
					this.setAttribute("checked","true");
				}
			})
		}
	}else{
		return typeof(putchecked);
	}
	
	if(this.putchecked&&this.label){
		for (var i=0,l=this.putchecked.length;i<l;i++) {
			this.label[i].index=i;
			this.putchecked[i].setAttribute("disabled","disabled");
			this.label[i].addEventListener('tap',function(){
				
				if(This.putchecked[this.index].checked){
					This.putchecked[this.index].removeAttribute("checked");
					This.putchecked[this.index].setAttribute("bloon",false);
				}else{
					if(type=='radio'){
						for(var i=0,l=This.putchecked.length;i<l;i++){
							This.putchecked[i].removeAttribute("checked");
							This.putchecked[i].setAttribute("bloon",false);
						}
					}
					This.putchecked[this.index].setAttribute("checked",true);
					This.putchecked[this.index].setAttribute("bloon",true);
				}
			})
		}
	}else{
		return typeof(this.putchecked,this.label);
	}
}
