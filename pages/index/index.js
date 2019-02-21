//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     QAList: [
         { Q: '1', drop:false, className:'one'},
         { Q: '2', drop: false, className: 'two'},
         { Q: '3', drop: false, className: 'three'}
        ],
        proList: [
            { name: '陈真', introduce: '电商网站', img: 'pro_01.png' },
            { name: '陈真', introduce: '电商网站', img: 'pro_01.png' },
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
    toWorkDetail(){
        wx.showToast({
            title: '1',
        })
        // wx.showToast({
        //     title:'1111'
        // })
    }
})
