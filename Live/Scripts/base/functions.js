//加载css文件
var loadCss = function (url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
};

//判断是否是移动设备
var isMobileDevice = function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = false; //sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}
/**
 * 个人qq，及其获得
 * @param {} proxyId 
 * @returns {} 
 */
var ContactQQ = function (proxyId) {
    var parameter = {};
    parameter["proxyId"] = proxyId ? proxyId : "0D9303BC-8B5F-4B2F-A19A-2379362CFFF7";
    $.ajax({
        cache: false,
        dataType: "json",
        async: false,
        type: "POST",
        data: parameter,
        url: "/Ajax/GetQqResult",
        timeout: 5000,
        error: function () {
            layer.alert("脚本运行出现异常，请刷新页面重试！");
        },
        success: function (data) {
            var qqlist = new Array();;
            if (data.isEmpty) {
                if (!data)
                    qqlist = new Array("2850375900", "2850375870", "2850375902", "2850796580");
                if (window.location.host == "www.51h1h.cn") {
                    qqlist = new Array("2753299867");
                }
            } else {
                for (var i = 0; i < data.servicelist.length; i++)
                {
                    qqlist.push(data.servicelist[i].serviceqq);
                }
                if (window.location.host== "www.51h1h.cn") {
                    qqlist = new Array("2753299867");
                }
            }
            var randomqqnum = qqlist[Math.floor((Math.random() * qqlist.length))];
            if (navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Netscape")
                window.open("http://wpa.qq.com/msgrd?v=3&uin=" + randomqqnum + "&Site=qq&Menu=yes");
            else {
                if (!isMobileDevice()) {
                    $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&uin=" + randomqqnum + "&Site=qq&Service=201");
                } else {
                    $(".qq_iframe").attr("src", "http://wpa.qq.com/msgrd?v=3&uin=" + randomqqnum + "&Site=qq&Menu=yes");
                }
            }
        }
    });
    
}

var ContactQQ2 = function (qqlist) {
    if (window.location.host == "www.51h1h.cn") {
        qqlist = new Array("2753299867");
    }
    var randomqqnum = qqlist[Math.floor((Math.random() * qqlist.length))];
    if (navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Netscape")
        window.open("http://wpa.qq.com/msgrd?v=3&uin=" + randomqqnum + "&Site=qq&Menu=yes");
    else {
        if (!isMobileDevice()) {
            $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&uin=" + randomqqnum + "&Site=qq&Service=201");
        } else {
            $(".qq_iframe").attr("src", "http://wpa.qq.com/msgrd?v=3&uin=" + randomqqnum + "&Site=qq&Menu=yes");
        }
    }
}


//营销qq
var PlayJsAdPopWin = function () {
    if (qq_chat && userip != "::1" && userip != "116.226.55.220") {
        //$(".qq_iframe").attr("src", "tencent://message/?Menu=yes&amp;uin=800101133&amp;Service=58&amp;SigT=A7F6FEA02730C988E5F4A8F9F5DABB6EB018887C51A80BA4A10F0CA2AB94DC314656635C57DE34E2921D205FA67B5EB635C67FAC422AB01E4BC4D8A5AC32298F0128602A47E7DA88E720BDA6A021DD22BE95B022DBCC393246B26E36AAE34340671C4B3E9A1B62C77251460C60A5340CC8496920E0A08CAA&amp;SigU=30E5D5233A443AB263596D9DF34AD7CBE25CD0EE206EC77DA5A5830A2497AAF18275F0B9D9D342A5A43E4CB40BF68FBC6ABBFD79B0696772B56D747DACBD5FB5F3830D2BC3F6C4C1");
        //var seed = Math.round(Math.random() * 10);
        //var getQQ = units.getCookie("QQ");
        //if (getQQ == 1) {
        //    $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&amp;uin=800048217&amp;Service=58&amp;SigT=A7F6FEA02730C988C8987528185BAB3B5A9CE24D707E49D49C09D936E8E59A19521B489B7E02218F4D0FD2B88A94793915E977DF1E9F6DF32D30F7B52B74BEAF8CBFD31CFB819A8E85A1815914C95FCAE363E38E18BC9D3E519750E579560689248C1975332C68DA6FD89109134C6E6CEC9C7AE495881CCE&amp;SigU=30E5D5233A443AB272F1617BEEB28CFEEACA5E4B11C9EC60091EB8B93B7B7A7B750D9309BBE403987952ED6188E99D2C256B3E46C82C7A150758ECD9CE874139CE3C026CB1C39CC0");
        //    return;
        //}
        //else if (getQQ == 2) {
        //    $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&amp;uin=800101133&amp;Service=58&amp;SigT=A7F6FEA02730C988058BF191FF01F66831D312B8F1B14F00AC8A2A7EAEE74A5694C21A8D2618B6C9BD563DA402A3BF301CF2F266457758A793D02794CD8109CE9F7B054EA4F0B154CE1E4ADC75544F8FE5CE2D339D13F2F79F0DA798619079DF9ADF8A8C4A89B257A5861A61863BCE3E643E709B081D708B&amp;SigU=30E5D5233A443AB291BA2185D7B35199C26E081918887DA7CEB38C0D21CF51455DCF2A15F1B685BF91741F0EEE80FF2EDC84D88C70DB64EE361591B284D420B01CA4690BBAD3653F");
        //    return;
        //}
        //if (seed % 3 == 0) {
        //    $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&amp;uin=800048217&amp;Service=58&amp;SigT=A7F6FEA02730C988C8987528185BAB3B5A9CE24D707E49D49C09D936E8E59A19521B489B7E02218F4D0FD2B88A94793915E977DF1E9F6DF32D30F7B52B74BEAF8CBFD31CFB819A8E85A1815914C95FCAE363E38E18BC9D3E519750E579560689248C1975332C68DA6FD89109134C6E6CEC9C7AE495881CCE&amp;SigU=30E5D5233A443AB272F1617BEEB28CFEEACA5E4B11C9EC60091EB8B93B7B7A7B750D9309BBE403987952ED6188E99D2C256B3E46C82C7A150758ECD9CE874139CE3C026CB1C39CC0");
        //    units.SetCookie("QQ", 1);
        //}
        //else {
        //    $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&amp;uin=800101133&amp;Service=58&amp;SigT=A7F6FEA02730C988058BF191FF01F66831D312B8F1B14F00AC8A2A7EAEE74A5694C21A8D2618B6C9BD563DA402A3BF301CF2F266457758A793D02794CD8109CE9F7B054EA4F0B154CE1E4ADC75544F8FE5CE2D339D13F2F79F0DA798619079DF9ADF8A8C4A89B257A5861A61863BCE3E643E709B081D708B&amp;SigU=30E5D5233A443AB291BA2185D7B35199C26E081918887DA7CEB38C0D21CF51455DCF2A15F1B685BF91741F0EEE80FF2EDC84D88C70DB64EE361591B284D420B01CA4690BBAD3653F");
        //    units.SetCookie("QQ", 2);
        //}
        if (window.location.host == "www.51h1h.cn"){
            $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&uin=2753299867&Site=qq&Service=201");
            return;
        }
        $(".qq_iframe").attr("src", "tencent://message/?Menu=yes&amp;uin=800048217&amp;Service=58&amp;SigT=A7F6FEA02730C988C8987528185BAB3B5A9CE24D707E49D49C09D936E8E59A19521B489B7E02218F4D0FD2B88A94793915E977DF1E9F6DF32D30F7B52B74BEAF8CBFD31CFB819A8E85A1815914C95FCAE363E38E18BC9D3E519750E579560689248C1975332C68DA6FD89109134C6E6CEC9C7AE495881CCE&amp;SigU=30E5D5233A443AB272F1617BEEB28CFEEACA5E4B11C9EC60091EB8B93B7B7A7B750D9309BBE403987952ED6188E99D2C256B3E46C82C7A150758ECD9CE874139CE3C026CB1C39CC0");
    }
};
//当年第几周
var theWeek = function () {
    //当前date
    var now = new Date();
    //每月多少日
    var monthOfFullDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    //当前日，在本年中第几日
    var currentDayOfYear = 0;
    //是否为润年，即能被4整除
    var isFullYear = false;
    var currentDayOfWeekIsLastDay = false;
    var firstDayOfYearIsFirstDayOfWeek = false;
    //当前年份
    var year = 0;
    if (now.getYear() >= 2000)
        year = now.getYear();
    else
        year = now.getYear() + 1900;
    //当前月份
    var month = now.getMonth();
    //当前日
    var day = now.getDate();
    //当前星期几
    var week = now.getDay();
    //为闰年，设isFullYear为true
    if (year % 4 == 0) {
        isFullYear = true;
    }
    //循环计算天数
    for (var i = 0; i < monthOfFullDay.length; i++) {
        //判断数组月份是否小于等于当前月份
        if (i < month) {
            //是闰年和2月份
            if (isFullYear && i == 1)
                currentDayOfYear = currentDayOfYear + 29;
            else
                currentDayOfYear = currentDayOfYear + monthOfFullDay[i];
        }
        if (i == month)
            currentDayOfYear = currentDayOfYear + day;
    }

    //设置本年1月1日
    var firstDayOfYear = new Date();
    firstDayOfYear.setYear(year);
    firstDayOfYear.setMonth(0);
    firstDayOfYear.setDate(1);

    if (firstDayOfYear.getDay() == 0) {
        firstDayOfYearIsFirstDayOfWeek = true;
    }

    var weeksOfYear = currentDayOfYear;

    //本星期是否为最后一日，否，则减去本兴起所有日
    if (!currentDayOfWeekIsLastDay) {
        weeksOfYear = weeksOfYear + firstDayOfYear.getDay();
    }

    //是否第一个星期为第一日（即星期日），否，则减去本星期所有日
    if (!firstDayOfYearIsFirstDayOfWeek) {
        weeksOfYear = weeksOfYear + (7 - week - 1);
    }

    return weeksOfYear / 7;
}

var timeoutKick = function (kicked) {
    layer.open({
        type: 1,
        title: false,
        closeBtn: (kicked==1?0:1),
        shadeClose: (kicked == 1 ? false : true),
        skin: 'layui-layer-nobg',
        content: '<div id="solidity"><div id="Img-1"><img src="/v2/images/' + (kicked==1 ? "kicked/2" : "kicked/1") + '.png"></div><a href="javascript:;" onclick="$(\'.logoOrSign_sign\').trigger(\'click\');">登录</a><a href="javascript:;" onclick="$(\'.login_btn\').trigger(\'click\');">注册</a></div>',
        success: function (layero, index) {
            if (kicked == 1) {
                $("#videoComponent").remove();
                if (!units.getCookie($("#msgfrom").val()+"_Kicked")) {
                    units.SetCookie($("#msgfrom").val()+"_Kicked", "true");
                }
            } else {
                setTimeout("timeoutKick(1)",5*60*1000);
            }
        }
    });
}