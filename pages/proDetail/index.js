// pages/proDetail/index.js
const imgUrl = 'https://6465-dev-d6b769-1258442598.tcb.qcloud.la/images/work/包拯/pic_01.png?sign=7458be5b19956313a375e8aab9d8f4b5&t=1552542619'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images:[
            imgUrl,
            imgUrl,
            imgUrl,
            imgUrl,
        ],
        proDetail:{

            companyName:'真有两把刷子-包拯',
            position:'UX&高级视觉设计师',
            companyArr:[
                {key:'所属行业',value:'奢侈品'},
                {key:'公司规模',value:'499+'},
                {key:'所属部门',value:'技术研发部'},
            ],
            programArr:[
                {
                    hidden:false,
                    version:'2.2.0',
                    activeIndex:1,
                    images:[
                        imgUrl,
                        imgUrl,
                        imgUrl,
                        imgUrl,
                    ]
                },
                {
                    hidden:true,
                    version:'2.1.0',
                    activeIndex:1,
                    images:[
                        imgUrl,
                        imgUrl,
                        imgUrl,
                        imgUrl,
                    ]
                }
            ],
            workDetail:[
                '1.包拯项目后期的品牌修正和调整；' ,
                '2.包拯小程序2.1.0全部页面设计及2.2.0的迭代；' ,
                '3.包拯项目活动页及部分平面的设计；',
                '4.参与前期产品定位及框架搭建，后期产品上线的… 分析；',
                '5.定期组织设计团队内部的分享评论会，让一些年轻 设计师更好的把握设计技巧及公司的设计定位；',
                '6.协助CTO进行产品输出，配合技术完成开发；',
            ],
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    // 展开对应版本
    slideUpVersion(e){
        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const obj = 'proDetail.programArr[' +index+ '].hidden';
        if(item.hidden){
            this.setData({
                [obj]:false
            })
        }

    },
    //版本轮播图滚动效果
    versionScroll(e){
        const  {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} = e.detail;
        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const activeIndex = Math.floor(scrollLeft/180)+1;
        if(activeIndex!==item.activeIndex){
            const obj = 'proDetail.programArr.versions[' +index+ '].activeIndex';
            this.setData({
                [obj]:activeIndex
            })
        }

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
