<template>
    <div>
      <h2 class="text-xl font-bold mb-4">Messages</h2>
      <!-- Render messages list or other content here -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axiosInstance from '@/axiosConfig'
  
  const messages = ref([])
  
  const fetchMessages = async () => {
    try {
      const response = await axiosInstance.get('/messages/')
      messages.value = response.data
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }
  
  onMounted(() => fetchMessages())
  </script>
  