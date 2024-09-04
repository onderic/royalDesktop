<template>
  <div>
    <!-- Skeleton Loaders -->
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="n in 6" :key="'skeleton-' + n" class="bg-white rounded-md overflow-hidden p-6 animate-pulse">
        <!-- Skeleton Header -->
        <div class="flex items-center mb-4">
          <div class="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
          <div class="flex-1 space-y-4">
            <div class="w-2/3 h-4 bg-gray-300 rounded"></div>
            <div class="w-1/2 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>

        <!-- Skeleton Body -->
        <div class="p-4 space-y-4">
          <div class="w-1/3 h-4 bg-gray-300 rounded mb-2"></div>
          <div class="w-full h-4 bg-gray-300 rounded mb-4"></div>
          <div class="w-full h-2 bg-gray-300 rounded mb-2"></div>
          <div class="w-full h-2 bg-gray-300 rounded"></div>
          <div class="flex justify-between items-center mt-4">
            <button class="w-1/2 h-10 bg-gray-300 rounded"></button>
            <div class="w-1/3 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Job Cards Grid -->
    <div v-if="!loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="job in jobs.results" :key="job.id" class="bg-white  rounded-lg overflow-hidden px-6 py-3">
        <div class="flex items-center">
          <img class="w-16 h-16 rounded-full mr-4" src="@/assets/logo.jpeg" alt="Avatar of Jonathan Reinink">
          <div>
            <p class="text-gray-600 font-semibold leading-none font-serif">{{ job.company_info.name }}</p>
            <p class="font-semibold text-md capitalize font-sans">{{ job.position }}</p>
          </div>
        </div>
        <div class="p-4 space-y-2">
          <div class="flex justify-between text-blue-500 text-lg xl:text-sm font-medium">
            {{job.currency}} {{ job.salary_from }} - {{job.currency}} {{ job.salary_to }}
          </div>
          <div class="text-sm text-gray-600">
            <p>
              <strong>Description:</strong>
              {{ truncatedDescription(job.description) }}
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex-1">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                    Progress
                  </div>
                  <div class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
                    {{ computeDaysRemaining(job.last_date_to_apply) }} days left
                  </div>
                </div>
                <div class="relative flex mb-2 items-center">
                  <div class="w-full bg-gray-200 rounded-full">
                    <div :style="{ width: computeProgress(job.posted_date, job.last_date_to_apply) }" class="bg-orange-400 text-xs leading-none py-1 text-center text-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex lg:justify-between items-center gap-12 mt-4">
            <router-link :to="{ name: 'jobDetail', params: { id: job.id } }">
              <button class="bg-blue-500 text-white py-1 px-2 lg:rounded-md rounded-md hover:bg-blue-600 ">Applications</button>
            </router-link>
            <div class="text-gray-500 lg:text-sm text-sm xl:text-sm">
              {{ job.country }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <Pagination
    :currentPage="currentPage"
    :totalPages="totalPages"
    :totalItems="totalItems"
    :startItem="startItem"
    :endItem="endItem"
    :pages="pages"
    @setPage="setPage"
    @prevPage="prevPage"
    @nextPage="nextPage"
  />
  </div>
</template>


<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import axiosInstance from '@/axiosConfig'
import Pagination from '@/components/Pagination.vue'

const jobs = ref({
  count: 0,
  next: null,
  previous: null,
  results: []
})
const loading = ref(false)

const currentPage = ref(1)
const pageSize = 6
const totalItems = ref(0)
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize))

const fetchJobs = async (page = 1) => {
  loading.value = true
  try {
    const params = {
      page,
      page_size: pageSize,
      // Include filters if needed
    }
    const response = await axiosInstance.get('admin/job/', { params })
    jobs.value = response.data
    totalItems.value = response.data.count
  } catch (error) {
    console.error('Error fetching jobs:', error)
  } finally {
    loading.value = false
  }
}

const setPage = (pageNum) => {
  if (pageNum !== currentPage.value) {
    currentPage.value = pageNum
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    setPage(currentPage.value - 1)
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    setPage(currentPage.value + 1)
  }
}

watch(currentPage, (newPage) => {
  fetchJobs(newPage)
})

const pages = computed(() => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages.value; i++) {
    pageNumbers.push(i)
  }
  return pageNumbers
})

const startItem = computed(() => ((currentPage.value - 1) * pageSize) + 1)
const endItem = computed(() => Math.min(currentPage.value * pageSize, totalItems.value))

const truncateLength = 150

const truncatedDescription = (description) => {
  if (description.length <= truncateLength) {
    return description
  }
  return description.slice(0, truncateLength) + '...'
}

const computeProgress = (postedDate, lastDateToApply) => {
  const today = new Date()
  const totalDuration = new Date(lastDateToApply) - new Date(postedDate)
  const elapsedDuration = today - new Date(postedDate)
  const progress = Math.min((elapsedDuration / totalDuration) * 100, 100)
  return `${progress}%`
}

const computeDaysRemaining = (lastDateToApply) => {
  const today = new Date()
  const timeDiff = new Date(lastDateToApply) - today
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
}

onMounted(() => fetchJobs(currentPage.value))
</script>
