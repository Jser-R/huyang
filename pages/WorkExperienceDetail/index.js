// pages/WorkExperienceDetail/index.js
const app = getApp()
const IMAGE_INDEX = 'https://6465-dev-d6b769-1258442598.tcb.qcloud.la/images/';
const imgUrl = IMAGE_INDEX+'work/包拯/pic_01.png';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        workId:'',
        programId:'',
        WorkExperienceDetail:{},
        programDetail:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        this.getWorkDetail(options.id)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    //获取工作经验详情
    getWorkDetail(id){
        app.globalData.db.collection('work').doc(id).get().then(res => {
            console.log(res)
            this.setData({
                workId:res.data.workId,
                programId:res.data.programId,
                WorkExperienceDetail:res.data.WorkExperienceDetail
            });
            this.getProgramList(res.data.workId)
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
            url: '/pages/programDetail/index?id='+this.data.programId,
        })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
