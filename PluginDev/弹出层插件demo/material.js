;(function (window, jQuery, undefined) {
    "use strict";
    var idc = 0, material;
    if (typeof material === 'undefined') {
        material = {
            open: function (opt) {
                idc++;
                var dft = {//默认参数
                    area: ['200px', ''],                                                         //['width','height']
                    position: 'center',                                                          //position:可选参数：left-top,right-top,left-bottom,right-bottom,center,top,bottom,left,right
                    src: '/images/activity/UnitedSelect/UnitedSelec.png',                        //src:弹出图片地址
                    behavior: 'link',                                                            //behavior：字符串类型，link或者script，默认link
                    doc: "http://live.longding999.com/Html/ActivityDetails/UnitedSelect.html",   //doc：字符串类型behavior的执行操作，默认是链接类型，执行window.open(‘链接地址’)，如果是script，需写javascript:alert(123)
                    style: {},                                                                    //style：json，默认空，参数{title:"background-color:#369",content:"border:0;"}
                    closable: false,                                                              //closable：bool类型，默认false，是否可以关闭此弹出
                    mask: true,                                                                   //mask：bool类型，默认true，是否显示遮罩层
                },
                ops = $.extend(dft, opt),
                htmls = {
                    ovl: "<div class='Popup-mask' id='mask-" + idc + "'></div><div class='Popup-material' id='ovl-" + idc + "'><div class='Material-content'><img class='materimg' style='width:100%'/></div></div>",
                    closeBtn: "<span class='layui-layer-setwin'><a class='layui-layer-ico layui-layer-close layui-layer-close2' href='javascript:;'></a></span>"
                },
                config = {},
                get = function (n) {
                    return config[n];
                },
                set = function (n, v) {
                    config[n] = v;
                },
                viewWidth = function () {
                    return document.documentElement.clientWidth;
                },
                viewHeight = function () {
                    return document.documentElement.clientHeight;
                },
                isArray = function (obj) {
                    return Object.prototype.toString.call(obj) === '[object Array]';
                };

                material.prototype = {
                    init: function () {
                        this.create();
                        this.bindEvent();
                    },
                    create: function () {
                        var body = $('body');
                        body.append(htmls.ovl);
                        set("ovlid", $("#ovl-" + idc + ""));
                        set("maskid", $("#mask-" + idc + ""));
                        set("content", get('ovlid').find('.Material-content'));
                        set("materimg", get('ovlid').find('.materimg'));
                        this.setdata();
                    },
                    setdata: function () {
                        if (ops.src) {
                            get("materimg").attr('src', ops.src);
                        } else {
                            layer.alert('src: 参数不能为空!');
                        };

                        if (isArray(ops.area)) {
                            get('ovlid').width(ops.area[0]).height(ops.area[1]);
                        } else if (isArray(ops.area) == false) {
                            get('ovlid').width(ops.area).height(ops.area);
                        } else {
                            layer.alert('area: 参数错误，请核对参数!');
                        };

                        if (ops.position == 'center') {
                            get('ovlid').addClass('xy');
                            get("materimg").load(function () {
                                get('ovlid').css({
                                    top: (viewHeight() - get('ovlid').outerHeight()) / 2,
                                    left: (viewWidth() - get('ovlid').outerWidth()) / 2
                                })
                            })
                            this.windowResiz('xy');
                        } else if (ops.position == 'left-top') {
                            get('ovlid').css({
                                top: '0px',
                                left: '0px'
                            })
                        } else if (ops.position == 'left-bottom') {
                            get('ovlid').css({
                                left: '0px',
                                bottom: '0px'
                            })
                        } else if (ops.position == 'right-top') {
                            get('ovlid').css({
                                top: '0px',
                                right: '0px'
                            })
                        } else if (ops.position == 'right-bottom') {
                            get('ovlid').css({
                                bottom: '0px',
                                right: '0px'
                            })
                        } else if (ops.position == 'top') {
                            get('ovlid').addClass('x');
                            get("materimg").load(function () {
                                get('ovlid').css({
                                    top: '0px',
                                    left: (viewWidth() - get('ovlid').outerWidth()) / 2
                                })
                            })
                            this.windowResiz('x');
                        } else if (ops.position == 'right') {
                            get('ovlid').addClass('y');
                            get("materimg").load(function () {
                                get('ovlid').css({
                                    top: (viewHeight() - get('ovlid').outerHeight()) / 2,
                                    right: '0px'
                                })
                            })
                            this.windowResiz('y');
                        } else if (ops.position == 'bottom') {
                            get('ovlid').addClass('x');
                            get("materimg").load(function () {
                                get('ovlid').css({
                                    left: (viewWidth() - get('ovlid').outerWidth()) / 2,
                                    bottom: '0px'
                                })
                            })
                            this.windowResiz('x');
                        } else if (ops.position == 'left') {
                            get('ovlid').addClass('y');
                            get("materimg").load(function () {
                                get('ovlid').css({
                                    top: (viewHeight() - get('ovlid').outerHeight()) / 2,
                                    left: '0px'
                                })
                            })
                            this.windowResiz('y');
                        } else {
                            layer.alert('position: 参数错误，请核对参数!');
                        };

                        if (ops.behavior == 'link') {
                            get("materimg").css('cursor', 'pointer');
                            this.openlink();
                        } else if (ops.behavior == 'script') {
                            get("materimg").css('cursor', 'pointer');
                            this.scriptdo();
                        } else {
                            layer.alert('behavior: 参数无效!')
                        };

                        if (ops.mask == false) {
                            get("maskid").remove();
                        } else if (ops.mask != true) {
                            layer.alert('mask: 参数无效!')
                        }

                        if (ops.closable) {
                            get("content").append(htmls.closeBtn);
                            set("setwin", get('ovlid').find('.layui-layer-setwin'));
                        } else if (ops.closable != false) {
                            layer.alert('closable: 参数无效!')
                        };

                        if (ops.style) {
                            var PuppetStr = function (str) {
                                if (str[str.length - 1] == ' ' || str[str.length - 1] == ';') {
                                    layer.alert("style: css参数末尾不能为';'和'空格'");
                                    return false;
                                } else {
                                    return str.split(';');
                                }
                            };
                            for (var key in ops.style) {
                                switch (key) {
                                    case 'content':
                                        var ary = PuppetStr(ops.style.content);
                                        if (isArray(ary)) {
                                            var json = {};
                                            for (var i = 0, l = ary.length; i < l;i++) {
                                                json[ary[i].split(':')[0]] = ary[i].split(':')[1];
                                            }
                                            get("content").css(json);
                                        }
                                        break;
                                    default:
                                }
                            }
                        }
                    },
                    bindEvent: function () {
                        var _this = this,
                            ovl = get("ovlid"),
                           mask = get("maskid"),
                        setwin = get("setwin");

                        if (ops.closable) {
                            mask.on('click', function (e) {
                                _this.hide();
                                _this.destory();
                            })
                            setwin.on('click', function (e) {
                                _this.hide();
                                _this.destory();
                            })
                        }
                    },
                    windowResiz: function (f) {
                        var _this = this,
                            addEventResize = function (c) {
                                _this.ovlCenter(c);
                            };
                        if (f == 'xy' || f == 'x' || f == 'y') {
                            addEventResize(f);
                            window.onresize = function () {
                                addEventResize('xy'); addEventResize('x'); addEventResize('y');
                            };
                        }
                    },
                    ovlCenter: function (n) {
                        set("ovlidxy", $('.Popup-material.xy'));
                        set("ovlidx", $('.Popup-material.x'));
                        set("ovlidy", $('.Popup-material.y'));
                        if (n == 'xy') {
                            this.hcenter(get("ovlidxy"), n);
                        } else if (n == 'x') {
                            this.hcenter(get("ovlidx"), n);
                        } else if (n == 'y') {
                            this.hcenter(get("ovlidy"), n);
                        }
                    },
                    openlink: function () {
                        get("materimg").on('click', function () {
                            window.open(ops.doc)
                        })
                    },
                    scriptdo: function () {
                        var evil = function (fn) {
                            var Fn = Function;
                            return new Fn('return ' + fn)();
                        };
                        get("materimg").on('click', function () {
                            evil(ops.doc);
                        })
                    },
                    hide: function () {
                        var ovl = get("ovlid");
                        ovl.find(".Material-content").html("");
                        ovl.hide();
                        get("maskid").hide();
                    },
                    hcenter: function (obj, dir) {
                        var viewWidth = document.documentElement.clientWidth,
                            viewHeight = document.documentElement.clientHeight,
                            div = obj,
                            c = function (obj, dir) {
                                if (obj) {
                                    if (dir == 'xy') {
                                        obj.css({ top: (viewHeight - obj.outerHeight()) / 2, left: (viewWidth - obj.outerWidth()) / 2 });
                                    } else if (dir == 'x') {
                                        obj.css({ left: (viewWidth - obj.outerWidth()) / 2 });
                                    } else if (dir == 'y') {
                                        obj.css({ top: (viewHeight - obj.outerHeight()) / 2 });
                                    }
                                }
                            };
                        for (var i = 0, l = div.length; i < l; i++) {
                            c(div.eq(i),dir);
                        }
                    },
                    destory: function () {
                        get("ovlid").remove();
                        get("maskid").remove();
                    }
                }
                material.prototype.init();

            },
            closeAll: function () {
                $('.Popup-mask,.Popup-material').remove();
            }
        }
        window.material = material;
    }
})(window, jQuery);