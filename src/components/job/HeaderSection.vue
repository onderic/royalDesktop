<template>
    <div class="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
      <!-- Left-aligned buttons -->
      <div class="flex space-x-4">
        <!-- Jobs Button -->
        <router-link to="/jobs">
          <button
            :class="['px-4 py-2 rounded', activeButton === 'jobs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500 border border-blue-500']"
            @click="setActiveButton('jobs')"
          >
            Jobs
          </button>
        </router-link>
        <!-- Candidates Button -->
        <router-link to="/candidates">
          <button
            :class="['px-4 py-2 rounded', activeButton === 'candidates' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500 border border-blue-500']"
            @click="setActiveButton('candidates')"
          >
            Candidates
          </button>
        </router-link>
        <!-- Messages Button -->
        <router-link to="/messages">
          <button
            :class="['px-4 py-2 rounded', activeButton === 'messages' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500 border border-blue-500']"
            @click="setActiveButton('messages')"
          >
            Messages
          </button>
        </router-link>
      </div>
      <!-- Right-aligned button -->
      <router-link to="/post-job">
        <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Post Job
        </button>
      </router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'HeaderSection',
    setup() {
      const route = useRoute();
      const activeButton = ref('');
  
      // Set the active button based on the current route
      const setActiveButton = (button) => {
        activeButton.value = button;
      };
  
      // Update active button on route change
      watch(
        () => route.path,
        (newPath) => {
          if (newPath.includes('jobs')) setActiveButton('jobs');
          else if (newPath.includes('candidates')) setActiveButton('candidates');
          else if (newPath.includes('messages')) setActiveButton('messages');
          else setActiveButton('');
        }
      );
  
      return {
        activeButton,
        setActiveButton,
      };
    },
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  