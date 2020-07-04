// pages/category/childCpns/w-menu/w-menu.js
Component({
  /**
   * Component properties
   */
  properties: {
    categories: {
      type: Array
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
    onItemClick(e) {
      // 1.修改当前的currentIndex
      const currentIndex = e.currentTarget.dataset.index;
      this.setData({
        currentIndex
      })

      // 2.将最新的currentIndex传递到分类页面
      this.triggerEvent('menuclick', {currentIndex}, {})
    }
  }
})
