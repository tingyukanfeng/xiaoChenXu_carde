<script setup lang="ts">
import { ref } from 'vue'
const username = ref('2136101110')
const cause = ref('去医院')
</script>
<template>
  <view class="approval">
    <view class="card">
      <text>学号：{{ username }}</text>
      <br />
      <text>原因：{{ cause }}</text>
      <br />
      <button class="subbutton" style="margin-top: 10rpx; background-color: #c4e4e3; color: #fff">
        同意
      </button>
      <button
        class="subbutton"
        style="margin-top: 10rpx; margin-left: 20rpx; background-color: #d2f02b; color: #fff"
      >
        拒绝
      </button>
    </view>
  </view>
</template>
<style lang="scss">
.approval {
  margin: 10rpx;
}
.card {
  border: 1px solid #000;
  background-color: #fff;
  margin: 10px;
}
text {
  display: block;
  margin: 10px;
  font-size: 25px;
}
.subbutton {
  height: 80rpx;
  width: 150rpx;
  float: left;
}
</style>
