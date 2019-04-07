// component/menu/index.js
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
        animationFlag:false,
        menuList:[
            {name:'工作经历', icon:'menu_01.png' },
            {name:'项目经历', icon: 'menu_02.png' },
            {name:'平面设计', icon: 'menu_03.png' },
            {name:'个人简历', icon: 'menu_04.png' },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toggleMenu(){
          const flag = this.data.animationFlag
            if (flag){
                this.hide()
            }else{
                this.show()
            }

        },
        show() {
            this.setData({
                animationFlag: true
            });
        },
        hide() {
            const _this = this;
            _this.setData({ animationFlag: false });

        }

    }
})
