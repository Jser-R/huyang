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
            { icon:'menu_01.png'},
            { icon: 'menu_02.png' },
            { icon: 'menu_03.png' },
            { icon: 'menu_04.png' },
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
