// pages/workProgramDetail/index.js
const app =getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      id:"",
        imagesArr:[],
      projectList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onReady: function () {
      app.getProjectList().then(projectList =>{
        this.setData({
          projectList: projectList
        })
      });

    },
    onLoad: function (options) {
      this.setData({
        id:options.id
      });
        this.getProgramDetail(options.id)
    },
    //获取项目列表
    getProgramDetail(id){
        app.globalData.db.collection('project').doc(id).get().then(res => {
            this.setData({
                imagesArr:res.data.images
            })
        })
    },
    // 查看大图
    previewImage(e){
        const urls = this.data.imagesArr;
        const current = e.currentTarget.dataset.item;
        wx.previewImage({
            current:current,
            urls: urls
        })
    },
  toNewItem(e){
    wx.redirectTo({
      url: '/pages/projectDetail/index?id='+e.detail._id,
    })
  },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
