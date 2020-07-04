// pages/cart/childCpns/w-cart-list-item/w-cart-list-item.js
const app = getApp()

Component({
  properties: {
    goods: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data: {

  },
  methods: {
    onCheckClick(e) {
      // 1.查找到对应的商品
      const goods = app.globalData.cartList.find(item => item.iid == this.properties.goods.iid)
      goods.checked = !goods.checked

      // 2.获取当前商品的index
      const index = e.currentTarget.dataset.index;

      // 3.回调
      // console.log(index)
      app.changeGoodsState(index, goods)
    }
  }
})
