<template>
  <div>
    <!-- First Card: Visible only on mobile devices -->
    <div class="relative flex flex-col items-center justify-center overflow-hidden  block lg:hidden">
      <div class="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
        <div>
          <span class="text-blue-800 text-sm">{{currency}} {{ salary_from }} - {{ salary_to }}</span>
          <h3 class="font-bold mt-px">{{ position }}</h3>
          <div class="flex items-center gap-3 mt-2">
            <div :class="jobTypeClass" class="rounded-md py-1 px-4">
          <p class="text-center text-xs capitalize">{{ formattedJobType }}</p>
        </div>
            <span class="text-slate-600 lg:text-normal text-sm flex gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ country }}
            </span>
          </div>
        </div>
        <div>
          <div class="w-full md:w-64">
        <router-link :to="{ name: 'career-detail', params: { id } }">
          <button type="button" class="btn w-full flex items-center justify-center ">
        
            Apply Job
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </router-link>
      </div>

     
        </div>
      </div>
    </div>

    <!-- Second Card: Visible only on large screens -->
    <div class="relative overflow-hidden flex flex-col md:flex-row justify-between items-center bg-white border border-gray-200 dark:bg-gray-800 rounded p-5 space-y-4 md:space-y-0 md:space-x-4 hidden lg:flex">
      <!-- Company Logo and Name -->
      <div class="flex items-center space-x-3 w-full md:w-1/2">
        <div class="size-16 flex items-center justify-center dark:bg-slate-900 dark:shadow-gray-700 rounded-md">
          <img src="@/assets/logo.jpeg" class="h-12" alt="Company Logo" />
        </div>
        <p class="text-gray-700 dark:text-gray-200 capitalize font-serif font-semibold text-nowrap">{{ position }}</p>
      </div>

      <!-- Job Type and Date -->
      <div class="flex flex-col items-start w-full md:w-1/2">
        <div :class="jobTypeClass" class="rounded-md py-1 px-4">
          <p class="text-center text-xs capitalize">{{ formattedJobType }}</p>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">{{ posted_date }}</p>
      </div>

      <!-- Location and Salary -->
      <div class="flex flex-col items-start w-full md:w-1/2">
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ country }}</p>
        <p class="text-sm font-bold text-gray-600 dark:text-gray-400">{{currency}} {{ salary_from }} - {{ salary_to }}</p>
      </div>

      <!-- Apply Button -->
      <div class="w-full md:w-64">
        <router-link :to="{ name: 'career-detail', params: { id } }">
          <button class="btn-sm">
            Apply Job
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  job_type: {
    type: String,
    required: true
  },
  experience_required: {
    type: String,
    required: true
  },
  posted_date: {
    type: String,
    required: true
  },
  salary_from: {
    type: String,
    required: true
  },
  salary_to: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
})

// Dynamic class for job type
const jobTypeClass = computed(() => {
  switch (props.job_type.toLowerCase()) {
    case 'full_time':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800'
    case 'part_time':
      return 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800'
    case 'contract':
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-700 dark:bg-gray-200 dark:text-gray-800'
  }
})

// Computed property for formatted job type
const formattedJobType = computed(() => {
  switch (props.job_type.toLowerCase()) {
    case 'full_time':
      return 'Full Time'
    case 'part_time':
      return 'Part Time'
    case 'contract':
      return 'Contract'
    default:
      return 'Unknown'
  }
})

</script>

<style scoped>
.size-16 {
  width: 4rem;
  height: 4rem;
}
</style>
