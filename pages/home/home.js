// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const TOP_DISTANCE = 1000;
const types = ['pop', 'new', 'sell']

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },
  onLoad: function (options) {
    // 1.请求轮播图以及推荐数据
    this._getMultiData()

    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  // ------------------- 网络请求函数 -------------------------
  _getMultiData() {
    getMultiData().then(res => {
      // 取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    // 1.获取页码
    const page = this.data.goods[type].page + 1;

    // 2.发送网络请求
    getGoodsData(type, page).then(res => {
      // 2.1.取出数据
      const list = res.data.data.list;

      // 2.2.将数据设置到对应type的list中
      // for (let item of list) {
      //   this.data.goods[type].list.push(item)
      // }
      const oldList = this.data.goods[type].list;
      oldList.push(...list)

      // 2.3.将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      // const 
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page 
      })
    })
  },

  // ------------------- 事件监听函数 -------------------------
  handleTabClick(event) {
    // 取出index
    const index = event.detail.index;

    // 设置currentType
    this.setData({
      currentType: types[index]
    })
  },

  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },

  onReachBottom() {
    // 上拉加载更多 -> 请求新的数据
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll(options) {
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;

    // 2.修改showBackTop属性
    // 官方: 不要再滚动的函数回调中频繁的调用this.setData
    const flagBackTop = scrollTop >= TOP_DISTANCE;
    if (flagBackTop != this.data.showBackTop) {
      this.setData({
        showBackTop: flagBackTop
      })
    }

    // 3.修改isTabFixed属性
    const flagTabFixed = scrollTop >= this.data.tabScrollTop
    if (flagTabFixed != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flagTabFixed
      })
    }
  }
})