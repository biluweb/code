function AutoHeight(){
	this.body=document.querySelector('body');
	this.tabul=document.querySelectorAll('.tabBox .bd > ul');
	this.dissCumsg=document.querySelector('#dissCumsg');
	this.vih=null;this.toph=null;this.videoh=null;this.tabhd=null;this.tabulh=null;this.inputh=null;
	this.dissCumsgh=null;this.objh=null;this.b=null;this.are=null;
}
AutoHeight.prototype.init=function(){
	this.vih=document.documentElement.clientHeight;
	this.toph=document.querySelector('.mui-bar-nav').clientHeight;
	this.videoh=document.querySelector('.video').clientHeight;
	this.tabhd=document.querySelector('.tabBox .hd').clientHeight;
	this.inputh=document.querySelector('.speak').clientHeight;
	this.tabulh=this.vih-this.toph-this.videoh-this.tabhd;
	this.dissCumsgh=this.tabulh-this.inputh-10;
	for(var i=0,l=this.tabul.length;i<l;i++){
		this.tabul[i].style.height=this.tabulh+'px';
	}
	this.dissCumsg.style.height=this.dissCumsgh+'px';
}
