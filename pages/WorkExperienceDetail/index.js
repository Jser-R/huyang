// pages/WorkExperienceDetail/index.js
const IMAGE_INDEX = 'https://6465-dev-d6b769-1258442598.tcb.qcloud.la/images/';
const imgUrl = IMAGE_INDEX+'work/包拯/pic_01.png';
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
        WorkExperienceDetail:{
            logo:IMAGE_INDEX+'work/包拯/logo.png',
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
                        IMAGE_INDEX+'work/包拯/front_img2.2.1.png',
                        IMAGE_INDEX+'work/包拯/front_img2.2.2.png',
                        IMAGE_INDEX+'work/包拯/front_img2.2.3.png',
                    ]
                },
            ],
            workDetail:'<div class="">1.包拯项目后期的品牌修正和调整；<br>2.包拯小程序2.1.0全部页面设计及2.2.0的迭代；<br>3.包拯项目活动页及部分平面的设计；<br>' +
                '4.参与前期产品定位及框架搭建，后期产品上线的分析；<br>5.定期组织设计团队内部的分享评论会，让一些年轻 设计师更好的把握设计技巧及公司的设计定位；<br>' +
                '6.协助CTO进行产品输出，配合技术完成开发；</div>',
            hiddenWorkDetail:true,
            mainImagePath:IMAGE_INDEX+'work/包拯/banner.png'
        },
        programDetail:[
            {
                version:'2.2.0',
                name:'包拯2.2.0',
                hidden:false,
                moduleImages:[
                    {title:'首页',image:IMAGE_INDEX+'work/包拯/model_img2.2.1.png'},
                    {title:'案例',image:IMAGE_INDEX+'work/包拯/model_img2.2.2.png'},
                    {title:'订单',image:IMAGE_INDEX+'work/包拯/model_img2.2.3.png'},
                    {title:'我的',image:IMAGE_INDEX+'work/包拯/model_img2.2.4.png'},
                ],
                sketchImage:IMAGE_INDEX+'work/包拯/sketch2.2.1.png'
            },
            {
                version:'2.1.0',
                name:'包拯2.1.0',
                hidden:true,
                moduleImages:[
                    {title:'首页',image:IMAGE_INDEX+'work/包拯/model_img2.1.1.png'},
                    {title:'案例',image:IMAGE_INDEX+'work/包拯/model_img2.1.2.png'},
                    {title:'订单',image:IMAGE_INDEX+'work/包拯/model_img2.1.3.png'},
                    {title:'我的',image:IMAGE_INDEX+'work/包拯/model_img2.1.4.png'},
                ],
                sketchImage:IMAGE_INDEX+'work/包拯/sketch2.1.1.png'
            }
        ]

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
        const obj = 'WorkExperienceDetail.programArr[' +index+ '].hidden';
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
            const obj = 'WorkExperienceDetail.programArr[' +index+ '].activeIndex';
            this.setData({
                [obj]:activeIndex
            })
        }

    },
    //展示全部工作内容
    showWorkDetail(){
        this.setData({
            ['WorkExperienceDetail.hiddenWorkDetail']:false
        })
    },
    // 查看大图
    previewImage(e){
        const images = e.currentTarget.dataset.images;
        const imageIndex = e.currentTarget.dataset.imageIndex;
        const urls =  images.map(item => {return item.image});
        console.log(e.currentTarget.dataset)
        wx.previewImage({
            current:urls[imageIndex],
            urls: urls
        })
    },
    //展示项目详情
    showProgram(e){
        const item = e.target.dataset.item;
        const index = e.target.dataset.index;
        const obj = 'programDetail[' +index+ '].hidden';
        this.setData({
            [obj]:!item.hidden
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})