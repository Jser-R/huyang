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
        isShowMask:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toggleMenu(){
            const flag = !this.data.isShowMask
            this.setData({
                isShowMask: flag
            })
        }

    }
})
