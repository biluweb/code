;(function(window,undefined){
	var PlaneGame;
	if(typeof(PlaneGame)==='undefined'){
		PlaneGame=function(){
			this.timer=null;this.timer2=null;
			this.vars={
				i:null,
				xf:null,
				newDiv:null,
				time:null,
				num:0,
			};
			this.jm=['q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';','’','|','z','x','c','v','b','n','m',',','.','?'];
			this.dom={
				bd:document.body,
				dv:document.createElement("span"),
				mubtn:document.getElementsByClassName('mubtn')[0],
				memu:document.getElementsByClassName('memu')[0],
				jf:document.getElementById('jf'),
				star:document.getElementById('star'),
				referral:document.getElementById('referral'),
				difficulty:document.getElementById('difficulty'),
				musici:document.getElementById('musici'),
				send:document.getElementById('send'),
				explode:document.getElementById('explode'),
				mH:document.getElementsByClassName('mH')[0],
				bgm:document.getElementById('bgm'),
				ins:document.getElementsByTagName('ins'),
				blood:document.getElementsByClassName('blood')[0],
			};
			this.setting={
				flage:true,    //---键盘节流开关
				f:0,          //---分数
			}
		};
		PlaneGame.prototype={
			init:function(opt){
				extend(this.setting,opt);
				this.addEvent();
			},
			createDiv:function(_this){
				_this.vars.i=Math.floor(Math.random()*(_this.jm.length));
				_this.vars.xf='xf'+[_this.vars.i];
				_this.dom.dv.className=_this.vars.xf;
				_this.dom.dv.innerHTML=_this.jm[_this.vars.i];
				_this.dom.dv.style.webkitTransition='top 8s linear,left 8s linear';
				_this.dom.bd.appendChild(_this.dom.dv.cloneNode(true));
			},
			getDiv:function(_this){
				_this.vars.newDiv=_this.dom.bd.getElementsByTagName('span');//lastChild
			    _this.vars.time=8000+Math.floor(Math.random()*2000);
			    var a=_this.vars.num;
			    for (var i=0;i<_this.vars.newDiv.length;i++) {
					_this.vars.newDiv[i].style.top=_this.vars.num+'px'
				}
				setInterval(function(){
					_this.vars.num+=20;
					for (var i=0;i<_this.vars.newDiv.length;i++) {
						_this.vars.newDiv[i].style.top=_this.vars.num+'px'
					}
				},200)
	            //自动删除函数
//				setTimeout(function(){newDiv.remove(newDiv);},time);
			},
			flight:function(){
				
			},
			keyDown:function(e,_this){
			    if(_this.setting.flage){
			        _this.setting.flage=false;               
			        var x,i;
		        	switch(e.keyCode){
			
			            case 81:    x=0;    //q
			                        break;
			            case 87:    x=1;    //w
			                        break;
			            case 69:    x=2;    //e
			                        break;
			            case 82:    x=3;    //r
			                        break;
			            case 84:    x=4;    //t
			                        break;
			            case 89:    x=5;    //y
			                        break;
			            case 85:    x=6;    //u
			                        break;
			            case 73:    x=7;    //i
			                        break;
			            case 79:    x=8;    //o
			                        break;
			            case 80:    x=9;    //p
			                        break;
			            case 219:   x=10;   //[
			                        break;
			            case 221:   x=11;   //]
			                        break;
			            case 65:    x=12;    //a
			                        break;
			            case 83:    x=13;    //s
			                        break;
			            case 68:    x=14;    //d
			                        break;
			            case 70:    x=15;    //f
			                        break;
			            case 71:    x=16;    //g
			                        break;
			            case 72:    x=17;    //h
			                        break;
			            case 74:    x=18;    //j
			                        break;
			            case 75:    x=19;    //k
			                        break;
			            case 76:    x=20;    //l
			                        break;
			            case 186:    x=21;   //;
			                        break;
			            case 222:    x=22;   //’
			                        break;
			            case 220:    x=23;   //|
			                        break;
			            case 90:    x=24;    //z
			                        break;
			            case 88:    x=25;    //x
			                        break;
			            case 67:    x=26;    //c
			                        break;
			            case 86:    x=27;    //v
			                        break;
			            case 66:    x=28;    //b
			                        break;
			            case 78:    x=29;    //n
			                        break;
			            case 77:    x=30;    //m
			                        break;
			            case 188:    x=31;   //<
			                        break;
			            case 190:    x=32;   //>
			                        break;
			            case 191:    x=33;   //?
			                        break;
			        }
		        	 i='xf'+x;
			        var ays=document.getElementsByClassName(i)[0];
			        _this.dom.send.load();
			        _this.dom.send.play();
			        if(typeof(ays)=='undefined'){
			            _this.setting.flage=true;
			        }else{
			            ays.style.backgroundImage='url(../image/2f.png)';
			            ays.innerHTML='';
			            setTimeout(function(){
			                ays.style.backgroundImage='url(../image/2b.png)';
			                ays.style.webkitBorderRadius='50%';
//			                ays.style.webkitTransition='top 8s linear,left 8s linear,background 0.3s linear';
			                ays.style.webkitTransition='top .2s linear,left 8s linear,background 0.3s linear';
			            },700);
			            setTimeout(function(){
			                ays.remove(ays);
			                _this.setting.f+=100;
			                _this.dom.jf.innerHTML= _this.setting.f;
			            },1000);
			            _this.setting.flage=true;   
			        }
			    }
			},
			addEvent:function(){
				var _this=this,flage=true,flage2=true;
				this.dom.star.addEventListener('click',function(){
					flage=false;
	                _this.dom.memu.hidden=true;
	                _this.dom.mH.style.display='block';
	                _this.dom.star.innerHTML='开始游戏';
	                _this.timer=setInterval(function(){
	                	_this.createDiv(_this)
	                },1000);
	                _this.timer2=setInterval(function(){
	                	_this.getDiv(_this)
	                },1000);
	                document.addEventListener('keydown',function(e){
	                	_this.keyDown(e,_this)
	                },false);
				})
				this.dom.mubtn.addEventListener('click',function(){
					if(flage){
                    	flage=false;
                    	_this.dom.memu.hidden=true;
	                }else{
	                    flage=true;
	                    _this.dom.memu.hidden=false;
	                    clearInterval(_this.timer);
	                    clearInterval(_this.timer2);
	                    document.removeEventListener("keydown", function(e){
	                    	_this.keyDown(e,_this)
	                    },false);
	                    _this.dom.star.innerHTML='继续游戏';
	                    
	                }
				})
				this.dom.musici.addEventListener('click',function(){
					var sour=_this.dom.send.getElementsByTagName('source')[0];
	                if(flage2){
	                    flage2=false;
	                    _this.dom.ins[1].innerHTML='关';
	                    _this.dom.bgm.pause();
	                    sour.src='';
	                }else{
	                    flage2=true;
	                    _this.dom.ins[1].innerHTML='开';
	                    _this.dom.bgm.play();
	                    sour.src='../video/send.mp3';
	                }
				})
			}
		}
		function extend(obj1,obj2){
			for(var attr in obj2){
				obj1[attr] = obj2[attr];
			}
		}
		window.PlaneGame=PlaneGame;
		
	}else{
		console.log("Error:var PlaneGame conflict");
	}
//	console.log('\n作者:Blue\n联系Ta:qq1181935296\n发布日期:2016年05月12日\n爱❤生活爱ღBlue\n©2016');
})(window)