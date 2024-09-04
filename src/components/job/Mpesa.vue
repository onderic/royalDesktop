<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="relative bg-white rounded-lg w-full max-w-sm p-6">
        <button class="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900" @click="$emit('close')">×</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Mpesa'
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  