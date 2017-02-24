(function(){
    var d = 0;
    var mid = 0;
    var up = 0;
    var total;
    var pbid = false;
    var timer = {};
    var serverConfig = typeof pServerArr !== 'undefined' ? pServerArr : [];
    var Psocket = {};
    var count = 0;
    function reGetServer() {
        if(count >= 8){
            return false;
        }
        count++;
        setTimeout(function () {
            pGetNewServer()
        }, 5000);
    }
    function pGetNewServer() {
        $.ajax({
            url: '//www.jin10.com/js/pserver.js',
            dataType: 'script',
            success: function(){
                count = 0;
                serverConfig = pServerArr;
                pbid = true;
                Psocket.disconnect();
                Psocket = null;
                setTimeout(function () {
                    socketConnect();
                }, 1);
            },
            error: function(){
                reGetServer();
            }
        });
    }
    function socketConnect(){
        if(!serverConfig.length){
            return false;
        }
        var n = Math.floor(Math.random() * serverConfig.length + 1) - 1;
        var serverUrl = serverConfig[n];
        Psocket = io.connect(serverUrl, {'force new connection': true, 'reconnection': false});

        Psocket.on('connect', function () {
            show();
            Psocket.emit('reqvote', "ok");
        });
        Psocket.on('error', function (reason) {
            reGetServer();
        });

        Psocket.on('connect_error', function (reason) {
            reGetServer();
        });
        Psocket.on('repair', function (reason) {
            reGetServer();
        });
        Psocket.on('reconnecting', function (nextRetry) {
            
        });
        Psocket.on('disconnect', function () {
            if (!pbid) {
                reGetServer();
            }
        });
        //ACTION
        Psocket.on('letsgo', function () {
            
        });

        Psocket.on('time', function (t) {
            time = t * 1000 + 50; //加100毫秒,缩短socket传递误差
        });

        Psocket.on('price list', function(msg) {
            if (msg.name == "GC") {
                $('#' + msg.name + "_B").text(msg.v.lp);
                $('#' + msg.name + "_P").text(msg.v.chp + "手");
                if (msg.v.chp > 499)
                {
                    $('#' + msg.name + "_P").css({
                        "background-color": "#dc5538",
                        "color": "#FFFFFF"
                    });
                } else
                {
                    $('#' + msg.name + "_P").css({
                        "background-color": "transparent",
                        "color": "#111111"
                    });
                }
            } 
            else {
                var oldvalue = $('#' + msg.name + "_B").text();
                var newvalue = msg.v.lp;
                var pcolor;
                var ycolor = 'grey';

                if (Number(newvalue) > Number(oldvalue)) {
                    pcolor = "#dc5538";
                } 
                else if (Number(newvalue) < Number(oldvalue)) {
                    pcolor = "#238859";
                } 
                else if (Number(newvalue) == Number(oldvalue)) {
                    return;
                }

                if (msg.v.ch != null) {
                    var per = msg.v.ch / (msg.v.lp-msg.v.ch) * 100;
                    if (Number(per) > 0) {
                        ycolor = "#FF0000";
                        $('#' + msg.name + "_B").css("color", "#FF0000");
                        $('#' + msg.name + "_P").css("color", "#FF0000");
                    } 
                    else if (Number(per) < 0) {
                        ycolor = "#0EA600";
                        $('#' + msg.name + "_B").css("color", "#0EA600");
                        $('#' + msg.name + "_P").css("color", "#0EA600");
                    } 
                    else {
                        ycolor = "#111111";
                        $('#' + msg.name + "_B").css("color", "#111111");
                        $('#' + msg.name + "_P").css("color", "#111111");
                    }
                    $('#' + msg.name + "_P").text(per.toFixed(2) + "%");
                }

                var id = timer[msg.name];
                if (id != null && id != 0) {
                    clearTimeout(id);
                };
                $('#' + msg.name + "_B").css({
                    "color": "white",
                    "background-color": pcolor
                });
                $('#' + msg.name + "_B").text(msg.v.lp);

                var mm = setTimeout(function () {
                    $('#' + msg.name + "_B").css({
                        "background-color": "transparent",
                        "color": $('#' + msg.name + "_P").css('color')
                    });
                    timer[msg.name] = 0;
                }, 600);
                timer[msg.name] = mm;

            }
        });
    }

    function show() {
        // Psocket.emit('delAllSubscription' , []);
        Psocket.emit('addSubscription' , ['XAUUSD' , 'XAGUSD' , 'UKOIL' , 'USOIL' , 'DXY' , 'EURUSD' , 'GC']);
    }
    socketConnect();
})();




