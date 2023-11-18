<script setup lang="ts">
import { ref } from 'vue'
import { addSignInRecord } from '@/services/signInRecord'
const inputDialog = ref() // 弹出框的引用
const formModel = ref({
  course_id: '',
  username: '',
  state: '',
  date: '',
})

const inputDialogToggle = () => {
  inputDialog.value.open()
}

const inputDialogConfirm = async () => {
  console.log(formModel.value)
  // 关闭窗口后，恢复默认内容
  const res = await addSignInRecord(formModel.value)
  inputDialog.value.close()
}
</script>

<template>
  <view class="card">
    <uni-section title="输入框示例" type="line" padding>
      <button class="button" type="primary" @click="inputDialogToggle">
        <text class="button-text">添加迟到旷课记录</text>
      </button>
    </uni-section>

    <!-- 输入框示例 -->
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog ref="inputClose" title="输入内容" @confirm="inputDialogConfirm">
        <view class="input-row">
          <uni-easyinput v-model="formModel.course_id" placeholder="请输入课程号"></uni-easyinput>
          <uni-easyinput v-model="formModel.username" placeholder="请输入学号"></uni-easyinput>
          <uni-easyinput v-model="formModel.state" placeholder="请输入签到状态"></uni-easyinput>
          <uni-datetime-picker
            v-model="formModel.date"
            type="datetime"
            placeholder="请选择日期"
          ></uni-datetime-picker>
        </view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<style scoped>
.input-row {
  margin-bottom: 15px; /* 调整行与行之间的间距 */
}
.popup-content {
  padding: 20px;
  background-color: #fff;
}
</style>
