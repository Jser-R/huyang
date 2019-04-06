// components/otherProject/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    list:{
      type:Array,
      value:[]
    },
    itemId:{
      type:String,
      value: ''
    }
  },
  ready(){

  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toNewItem(e){
      this.triggerEvent('toNewItem',e.currentTarget.dataset.item)
    },
    // 跳转下一个
    toNextItem(){
      let index = 0,list = [...this.data.list];
      for(let i in list){
        if(list[i]._id === this.data.itemId){
          index = i;
          break
        }
      }
      if(Number(index) === list.length-1){
        // 最后一个
        index = 0
      }else {
        index++
      }
      this.triggerEvent('toNewItem',list[index])
    }

  }
});
