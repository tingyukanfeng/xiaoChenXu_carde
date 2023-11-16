<script setup lang="ts">
import { ref } from 'vue'
import { cadreApproval } from '@/services/function'
import { onShow } from '@dcloudio/uni-app'
import type { Approval } from '@/types/home'

const rows = ref<Approval[]>([])
const getApproval = async () => {
  const res = await cadreApproval()
  console.log(res.data)
  rows.value = res.data.rows
}
onShow(() => {
  getApproval()
})
const onScrolltolower = () => {
  console.log('触底了')
}
</script>
<template>
  <scroll-view @scrolltolower="onScrolltolower" scroll-y>
    <view v-for="item in rows" :key="item.id" class="card">
      <p>学号: {{ item.username }}</p>
      <p>原因: {{ item.cause }}</p>
      <p>时间：{{ item.data }}</p>
      <view class="button-container">
        <button class="subbutton" style="margin-top: 10px; background-color: #c4e4e3; color: #fff">
          同意
        </button>
        <button
          class="subbutton"
          style="margin-top: 10px; background-color: rgb(201, 231, 145); color: #fff"
        >
          拒绝
        </button>
      </view>
    </view>
  </scroll-view>
</template>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
}
.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.subbutton {
  width: 48%; /* 可根据实际情况调整按钮宽度 */
  box-sizing: border-box; /* 防止按钮宽度超过设置的百分比 */
}
</style>
