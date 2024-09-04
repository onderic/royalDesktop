<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 lg:p-4" @click.self="$emit('close')">
    <div class="relative bg-gray-100 rounded-lg w-full h-full lg:p-16 py-16 px-8">
      <button class="absolute top-4 right-4 text-5xl text-gray-600 hover:text-gray-900" @click="$emit('close')">×</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>
