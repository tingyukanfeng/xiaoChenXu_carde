<script setup lang="ts">
import { ref } from 'vue'
import { useMemberStore } from '@/stores'
import { CadreSchedule } from '@/services/Schedle'
const memberStore = useMemberStore()
const classtime = ref([
  { value: 0, text: '星期一' },
  { value: 1, text: '星期二' },
  { value: 3, text: '星期三' },
  { value: 4, text: '星期四' },
  { value: 5, text: '星期五' },
  { value: 6, text: '星期六' },
  { value: 7, text: '星期天' },
])
const inclasstime = ref([
  { value: '08:00', text: '8:00' },
  { value: '10:00', text: '10:00' },
  { value: '15:00', text: '15:00' },
  { value: '17:00', text: '17:00' },
  { value: '19:10', text: '19:10' },
])

const formData = ref({
  major: memberStore.profile?.major,
  courseName: '',
  time: '',
  weekday: '',
  number: '',
  people: '',
  classroom: '',
  teacher: '',
})
const summit = async () => {
  const res = await CadreSchedule(formData.value)
  if (res.message == 'success') {
    uni.showToast({
      title: '操作成功',
    })
  }
}
</script>
<template>
  <view class="card">
    <uni-forms label-position="top" ref="form" :modelValue="formData">
      <uni-forms-item label="专业" required>
        <uni-easyinput v-model="formData.major" placeholder="请输入专业" />
      </uni-forms-item>
      <uni-forms-item label="课程名" required>
        <uni-easyinput v-model="formData.courseName" placeholder="请输入课程名" />
      </uni-forms-item>
      <uni-forms-item label="星期几">
        <uni-data-select v-model="formData.weekday" :localdata="classtime"></uni-data-select>
      </uni-forms-item>
      <uni-forms-item label="上课时间" required>
        <uni-data-select v-model="formData.time" :localdata="inclasstime"></uni-data-select>
      </uni-forms-item>
      <uni-forms-item label="课程节数" required>
        <uni-easyinput v-model="formData.number" placeholder="请输入课程节数" />
      </uni-forms-item>
      <uni-forms-item label="上课人员" required>
        <uni-easyinput v-model="formData.people" placeholder="请选择上课人员" />
      </uni-forms-item>
      <uni-forms-item label="教室号" required>
        <uni-easyinput v-model="formData.classroom" placeholder="请输入课程节数" />
      </uni-forms-item>
      <uni-forms-item label="授课老师" required>
        <uni-easyinput v-model="formData.teacher" placeholder="请输入授课老师" />
      </uni-forms-item>
      <button
        class="subbutton"
        style="margin-top: 10px; background-color: #c4e4e3; color: #fff"
        @click="summit"
      >
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
