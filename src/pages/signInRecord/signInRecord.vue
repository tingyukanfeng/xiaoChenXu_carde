<script setup lang="ts">
import { ref } from 'vue'
import { addSignInRecord, getAllrecord } from '@/services/signInRecord'
import * as Xlsx from 'xlsx'
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
  console.log(res)
  inputDialog.value.close()
}
//导出excel的
const enNameToCnName = {
  course_name: '课程名',
  username: '学号',
  state: '情况',
  date: '时间',
}
const loading = ref()
const outExcel = async () => {
  //   loading.value = true
  //   const res = await getAllrecord()
  //   let excelData = res.data.data.map((n: any) => {
  //     let newItem: never[] = []
  //     Object.keys(n).forEach((k) => {
  //       newItem[enNameToCnName[k]] = n[k]
  //     })
  //     return newItem
  //   })
  //   const xlsxObj = {
  //     SheetNames: ['sheet1'],
  //     Sheets: {
  //       ['sheet1']: Xlsx.utils.json_to_sheet(excelData),
  //     },
  //   }
  //   Xlsx.writeFile(xlsxObj, '积极分子信息表.xlsx')
  //   loading.value = false
}
</script>

<template>
  <view class="card">
    <uni-section title="输入框示例" type="line" padding>
      <button class="button" type="primary" @click="inputDialogToggle">
        <text class="button-text">添加迟到旷课记录</text>
      </button>
    </uni-section>
    <uni-section title="" type="line" padding>
      <button class="button" type="primary" @click="outExcel">
        <text class="button-text">导出excel</text>
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
