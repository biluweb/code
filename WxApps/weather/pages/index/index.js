//index.js
//获取应用实例
Page({
  data:{
    city:"",
    today:{},
    future:{},
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.loadInfo();
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  loadInfo:function(d){
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 10000
    })
    var _this=this;
    wx.getLocation({//微信 获取经纬坐标
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        // console.log(latitude,longitude)
        _this.loadCity(latitude,longitude,d)
      }
    })
  },
  loadCity:function(latitude,longitude,d){
    var _this=this;
     wx.request({//微信请求百度接口，返回城市
      url: 'http://api.map.baidu.com/geocoder/v2/?ak=D6WOzHaymzVVKvgiy8UbhQEznkgeK6BD&location='+latitude+','+longitude+'&output=json',
      success: function(res) {
        var city = res.data.result.addressComponent.city;
           city=city.replace("市","");
        // console.log(city,typeof(city))
        _this.loadWeather(city,d)
      }
    })
  },
  loadWeather:function(city,d){
    var _this=this;
    wx.request({//微信请求天气接口，返回天气信息
      url: 'http://wthrcdn.etouch.cn/weather_mini?city='+city+'',
      success: function(res) { 
        var fore=res.data.data.forecast;
        fore.shift();
        // console.log(res.data.data,res.data.data.forecast[0],fore)
        _this.setData({today:res.data.data,city:city,future:fore})
        if(d){
          wx.showToast({
            title: '刷新完成',
            icon: 'success',
            duration: 1000
        });
          return;
        }
        wx.hideToast()
      }
    })
  },
  reload:function(){
    this.loadInfo('d');
  }
})
