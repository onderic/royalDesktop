<template>
    <div class="flex items-center justify-center mt-6 mb-4">
      <!-- Previous Button -->
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="!pagination.previous"
        class="btn"
      >
        <v-icon name="io-arrow-left" scale="1" />
      </button>
  
      <!-- Page Numbers -->
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="goToPage(page)"
        :class="['btn', { 'bg-blue-500 text-white': page === currentPage }]"
      >
        {{ page }}
      </button>
  
      <!-- Next Button -->
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="!pagination.next"
        class="btn"
      >
        <v-icon name="io-arrow-right" scale="1" />
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    pagination: Object,
    onPageChange: Function
  })
  
  const currentPage = computed(() => {
    // Return current page based on pagination data
    return Math.floor((props.pagination.previous ? props.pagination.previous.match(/page=(\d+)/)[1] : 1) + 1)
  })
  
  const totalPages = computed(() => {
    return Math.ceil(props.pagination.count / 10) // Adjust the divisor based on items per page
  })
  
  const visiblePages = computed(() => {
    let pages = []
    const startPage = Math.max(1, currentPage.value - 2)
    const endPage = Math.min(totalPages.value, currentPage.value + 2)
  
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
  
    return pages
  })
  
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      // Fetch new candidates for the selected page
      props.onPageChange(page)
    }
  }
  </script>
  
  <style scoped>
  .btn {
    background-color: #3490dc;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    margin: 0 0.5rem;
  }
  
  .btn:disabled {
    background-color: #b8c2cc;
    cursor: not-allowed;
  }
  
  .btn.bg-blue-500 {
    background-color: #1d4ed8;
  }
  </style>
  