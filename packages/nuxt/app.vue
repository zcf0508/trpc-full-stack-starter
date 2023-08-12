<template>
  <div>
    list: {{ user }}
  </div>
  <div>
    <label for="name_input">
      <span>name: </span>
      <input id="name_input" v-model="nameInput" />
    </label>
    <div>
      <button @click="addUser">
        add
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserList, createUser } from './api/user';
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
