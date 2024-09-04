<template>
  <div>
    <div class="flex items-center justify-between   mb-8">
      <!-- Left-aligned buttons -->
      <div class="flex space-x-4">
        <!-- Jobs Button -->
        <button
          :class="['px-4 py-2 rounded', activeButton === 'jobs' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500']"
          @click="setActiveButton('jobs')"
        >
          Overview
        </button>
        <!-- Candidates Button -->
        <button
          :class="['px-4 py-2 rounded', activeButton === 'candidates' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500']"
          @click="setActiveButton('candidates')"
        >
          Candidates
        </button>
        <!-- Messages Button -->
        <button
          :class="['px-4 py-2 rounded', activeButton === 'messages' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500']"
          @click="setActiveButton('messages')"
        >
          Messages
        </button>
      </div>
      <!-- Right-aligned button -->
      <router-link to="/admin/careers/new">
      <button class="hidden sm:block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
        Post Job
      </button>
    </router-link>

    </div>
    <div v-if="loading" class="text-center mt-4">Loading...</div>
    <div v-else>

      <component :is="activeComponent" :jobId="jobId" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import JobsComponent from '@/components/job/JobsComponent.vue'
import CandidatesComponent from '@/components/job/CandidatesComponent.vue'
import MessagesComponent from '@/components/job/MessagesComponent.vue'

const route = useRoute()
const jobId = route.params.id
const loading = ref(true)
const activeButton = ref('jobs')

const setActiveButton = (button) => {
  activeButton.value = button
}

const activeComponent = computed(() => {
  switch (activeButton.value) {
    case 'jobs':
      return JobsComponent
    case 'candidates':
      return CandidatesComponent
    case 'messages':
      return MessagesComponent
    default:
      return JobsComponent
  }
})

onMounted(() => {
  loading.value = false
})
</script>
