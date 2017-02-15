//判断是否是移动设备1
function isMobileDevice() {
var sUserAgent,bIsIpad,bIsIphoneOs,bIsMidp,bIsUc7,bIsUc,bIsAndroid,bIsCE,bIsWM
     sUserAgent = navigator.userAgent.toLowerCase();
     bIsIpad =sUserAgent.match(/ipad/i) == "ipad";
     bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
     bIsMidp = sUserAgent.match(/midp/i) == "midp";
     bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
     bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
     bIsAndroid = sUserAgent.match(/android/i) == "android";
     bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
     bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}

//android&&ios设备检测2
var u,isAndroid,isiOS;
 u = navigator.userAgent;
 isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
 isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
 
//判断是否是移动设备3
var ua,isios,isandroid,noAndIos,sUserAgent;
    ua = navigator.userAgent.toLowerCase();
    isios=/iphone|ipad|ipod/.test(ua);
    isandroid=/android/.test(ua);
    noAndIos=!/iphone|ipad|ipod|android/.test(ua);
