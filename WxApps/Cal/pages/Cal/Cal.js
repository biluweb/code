Page({
  data:{
    id1:'back',
    id2:'clear',
    id3:'negative',
    id4:'+',
    id5:'7',
    id6:'8',
    id7:'9',
    id8:'-',
    id9:'4',
    id10:'5',
    id11:'6',
    id12:'×',
    id13:'1',
    id14:'2',
    id15:'3',
    id16:'÷',
    id17:'0',
    id18:'.',
    id19:'history',
    id20:'=',
    screenData:'0',
    lastIsoperator:false,
    arr:[],
    logs:[]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    //String2
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   // String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    //String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    //String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   //String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
   // String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
   // String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  tapbtn:function(e){
      var id=e.target.id;
      switch(id){
        case this.data.id1://back
          var data=this.data.screenData
          if(data==0){
            return;
          }
          data=data.substring(0,data.length-1);
          if(data==''||data=='-'){
            data=0;
          }
          this.setData({screenData:data})
          this.data.arr.pop()
          break;
        case this.data.id2://clear
          this.setData({screenData:0})
          this.data.arr.length=0
          wx.removeStorageSync('course')
          break;
        case this.data.id3://negative
          var data=this.data.screenData,
              b=this.pom(data);
          if(b) this.setData({screenData:b.toString()})
          break;
        case this.data.id19://histroy
          //this.setData({screenData:Number(str)+Number()})
          wx.navigateTo({
            url: '../list/list'
          })
          break;
        case this.data.id20://=
          var data=this.data.screenData,
              lastword;
              
              if(data==0){
                return;
              }
              lastword=data.substring(data.length-1,data.length);
              if(isNaN(lastword)){
                return;
              }
              var num='',
                  lastoperator,
                  arr=this.data.arr,
                  optarr=[];
              
              for(var i in arr){
                if(isNaN(arr[i])==false||arr[i]==this.data.id18||arr[i]==this.data.id3){
                  num+=arr[i];
                }else{
                  lastoperator=arr[i];
                  optarr.push(num);
                  optarr.push(arr[i]);
                  num='';
                }
                console.log(arr[i])
              }
              optarr.push(Number(num));
              var result=Number(optarr[0])*1.0;
              console.log(optarr,result)

              for(var i=0,l=optarr.length;i<l;i++){
                if(isNaN(optarr[i])){
                  switch(optarr[i]){
                      case this.data.id4://+
                        result+=Number(optarr[i+1]);
                        console.log(optarr,result);
                        break;
                      case this.data.id8://-
                        result-=Number(optarr[i+1]);
                        console.log(optarr,result);
                        break;
                      case this.data.id12://*
                        result*=Number(optarr[i+1]);
                        console.log(optarr,result);
                        break;
                      case this.data.id16://÷
                        result/=Number(optarr[i+1]);
                        console.log(optarr,result);
                        break;
                  }
                }
              }
              
              console.log(data,result)
              this.data.logs.push(data+'='+result)
              wx.setStorageSync('course',this.data.logs);
              this.data.arr.length=0;
              this.data.arr.push(result);
              this.setData({screenData:result+''});
              // b=this.evil(data);
              // this.setData({screenData:b});
            break;
        default :
          
          if(id==this.data.id4||id==this.data.id8||id==this.data.id12||id==this.data.id16){
            if(this.data.lastIsoperator==true||this.data.screenData==0){
              return;
            }
          }
          var data=this.data.screenData,
              sd;
          if(data==0){
            sd=id;
          }else{
            sd=data+id;
          }
          this.setData({screenData:sd})
          this.data.arr.push(id)
          console.log(this.data.arr)

          if(id==this.data.id4||id==this.data.id8||id==this.data.id12||id==this.data.id16){
            this.setData({lastIsoperator:true})
          }else{
            this.setData({lastIsoperator:false})
          }
      }
  },
  pom:function(i){
    if(!i){
      return;
    }
    var firstword=i.substring(0,1),
        data=this.data.screenData;
    if(data==0){
      return;
    }
    if(firstword=='-'){
       this.data.arr.shift();
    }else{
       this.data.arr.unshift('-');
    }
    return -i;
  }
})