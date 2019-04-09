// component/menu/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    animationFlag: false,
    menuList: [
      {name: '工作经历', icon: 'menu_01.png'},
      {name: '项目经历', icon: 'menu_02.png'},
      {name: '平面设计', icon: 'menu_03.png'},
      {name: '个人简历', icon: 'menu_04.png'},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _toggleMenu() {
      const flag = this.data.animationFlag;
      if (flag) {
        this._hide()
      } else {
        this._show()
      }

    },
    _show() {
      this.setData({
        animationFlag: true
      });
    },
    _hide() {
      const _this = this;
      _this.setData({animationFlag: false});

    },
    _toView(e){
      const item = e.currentTarget.dataset.item;
      let  navIndex = 0;
      switch (item.name) {
        case '工作经历':
          navIndex = 0;
          break;
        case '项目经历':
          navIndex = 1;
          break;
        case '平面设计':
          navIndex = 2;
          break;
        case '个人简历':
          wx.navigateTo({
            url: '/pages/resumeDetail/index'
          });
          return;
      }
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];
      if(prevPage.route === 'pages/index/index'){
        //上一页是首页
        prevPage.setData({
          navIndex: navIndex,
          isFromDetail:true,
        });
        this._hide();
        //返回上一页
        wx.navigateBack({
          delta: 1,
        })
      }else {
        //上一页不是首页
        wx.navigateTo({
          url: '/pages/index/index?navIndex='+navIndex,
        });
      }

    }
  }
});
