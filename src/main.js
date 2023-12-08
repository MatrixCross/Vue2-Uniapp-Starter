import Vue from 'vue'
import uView from 'uview-ui'
import App from './App.vue'
import store from '@/store'
import setupHttp from '@/common/request'

Vue.use(uView)
Vue.config.productionTip = false
uni.$u.config.unit = 'rpx'
App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})

setupHttp(app)
app.$mount()
