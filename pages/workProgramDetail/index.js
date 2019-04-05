// pages/workProgramDetail/index.js
const app =getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagesArr:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getProgramDetail(options.id)
    },
    //获取项目列表
    getProgramDetail(workId){
        app.globalData.db.collection('workProgramDetail').where({
            workId:workId
        }).get().then(res => {
            console.log(res)
            this.setData({
                imagesArr:res.data[0].images
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
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
