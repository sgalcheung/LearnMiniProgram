// components/w-goods-item/w-goods-item.js
Component({
  /**
   * Component properties
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    itemClick() {
      // console.log(this.data.item)
      // 1.获取iid
      const iid = this.data.item.iid || this.data.item_id;

      // 2.跳转到对应的路径
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  }
})
