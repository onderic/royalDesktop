<template>
    <div
      class="border border-gray-200 rounded-md text-center p-4 cursor-pointer"
      :class="{ 'bg-blue-500 text-white': isActive }"
      @click="handleClick"
    >
      <p class="text-lg font-serif">{{ label }}</p>
      <p class="text-xl">{{ count }}</p>
    </div>
    
  </template>
  
  <script setup>
  // Props
  const props = defineProps({
    label: String,
    count: Number,
    isActive: Boolean,
    status: String,
  })
  
  // Emits
  const emit = defineEmits(['update:filter'])
  

  const handleClick = () => {
    emit('update:filter', props.status)
  }
  </script>
  
  <style scoped>

  </style>
  