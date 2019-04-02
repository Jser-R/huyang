//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navIndex:0,
    nav:[
      {name:'工作经历'},
      {name:'项目经历'},
      {name:'平面设计'},
    ],
     QAList: [
         { Q: '1', drop:false, className:'one'},
         { Q: '2', drop: false, className: 'two'},
         { Q: '3', drop: false, className: 'three'}
        ],
      proList: [
        { name: '陈真弄潮儿小程序', introduce: 'UX：主要负责B端C端用户小程序、陈真商城及H5的界面 设计/迭代，参与初期产品设定', img: 'pro_01.png', time:'2016.11-2019.02' },
        { name: '陈真弄潮儿小程序', introduce: 'UX：主要负责B端C端用户小程序、陈真商城及H5的界面 设计/迭代，参与初期产品设定', img: 'pro_01.png', time: '2016.11-2019.02' },
      ]
  },

  onLoad: function () {

  },
    tap(e){
        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const key = 'QAList[' + index + '].drop';
        let arr = [...this.data.QAList];

        this.setData({
            [key]:true
        })

        setTimeout(()=>{
            arr.unshift(arr.splice(arr.length - 1, 1)[0]);
            arr.forEach(arrItem => {
                arrItem.drop = false
            })
            this.setData({
                QAList: arr
            })
        },500)
    },
    changeNav(e){
      const index = e.target.dataset.index;
      console.log(index)
      this.setData({
        navIndex: index
      })
    },
    toDetail(e){
        const item = e.target.dataset.item;
        wx.navigateTo({
            url: '/pages/WorkExperienceDetail/index',
        })
    },
    toWorkDetail(){
        wx.showToast({
            title: '1',
        })
        // wx.showToast({
        //     title:'1111'
        // })
    }
})
