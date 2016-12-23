window.onload=function(){
	var vb={
		jm:['q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';','’','|','z','x','c','v','b','n','m',',','.','?'],
		bd:document.getElementsByTagName('body')[0],
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
        timer:'',    //---添加span
        timer2:'',    //---获取span
        flage:true,    //---键盘节流开关
        f:0,

	};
	var fn={
		adiv:function(){
			var i=Math.floor(Math.random()*(vb.jm.length));
			var xf='xf'+[i];
			vb.dv.className=xf;
			vb.dv.innerHTML=vb.jm[i];
			vb.dv.style.webkitTransition='top 8s linear,left 8s linear';
			vb.bd.appendChild(vb.dv.cloneNode(true));
		},
        kd:function(e){
            if(vb.flage){
                vb.flage=false;               
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
                vb.send.load();
                vb.send.play();
                if(typeof(ays)=='undefined'){
                    vb.flage=true;
                }else{
                    ays.style.backgroundImage='url(../image/2f.png)';
                    ays.innerHTML='';
                    setTimeout(function(){
                        ays.style.backgroundImage='url(../image/2b.png)';
                        ays.style.webkitBorderRadius='50%';
                        ays.style.webkitTransition='top 8s linear,left 8s linear,background 0.3s linear';
                    },700);
                    setTimeout(function(){
                        ays.parentNode.removeChild(ays);
                        vb.f+=100;
                        vb.jf.innerHTML=vb.f; 
                    },1000);
                    vb.flage=true;   
                }
            }
        },
		getDiv:function(){
			var newDiv=vb.bd.lastChild;
			var time=8000+Math.floor(Math.random()*2000);
			setTimeout(function(){newDiv.className+=' flight';}, 200);
            //测试专用函数
			setTimeout(function(){newDiv.parentNode.removeChild(newDiv);},time);
		},
		kedown:function(){
			document.addEventListener('keydown',fn.kd, false);
		},
        Bsclick:function(){
            var flage=true;
            var flage2=true;
            vb.mubtn.onclick=function(){
                if(flage){
                    flage=false;
                    vb.memu.hidden=true;
                }else{
                    flage=true;
                    vb.memu.hidden=false;
                    clearInterval(timer);
                    clearInterval(timer2);
                    document.removeEventListener("keydown", fn.kd, false);
                    vb.star.innerHTML='继续游戏';
                    
                }
            }
            vb.star.onclick=function(){
                flage=false;
                vb.memu.hidden=true;
                vb.mH.style.display='block';
                vb.star.innerHTML='开始游戏';
                timer=setInterval(fn.adiv,1000);
                timer2=setInterval(fn.getDiv,1000);
                fn.kedown();

            }
            vb.musici.onclick=function(){
                var sour=vb.send.getElementsByTagName('source')[0];
                if(flage2){
                    flage2=false;
                    vb.ins[1].innerHTML='关';
                    vb.bgm.pause();
                    sour.src='';
                }else{
                    flage2=true;
                    vb.ins[1].innerHTML='开';
                    vb.bgm.play();
                    sour.src='../video/send.mp3';
                }
            }
        },

	};
    fn.Bsclick();
	console.log('\n作者:Blue\n联系Ta:qq1181935296\n发布日期:2016年05月12日\n爱❤生活爱ღBlue\n©2016 Blue沪ICP证850568号');
}