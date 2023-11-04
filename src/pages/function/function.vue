<script setup lang="ts">
import { getApprovalNumberAPI } from '@/services/function'
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// tabs 数据
const orderTabs = ref([
  { orderState: 0, title: '正规请假' },
  { orderState: 1, title: '想请个假' },
])
//高亮
const activeIndex = ref(0)

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

//非正规请假列表
const time = ref(0)
const classtime = ref([
  { value: 0, text: '早八' },
  { value: 1, text: '早十' },
  { value: 2, text: '下三' },
  { value: 2, text: '下五' },
])
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
    <!-- tabs -->

    <!-- 滑动容器 -->
    <swiper class="swiper" :current="activeIndex" @change="activeIndex = $event.detail.current">
      <!-- 滑动项 -->
      <swiper-item>
        <!-- 正规请假列表 -->
        <scroll-view scroll-y class="orders">
          <view class="card">
            <view class="status">
              <text>填个表吧</text>
            </view>
            <view class="divider" />
            <uni-forms label-position="top">
              <uni-forms-item label="请假时间">
                <uni-datetime-picker type="datetimerange" hide-second rangeSeparator="至" />
              </uni-forms-item>
              <uni-forms-item label="请假原因">
                <uni-easyinput type="textarea" placeholder="请输入请假原因" />
              </uni-forms-item>
              <uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
              <button
                class="subbutton"
                style="margin-top: 10px; background-color: #c4e4e3; color: #fff"
              >
                提交申请
              </button>
            </uni-forms>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

// tabs
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  background-color: #fff;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;

  .item {
    flex: 1;
    text-align: center;
    padding: 20rpx;
    font-size: 28rpx;
    color: #262626;
  }

  .cursor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 6rpx;
    padding: 0 50rpx;
    background-color: #c4e4e3;
    /* 过渡效果 */
    transition: all 0.4s;
  }
}

// swiper
.swiper {
  background-color: #f7f7f8;
}

// 订单列表
.orders {
  .card {
    min-height: 100rpx;
    padding: 20rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: #fff;

    &:last-child {
      padding-bottom: 40rpx;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 37rpx;
    margin-bottom: 15rpx;

    .date {
      color: #666;
      flex: 1;
    }

    .primary {
      color: #ff9240;
    }

    .icon-delete {
      line-height: 1;
      margin-left: 10rpx;
      padding-left: 10rpx;
      border-left: 1rpx solid #e3e3e3;
    }
  }

  .divider {
    background: #eee;
    width: 100%;
    height: 1rpx;
    margin: 10px 0px;
  }

  .goods {
    display: flex;
    margin-bottom: 20rpx;

    .cover {
      width: 170rpx;
      height: 170rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      position: relative;
    }

    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1;
      padding: 6rpx 4rpx 6rpx 8rpx;
      font-size: 24rpx;
      color: #fff;
      border-radius: 10rpx 0 0 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #444;
    }

    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 10rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .more {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      color: #333;
    }
  }

  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    padding: 20rpx 0;
    text-align: right;
    color: #999;
    font-size: 28rpx;
    border-bottom: 1rpx solid #eee;

    .quantity {
      font-size: 24rpx;
      margin-right: 16rpx;
    }

    .amount {
      color: #444;
      margin-left: 6rpx;
    }

    .symbol {
      font-size: 20rpx;
    }
  }

  .action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20rpx;

    .button {
      width: 180rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20rpx;
      border-radius: 60rpx;
      border: 1rpx solid #ccc;
      font-size: 26rpx;
      color: #444;
    }

    .secondary {
      color: #27ba9b;
      border-color: #27ba9b;
    }

    .primary {
      color: #fff;
      background-color: #27ba9b;
    }
  }

  .loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
  }
}
</style>
