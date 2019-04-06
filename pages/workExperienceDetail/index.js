// pages/workExperienceDetail/index.js
const app = getApp()
const IMAGE_INDEX = 'https://6465-dev-d6b769-1258442598.tcb.qcloud.la/images/';
const imgUrl = IMAGE_INDEX+'work/包拯/pic_01.png';
Page({

    /**
     * 页面的初始数据
     */
    data: {
      id:'',
        workId:'',
        isOnline:false,
        WorkExperienceDetail:{},
        programDetail:[],
        workProgramImages:[],
      workList:[]
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      app.getWorkList().then(workList =>{
        this.setData({
          workList: workList
        })
      });

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options);
        this.setData({
            workId:options.workId,
        });
        this.getWorkDetail(options.workId);
        this.getProgramList(options.workId)
    },

    //获取工作经验详情
    getWorkDetail(workId){
        app.globalData.db.collection('work').where({
            workId:workId
        }).get().then(res => {
            // console.log(res);
            const data = res.data[0];
            console.log(data)
            this.setData({
              id:data._id,
                WorkExperienceDetail:data.WorkExperienceDetail,
                isOnline:data.isOnline
            });
            if(data.WorkExperienceDetail.programArr){
                // 需要展示项目内容

            }else {
                // 只展示项目图片
                this.getWorkProgramDetail(workId)
            }

        })
    },
    //获取项目列表
    getProgramList(workId){
        app.globalData.db.collection('workProgram').where({
            workId:workId
        }).get().then(res => {
            this.setData({
                programDetail:res.data,
            })
        })
    },
    // 获取项目图片
    getWorkProgramDetail(workId){
        app.globalData.db.collection('workProgramDetail').where({
            workId:workId
        }).get().then(res => {
            console.log(res)
            this.setData({
                workProgramImages:res.data[0].images
            })
        })
    },
    // 展开对应版本
    slideUpVersion(e){
        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const obj = 'WorkExperienceDetail.programArr[' +index+ '].hidden';
        if(item.hidden){
            this.setData({
                [obj]:false
            })
        }

    },
    //版本轮播图滚动效果
    versionScroll(e){
        const  {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} = e.detail;
        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const activeIndex = Math.floor(scrollLeft/180)+1;
        if(activeIndex!==item.activeIndex){
            const obj = 'WorkExperienceDetail.programArr[' +index+ '].activeIndex';
            this.setData({
                [obj]:activeIndex
            })
        }

    },
    //展示全部工作内容
    showWorkDetail(){
        this.setData({
            ['WorkExperienceDetail.hiddenWorkDetail']:false
        })
    },
    // 查看大图
    previewImage(e){
        const images = e.currentTarget.dataset.images;
        const imageIndex = e.currentTarget.dataset.imageIndex;
        const urls =  images.map(item => {return item.image});
        console.log(e.currentTarget.dataset)
        wx.previewImage({
            current:urls[imageIndex],
            urls: urls
        })
    },
    //展示项目详情
    showProgram(e){

        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const obj = 'programDetail[' +index+ '].hidden';
        this.setData({
            [obj]:!item.hidden
        })
    },
    toProgramDetail(){
        wx.navigateTo({
            url: '/pages/workProgramDetail/index?id='+this.data.workId,
        })
    },
    // 查看大图
    previewProgramImage(e){
        const urls = this.data.workProgramImages;
        const current = e.currentTarget.dataset.item;
        wx.previewImage({
            current:current,
            urls: urls
        })
    },
    toNewItem(e){
      wx.redirectTo({
        url: '/pages/workExperienceDetail/index?workId='+e.detail.workId,
      })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
