<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Job Queue</h1>
      
      <!-- Job Queue Table -->
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden shadow">
            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
              <thead class="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Job ID</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Job Name</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Status</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <tr v-if="jobs.length === 0">
                  <td colspan="4" class="p-4 text-center text-gray-500 dark:text-gray-400">No jobs in the queue!</td>
                </tr>
                <tr v-for="job in jobs" :key="job.id">
                  <td class="p-4 whitespace-nowrap">{{ job.id }}</td>
                  <td class="p-4 whitespace-nowrap">{{ job.name }}</td>
                  <td class="p-4 whitespace-nowrap">
                    <span :class="statusClass(job.status)">
                      {{ job.status }}
                    </span>
                  </td>
                  <td class="p-4 whitespace-nowrap">
                    <button @click="removeJob(job.id)" class="text-red-600 hover:text-red-900">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <!-- Add Job to Queue Form -->
      <div class="mt-6">
        <h2 class="text-xl font-bold mb-4">Add New Job</h2>
        <form @submit.prevent="addJob">
          <div class="mb-4">
            <label for="jobName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Job Name</label>
            <input type="text" id="jobName" v-model="newJobName" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300">
          </div>
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Job</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Job queue state
  const jobs = ref([
    { id: 1, name: 'Job 1', status: 'queued' },
    { id: 2, name: 'Job 2', status: 'in-progress' },
    { id: 3, name: 'Job 3', status: 'queued' }
  ])
  
  const newJobName = ref('')
  
  // Function to add a new job to the queue
  const addJob = () => {
    if (newJobName.value.trim()) {
      jobs.value.push({
        id: jobs.value.length + 1,
        name: newJobName.value.trim(),
        status: 'queued'
      })
      newJobName.value = ''
    }
  }
  
  // Function to remove a job from the queue
  const removeJob = (id) => {
    jobs.value = jobs.value.filter(job => job.id !== id)
  }
  
  // Function to determine status class for styling
  const statusClass = (status) => {
    switch (status) {
      case 'queued':
        return 'bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs'
      case 'in-progress':
        return 'bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs'
      case 'completed':
        return 'bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs'
      default:
        return 'text-gray-600'
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  