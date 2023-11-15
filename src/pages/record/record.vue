<script setup lang="ts">
import { getApprovalNumberAPI } from '@/services/function'
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
// import '../../static/css/global.css'
//获取当前年月日
var now = new Date()
var year = now.getFullYear() //得到年份
var month = now.getMonth() + 1 //得到月份
var date = now.getDate() //得到日期
var data = year + '年' + month + '月' + date + '日'
//人数
const number = ref()

const getApprovalNumberData = async () => {
  const res = await getApprovalNumberAPI()
  number.value = res.data
}
onShow(() => {
  getApprovalNumberData()
})
</script>

<template>
  <view class="viewport">
    <uni-notice-bar
      single
      color="white"
      background-color="#c4e4e3"
      show-icon
      :text="data + '当前请假人数共' + number + '人'"
    />
  </view>
  <view class="function">
    <navigator url="/pages/function/function" open-type="navigate" hover-class="navigator-hover">
      <text>请假</text>
    </navigator>
    <navigator url="/pages/approval/approval" open-type="navigate" hover-class="navigator-hover">
      审批
    </navigator>
    <navigator url="/pages/fakeNotes/fakeNotes" open-type="navigate" hover-class="navigator-hover">
      录假条
    </navigator>
    <navigator url="/pages/Schedule/Schedule" open-type="navigate" hover-class="navigator-hover">
      录课表
    </navigator>
    <navigator url="/pages/signIn/signIn" open-type="navigate" hover-class="navigator-hover">
      开定位
    </navigator>
    <navigator
      url="/pages/guideTables/guideTables"
      open-type="navigate"
      hover-class="navigator-hover"
    >
      导表
    </navigator>
  </view>
</template>

<style lang="scss">
.function {
  padding: 20px;
  float: left;
}
</style>
