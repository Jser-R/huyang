// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const db = wx.cloud.database()
    db.collection('work').where({
        publishInfo: {
            country: 'United States'
        }
    }).get({
        success(res) {
            // 输出 [{ "title": "The Catcher in the Rye", ... }]
            console.log(res)
        }
    })
    const wxContext = cloud.getWXContext()

    return {
        event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}