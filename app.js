//app.js
// import requestDB from '/utils/requestDB'
App({
  onLaunch: function () {
    wx.cloud.init({
        traceUser:true
    });
  },
  requestDB(params){
    const db = wx.cloud.database();
    return new Promise(resolve => {
      wx.showLoading();
      switch (params.type) {
        case 'doc':
          db.collection(params.collectionName).doc(params.id).get()
            .then(res => {
              wx.hideLoading();
              resolve(res.data)
            });
          break;
        default:
          db.collection(params.collectionName).where(params.data || {}).get()
            .then(res => {
              wx.hideLoading();
              resolve(res.data)
            })
      }

    })
  },
// 获取工作经历列表
  getWorkList(){
    return new Promise(resolve => {
      if(this.workList){
        resolve( this.workList)
      }else {
        this.requestDB({
          collectionName:'work'
        }).then(res =>{
          this.workList = res;
          resolve(res)
        })
      }
    })
  },
  //获取项目经历列表
  getProjectList(){
    return new Promise(resolve => {
      if(this.projectList){
        resolve( this.projectList)
      }else {
        this.requestDB({
          collectionName:'project'
        }).then(res =>{
          this.projectList = res;
          resolve(res)
        })
      }
    })
  },
  //获取项目经历列表
  getDesignList(){
    return new Promise(resolve => {
      if(this.designList){
        resolve( this.designList)
      }else {
        this.requestDB({
          collectionName:'graphicDesign'
        }).then(res =>{
          this.designList = res;
          resolve(res)
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    workList:null,
    projectList:null,
    designList:null,
  }
})
