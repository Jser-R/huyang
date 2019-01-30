//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     QAList: [
         { Q: '1', drop:false, className:'one'},
         { Q: '2', drop: false, className: 'two'},
         { Q: '3', drop: false, className: 'three'} 
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
    }
})
