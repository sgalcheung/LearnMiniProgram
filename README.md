# 学习小程序开发

*[from bilibili](https://www.bilibili.com/video/BV1Kt411V7rg) [github:repo](https://github.com/coderwhy/LearnMiniProgram)*

### 课程大纲

![课程大纲](https://s1.ax1x.com/2020/07/18/Ug5JXj.png)

### 总结

* 通过逐步拆分讲解一个页面的构成，包括三个文件wxml，wxss，js，json，分别对应web前端html，css，js，其中json表示配置数据
* app.json是全局配置，app.wxss全局样式，app.js中App({})实例方法，整个小程序只有一个App实例，可以通过getApp()方法获取
* WXS（WeiXin Script）是小程序的一套脚本语言，和js是不同的语言，和js代码是隔离的，ios上运行速度更快
* 事件是视图层到逻辑层的通讯方式，通过在组件上绑定一个事件处理函数，在wxs中定义函数，某些类型的事件会冒泡
* 微信官方封装了一个API，可以方便的调用微信提供的功能，比如扫一扫，发送http请求
* 实战项目老师提供了收费的api接口，可以添加老师wx获取，实现了简单的页面展示和加入购物车功能

### 项目展示

<img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfqhdfj30u01szafo.jpg"  width="200px"/><img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfsqusj30u01sztet.jpg" width="200px"/><img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfwmc3j30u01szq7q.jpg" width="200px"/><img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfraclj30u01szq77.jpg" width="200px"/>


<img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfm80cj30u01szgnw.jpg" width="200px"/><img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfta9tj30u01szwjh.jpg" width="200px"/><img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfu77zj30u01szdip.jpg" width="200px"/><img src="http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfyvkuj30u01szahe.jpg" width="200px"/>

