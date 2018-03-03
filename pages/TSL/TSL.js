// pages/TSL/TSL.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    var myUtil = require('../../utils/md5.js');
    var appid = '20180214000122664';
    var key = 'EcN1ABdl71i94xAO4alO';
    var salt = (new Date).getTime();
    var query = 'apple';
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var _from = 'en';
    var to = 'zh';
    var str1 = appid + query + salt + key;
    var sign = myUtil.hexMD5(str1);
    var that = this;
    console.log('开始');
    wx.request({
      //url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
      url:'https://fanyi-api.baidu.com/api/trans/vip/translate',
      //url: 'http://localhost/index.php',
      type: 'get',
      dataType: 'jsonp',
      data: {
        q: query,
        appid: appid,
        salt: salt,
        from: _from,
        to: to,
        sign: sign
      },
      success: function (data) {
        console.log('成功');
        that.setData({ msg: data.data }); 
      },
      fail: function (res) {
        console.log('失败')
      }
    });
    console.log('结束');
  },

  onLoad2: function (options) {
    console.log('开始')
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: '',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ msg: res });
        console.log('成功');
      },

      fail: function (res) {
        console.log('失败')

      }
    })
    console.log('结束')
  },
  onLoad3: function (options) {
    console.log('onLoad')
    wx.connectSocket({
      url: 'ws://localhost'
    })

    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！')

      wx.sendSocketMessage({
        data: 'Hello,World:' + Math.round(Math.random() * 0xFFFFFF).toString(),
      })
    })

    wx.onSocketMessage(function (res) {
      console.log(res)
    })

    wx.onSocketClose(function (res) {
      console.log('WebSocket连接已关闭！')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})