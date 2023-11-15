<script setup lang="ts"></script>
<template>
  <view class="card">
    <uni-forms label-position="top">
      <uni-forms-item label="姓名" required>
        <uni-easyinput placeholder="请输入姓名" />
      </uni-forms-item>
      <uni-forms-item label="学号">
        <uni-easyinput placeholder="请输入请假人学号" />
      </uni-forms-item>
      <uni-forms-item label="请假时间">
        <uni-datetime-picker type="datetimerange" hide-second rangeSeparator="至" />
      </uni-forms-item>
      <uni-forms-item label="请假原因">
        <uni-easyinput type="textarea" placeholder="请输入请假原因" />
      </uni-forms-item>
      <button class="subbutton" style="margin-top: 10px; background-color: #c4e4e3; color: #fff">
        提交申请
      </button>
    </uni-forms>
  </view>
</template>
<style lang="scss">
.card {
  margin: 10px;
}
//
</style>
