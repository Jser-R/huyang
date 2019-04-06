//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
        traceUser:true
    })
    this.globalData.db = wx.cloud.database()
  },
  // 获取工作经历列表
  getWorkList(){
    return new Promise(resolve => {
      if(this.workList){
        resolve( this.workList)
      }else {
        this.globalData.db.collection('work').get().then(res => {
          this.workList = res.data
          resolve(res.data)
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
        this.globalData.db.collection('project').get().then(res => {
          this.projectList = res.data;
          resolve(res.data)
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
        this.globalData.db.collection('graphicDesign').get().then(res => {
          this.designList = res.data;
          resolve(res.data)
        })
      }
    })
  },
  globalData: {
    db:null,
    userInfo: null,
    workList:null,
    projectList:null,
    designList:null,
  }
})
