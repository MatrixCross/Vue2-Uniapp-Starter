<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="mt-8rpx">
      <text class="title">{{ title }}</text>
    </view>
    <u-button @click="testApi">测试http请求</u-button>
    <view class="mt-8rpx">用户信息: {{ JSON.stringify(userInfo) }}</view>
  </view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { helloApi } from '@/apis/example'

export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
  },
  onLoad() {},
  methods: {
    ...mapMutations('user', ['setUserInfo']),
    async testApi() {
      const res = await helloApi()
      console.log(res)
      this.setUserInfo({
        name: res.data.name,
      })
    },
  },
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
