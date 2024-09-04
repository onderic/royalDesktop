<template>
    <div class="flex items-center justify-between mb-4 ">
      <!-- Title Section -->
      <h2 class="text-2xl font-semibold text-gray-800">{{ title }}</h2>
      
      <!-- Breadcrumbs Section -->
      <div class="flex items-center space-x-2">
        <span v-for="(breadcrumb, index) in breadcrumbs" :key="index">
          <router-link
            v-if="breadcrumb.link"
            :to="breadcrumb.link"
            class="text-blue-500 hover:underline"
          >
            {{ breadcrumb.label }}
          </router-link>
          <span v-else class="text-gray-500">{{ breadcrumb.label }}</span>
          <span v-if="index < breadcrumbs.length - 1" class="text-gray-500">/</span>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SectionTitleLine',
    props: {
      title: {
        type: String,
        required: true,
      },
      breadcrumbs: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here if needed */
  </style>
  