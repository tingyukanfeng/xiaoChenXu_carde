<script setup lang="ts">
import { ref } from 'vue'
import { useMemberStore } from '@/stores'
// import { useMemberStore } from '@/stores/modules/member'
import { CadreLogin } from '@/services/function'
import type { LoginResult } from '@/types/member'

const formData = ref({
  username: '',
  password: '',
})
const memberStore = useMemberStore()
const cadreLogin = async () => {
  const res = await CadreLogin(formData.value)

  if (res.message == '账号或密码错误') {
    uni.showToast({
      icon: 'error',
      title: res.message,
    })
  }

  if (res.message == 'success') {
    uni.showToast({
      title: '登录成功',
    })
    memberStore.setProfile(res.data as LoginResult)
    uni.switchTab({ url: '/pages/record/record' })
  }

  console.log(res)
}
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image src="../../static/images/logo_icon2.png"></image>
    </view>
    <view class="login">
      <!-- 网页端表单登录 -->
      <uni-forms ref="form" :modelValue="formData">
        <uni-forms-item name="username">
          <uni-easyinput
            type="text"
            v-model="formData.username"
            prefixIcon="person"
            placeholder="请输入账号"
          />
        </uni-forms-item>
        <uni-forms-item name="password">
          <uni-easyinput
            type="password"
            prefixIcon="locked"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </uni-forms-item>
      </uni-forms>
      <button class="button phone" @click="cadreLogin">登录</button>

      <view class="tips">登录即视为你同意《服务条款》和《软工请假隐私协议》</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;
  image {
    width: 375rpx;
    height: 157rpx;
    margin-top: 20vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 55vh;
  padding: 0rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 12rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    // border-radius: 72rpx;
    color: #fff;
    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #c4e4e3;
  }

  .wechat {
    background-color: #06c05f;
  }

  .extra {
    flex: 1;
    padding: 70rpx 70rpx 0;
    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid #ddd;
      font-size: 26rpx;
      color: #999;
      position: relative;
      text {
        transform: translate(-40%);
        background-color: #fff;
        position: absolute;
        top: -12rpx;
        left: 50%;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;
      button {
        padding: 0;
        background-color: transparent;
      }
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }
    .icon-weixin::before {
      border-color: #06c05f;
      color: #06c05f;
    }
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;
}
</style>
