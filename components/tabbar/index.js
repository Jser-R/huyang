// components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarData:[
      // {name:'UI作品',icon:'tabbar_01'},
      {name:'我的简历',icon:'tabbar_02'}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toView(e){
      const item = e.currentTarget.dataset.item;
      const pages = getCurrentPages(); //获取加载的页面
      const currentPage = pages[pages.length-1];//获取当前页面的对象
      // console.log(currentPage)
      let url = '';
      switch (item.name) {
        case "UI作品":
          url = '/pages/index/index';
          break;
        case "我的简历":
          url = '/pages/resumeDetail/index';
          break;
      }
      if('/'+currentPage.route !== url){
        wx.navigateTo({
          url:url
        });
      }
    }

  }
})
