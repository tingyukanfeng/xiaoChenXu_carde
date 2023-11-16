<script setup lang="ts">
import { ref } from 'vue'

const formModel = ref({
  flag: 1,
  username: '',
  date: [],
  cause: '',
  state: 1,
})

const submitForm = () => {
  // 在这里可以处理表单提交逻辑，formModel 中包含了表单数据
  console.log('提交表单', formModel.value)
}
</script>

<template>
  <view class="card">
    <uni-forms label-position="top">
      <uni-forms-item label="学号">
        <uni-easyinput v-model="formModel.username" placeholder="请输入请假人学号" />
      </uni-forms-item>
      <uni-forms-item label="请假时间">
        <uni-datetime-picker
          v-model="formModel.date"
          type="datetimerange"
          hide-second
          rangeSeparator="至"
        />
      </uni-forms-item>
      <uni-forms-item label="请假原因">
        <uni-easyinput v-model="formModel.cause" type="textarea" placeholder="请输入请假原因" />
      </uni-forms-item>
      <button
        @tap="submitForm"
        class="subbutton"
        style="margin-top: 10px; background-color: #c4e4e3; color: #fff"
      >
        提交申请
      </button>
    </uni-forms>
  </view>
</template>

<style lang="scss">
.card {
  margin: 10px;
}
</style>
