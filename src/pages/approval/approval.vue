<script setup lang="ts">
import { ref } from 'vue'
import { cadreApproval } from '@/services/function'
import { onShow } from '@dcloudio/uni-app'
const getApproval = async () => {
  const res = await cadreApproval()
  console.log(res)
}
onShow(() => {
  getApproval()
})
</script>
<template>
  <view class="approval"> </view>
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
