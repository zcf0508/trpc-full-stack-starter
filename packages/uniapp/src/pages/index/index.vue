<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <hello-world :msg="title" />
    list: {{ user }}
    <view class="w-full px-3 box-border">
      <text>name: </text>
      <input v-model="nameInput" class="border border-solid" />
    </view>
    <view class="mt-1">
      <button @click="addUser">
        add
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello Uniapp');
import { getUserList, createUser } from '@/api/user';
import type { UserModel } from '!!/trpc/model/user';

const user = ref<UserModel[]>([]);

onBeforeMount(async () => {
  user.value = await getUserList();
});

const nameInput = ref('');

async function addUser() {
  if(nameInput.value.trim()!=='') {
    await createUser(nameInput.value.trim());
    user.value = await getUserList();
  }
}
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
