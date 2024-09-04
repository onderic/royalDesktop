<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
// import { invoke } from '@tauri-apps/api';

// onMounted(() => {
//   invoke('greet', { name: 'World' })
//     .then((response) => {
//       console.log('Tauri response:', response);
//     })
//     .catch((error) => {
//       console.error('Tauri invoke error:', error);
//     });
// });
</script>

<style scoped>
/* Add your styles here */
</style>
