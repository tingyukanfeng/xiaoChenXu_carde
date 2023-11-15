<script setup lang="ts"></script>
<template>
  <view class="card">
    <uni-forms label-position="top">
      <uni-forms-item label="专业" required>
        <uni-easyinput placeholder="请输入专业" />
      </uni-forms-item>
      <uni-forms-item label="课程名" required>
        <uni-easyinput placeholder="请输入课程名" />
      </uni-forms-item>
      <uni-forms-item label="上课时间" required>
        <uni-datetime-picker type="datetimerange" hide-second rangeSeparator="至" />
      </uni-forms-item>
      <uni-forms-item label="课程节数" required>
        <uni-easyinput placeholder="请输入课程节数" />
      </uni-forms-item>
      <uni-forms-item label="上课人员" required>
        <uni-easyinput placeholder="请选择上课人员" />
      </uni-forms-item>
      <uni-forms-item label="教室号" required>
        <uni-easyinput placeholder="请输入课程节数" />
      </uni-forms-item>
      <uni-forms-item label="授课老师" required>
        <uni-easyinput placeholder="请输入授课老师" />
      </uni-forms-item>
      <button class="subbutton" style="margin-top: 10px; background-color: #c4e4e3; color: #fff">
        提交
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
