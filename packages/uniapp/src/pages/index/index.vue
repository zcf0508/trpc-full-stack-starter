<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <hello-world :msg="title" />
    {{ user }}
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello Uniapp');
import { getUserList } from '@/api/user';
import type { User } from '!!/trpc/db';

const user = ref<User[]>([]);

onBeforeMount(async () => {
  user.value = await getUserList();
});

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
