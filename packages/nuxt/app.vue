<template>
  <div>
    {{ user }}
  </div>
</template>

<script setup lang="ts">
import { getUserList } from './api/user';
import type { User } from '!!/trpc/db';

const user = ref<User[]>([]);

onBeforeMount(async () => {
  user.value = await getUserList();
});
</script>
