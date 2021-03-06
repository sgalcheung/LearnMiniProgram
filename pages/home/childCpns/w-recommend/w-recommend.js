// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * Component properties
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * Component initial data
   */
  data: {
    isLoad: false
  },

  /**
   * Component methods
   */
  methods: {
    handleImageLoad() {
      if (!this.data.isLoad) {
        this.triggerEvent('imageload')
        this.data.isLoad = true
      }
    }
  }
})
