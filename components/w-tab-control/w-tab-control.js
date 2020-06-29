// components/w-tab-control/w-tab-control.js
Component({
  /**
   * Component properties
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * Component initial data
   */
  data: {
    currentIndex: 0
  },

  /**
   * Component methods
   */
  methods: {
    handleItemClick(event) {
      // 1.取出index
      const index = event.currentTarget.dataset.index;

      // 2.修改currentIndex
      this.setData({
        currentIndex: index
      })

      // 3.通知页面内部的点击事件
      this.triggerEvent("itemclick", {index, title: this.properties.titles[index]}, {})
    }
  }
})
