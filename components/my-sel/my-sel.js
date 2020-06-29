// components/my-sel/my-sel.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    counter: 0
  },

  /**
   * Component methods
   */
  methods: {
    incrementCounter(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
