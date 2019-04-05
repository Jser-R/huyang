//index.js
//获取应用实例
const app = getApp()
const IMAGE_INDEX = 'https://6465-dev-d6b769-1258442598.tcb.qcloud.la/images/';
const imgUrl = IMAGE_INDEX+'work/包拯/pic_01.png';
Page({
  data: {
    navIndex:0,
    nav:[
      {name:'工作经历'},
      {name:'项目经历'},
      {name:'平面设计'},
    ],
     QAList: [
         { drop: false, className:' one',pic:'QA_1.png'},
         { drop: false, className: 'two',pic:'QA_2.png'},
         { drop: false, className: 'three',pic:'QA_3.png'},
         { drop: false, className: 'four',pic:'QA_4.png'},
         { drop: false, className: 'five',pic:'QA_5.png'},
        ],
    workList: [],
    projectList:[]
  },

  onLoad: function () {
    this.getWorkList();
    this.getProjectList()
  },
  // 获取工作经历列表
  getWorkList(){
    app.globalData.db.collection('work').get().then(res => {
      this.setData({
        workList: res.data
      })
    })
  },
  // 获取项目经历列表
  getProjectList(){
    app.globalData.db.collection('project').get().then(res => {
      console.log(res);
      this.setData({
        projectList: res.data
      })
    })
  },
  changeQA(e){
        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const key = 'QAList[' + index + '].drop';
        let arr = [...this.data.QAList];
        this.setData({
            [key]:true
        });

        setTimeout(()=>{
          arr.unshift(arr.splice(arr.length - 1, 1)[0]);
          arr.forEach(arrItem => {
            arrItem.drop = false
          });
          this.setData({
            QAList:arr
            // ['QAList[0].drop']:false
          });
          console.table(arr)
          // this.data.QAList[0].drop = false
            // console.table(arr)
            // this.setData({
            //     QAList: arr
            // })
        },1000)
    },
  changeNav(e){
    const index = e.target.dataset.index;
    this.setData({
      navIndex: index
    })
  },
  toWorkExperienceDetail(e){
      const item = e.currentTarget.dataset.item;
      wx.navigateTo({
          url: '/pages/workExperienceDetail/index?workId='+item.workId,
      })
  },
  toProjectDetail(e){
    const item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/projectDetail/index?id='+item._id,
    })
  }
})
