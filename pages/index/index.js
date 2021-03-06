//index.js
//获取应用实例
const app = getApp();
// const navTop=0;
Page({
  data: {
    //是否从工作经历、项目经历、平面设计内跳转过来
    isFromDetail:false,
    navTop:0,
    navFixed:false,
    navIndex: 0,
    nav: [
      {name: '工作经历'},
      {name: '项目经历'},
      {name: '平面设计'},
    ],
    QAList: [
      {drop: false, className: ' one', pic: 'QA_1.png'},
      {drop: false, className: 'two', pic: 'QA_2.png'},
      {drop: false, className: 'three', pic: 'QA_3.png'},
      {drop: false, className: 'four', pic: 'QA_4.png'},
      {drop: false, className: 'five', pic: 'QA_5.png'},
    ],
    workList: [],
    projectList: [],
    designList: []
  },

  onLoad: function (options) {
    if(options.navIndex){
      this.setData({
        navIndex:Number(options.navIndex)
      })
    }

    app.getWorkList().then(workList => {
      this.setData({
        workList: workList
      })
    });
    app.getProjectList().then(projectList => {
      this.setData({
        projectList: projectList
      })
    });
    app.getDesignList().then(designList => {
      this.setData({
        designList: designList
      })
    });
  },
  onShow(){
    if(this.data.isFromDetail){
      wx.pageScrollTo({
        scrollTop: this.data.navTop,
        duration: 300
      })
    }
    if(!this.data.navTop){
      const _this=this;
      const query = wx.createSelectorQuery();
      query.select('#nav').boundingClientRect();
      query.exec( function (res){
        console.log(res,res[0].top);
        _this.setData({
          navTop: res[0].top
        });
      });
    }

  },
  onPageScroll: function (e) {
    if (e.scrollTop > this.data.navTop){
      this.setData({
        navFixed: true
      })
    }else {
      this.setData({
        navFixed: false
      })
    }
  },
  changeQA(e) {
    const index = e.currentTarget.dataset.index;
    const key = 'QAList[' + index + '].drop';
    let arr = [...this.data.QAList];
    this.setData({
      [key]: true
    });

    setTimeout(() => {
      arr.unshift(arr.splice(arr.length - 1, 1)[0]);
      arr.forEach(arrItem => {
        arrItem.drop = false
      });
      this.setData({
        QAList: arr
      });
    }, 500)
  },
  changeNav(e) {
    const index = e.target.dataset.index;
    wx.pageScrollTo({
      scrollTop: this.data.navTop,
      duration: 300
    })
    this.setData({
      navIndex: index
    })
  },
  toWorkExperienceDetail(e) {
    const item = e.currentTarget.dataset.item;
    this.resetIsFromDetail();
    wx.navigateTo({
      url: '/pages/workExperienceDetail/index?workId=' + item.workId,
    })
  },
  toProjectDetail(e) {
    const item = e.currentTarget.dataset.item;
    this.resetIsFromDetail();
    wx.navigateTo({
      url: '/pages/projectDetail/index?id=' + item._id,
    })
  },
  toDesignDetail(e) {
    const item = e.currentTarget.dataset.item;
    this.resetIsFromDetail();
    wx.navigateTo({
      url: '/pages/designDetail/index?id=' + item._id,
    })
  },
  resetIsFromDetail(){
    this.setData({
      // navFixed:false,
      isFromDetail:false
    })
  },
  onShareAppMessage(res) {
    return {
      title: '胡小胡的设计杂货铺'
    }
  }
})
