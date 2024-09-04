<template>
  <div>
    <!-- Status Boxes as Clickable Filters -->
    <div class="bg-white p-4 border border-gray-200 rounded-md mb-4">
      <div class="grid grid-cols-1 sm:grid-cols-6 gap-4 mb-4">
        <!-- Status Boxes -->
        <StatusCard
          v-for="(count, status) in statusCounts"
          :key="status"
          :label="capitalizeFirstLetter(status)"
          :count="count"
          :status="status"
          :isActive="filter === status"
          @update:filter="setFilter"
        />
      </div>
    </div>

    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="bg-white dark:bg-gray-800 relative shadow-sm sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="w-full md:w-1/2">
            <div class="relative w-full">
              <input
                type="text"
                id="simple-search"
                ref="searchInput"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                :placeholder="`Search applications under ${capitalizeFirstLetter(filter)}`"
                v-model="searchQuery"
                @blur="handleBlur"
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 flex items-center pr-3"
                @click="handleSubmit"
              >
                <v-icon name="io-search-outline" scale="1" />
              </button>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
    <!-- Skeleton Loader -->
    <div v-if="loading">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th v-for="column in dynamicColumns" :key="column.key" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <!-- Skeleton Rows -->
          <tr v-for="n in 10" :key="n">
            <td v-for="column in dynamicColumns" :key="column.key" class="px-6 py-4 whitespace-nowrap">
              <div class="h-4 bg-gray-200 rounded animate-pulse" :style="{ width: getRandomWidth(column.key) }"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table Component Integration -->
    <div v-else>
      <CandidateComponent
        :applications="applications"
        :columns="dynamicColumns"
        :jobId="props.jobId"
        @update:statusCounts="updateStatusCounts"
      />
    </div>
  </div>
        <div class="flex items-center justify-center mt-6 mb-4">
          <!-- Pagination Controls -->
          <button
            @click="fetchApplications(pagination.previous)"
            :disabled="!pagination.previous"
            class="btn"
          >
            <v-icon name="fa-arrow-left" scale="1" />
          </button>
          <button
            @click="fetchApplications(pagination.next)"
            :disabled="!pagination.next"
            class="btn"
          >
            <v-icon name="fa-arrow-right" scale="1" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import axiosInstance from '@/axiosConfig'
import StatusCard from './StatusCard.vue'
import CandidateComponent from './CandidateTableComponent.vue'

const props = defineProps(['jobId'])

const statusCounts = ref({
  active: 0,
  reviewed: 0,
  medical: 0,
  hired: 0,
  rejected: 0,
  processing: 0,
  complete: 0,
 
})

const applications = ref([])
const filter = ref('active')
const searchQuery = ref('')
const loading = ref(true);

const pagination = ref({
  next: null,
  previous: null,
  count: 0,
})


const baseColumns = [
  { key: 'name', label: 'Name' },
  { key: 'phone', label: 'Phone/Email' },
  { key: 'gender', label: 'Gender' },
  { key: 'created_at', label: 'Application Date' },
]

const additionalColumns = {
  hired: [
    { key: 'InitialPay', label: 'Deposit', render: 'InitialPay' },
    { key: 'resume', label: 'Resume', render: 'Resume' },
  ],
  processing: [
    { key: 'visa', label: 'Visa Upload', render: 'visa' },
    { key: 'FinalPay', label: 'FinalPayment', render: 'FinalPay' },
   
  ],
  medical: [
    { key: 'medical_status', label: 'Medical Complete ?', render: 'MedicalStatus' },
    { key: 'report', label: 'Medical Report', render: 'report' },
  ],
  active: [
    { key: 'resume', label: 'Resume', render: 'Resume' },
    { key: 'action', label: 'Action', render: 'Action' },
  ],
  complete: [
    { key: 'status', label: 'Status' },
    { key: 'InitialPay', label: 'Deposit', render: 'InitialPay' },
    { key: 'visa', label: 'Visa', render: 'visa' },
    { key: 'FinalPay', label: 'FinalPayment', render: 'FinalPay' },
    
    { key: 'report', label: 'Medical', render: 'MedicalReport' },
    { key: 'resume', label: 'Resume', render: 'Resume' },

  ],
};


const dynamicColumns = computed(() => {
  let columns = [...baseColumns]

  // Add status column only for 'active' and 'hired'
  if (filter.value === 'active' || filter.value === 'hired' || filter.value === 'rejected') {
    columns.push({ key: 'status', label: 'Status' })
  }

  // Add additional columns based on the filter
  if (additionalColumns[filter.value]) {
    columns = columns.concat(additionalColumns[filter.value])
  }

  return columns
})



const fetchApplications = async (url = null) => {
  loading.value = true;
  const requestUrl = url || `jobs/${props.jobId}/applications`
  try {
    const response = await axiosInstance.get(requestUrl, {
      params: {
        status: filter.value,
        search: searchQuery.value,
      },
    })
    const resultData = response.data.results
    applications.value = resultData.applications
    statusCounts.value = resultData.status_counts
    pagination.value = {
      next: response.data.next,
      previous: response.data.previous,
      count: response.data.count,
    }
  } catch (error) {
    console.error(error)
  }finally{
    loading.value = false
  }
}

const setFilter = (status) => {
  filter.value = status
  fetchApplications()
}

const updateStatusCounts = (counts) => {
  statusCounts.value = counts
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, ' ')
}

const handleSubmit = () => {
  fetchApplications()
  searchQuery.value = ''
  nextTick(() => {
    const input = $refs.searchInput
    if (input) {
      input.focus()
    }
  })
}

const handleBlur = () => {
  searchQuery.value = ''
}

watch(searchQuery, () => {
  clearTimeout(window.debounceTimeout)
  window.debounceTimeout = setTimeout(() => {
    fetchApplications()
  }, 200) 
})

onMounted(() => {
  fetchApplications()
})
const getRandomWidth = (key) => {
  const widths = {
    name: '75%',
    phone: '50%',
    gender: '30%',
    created_at: '60%',
    status: '40%',
    InitialPay: '45%',
    resume: '70%',
    visa: '55%',
    FinalPay: '50%',
    medical_status: '65%',
    report: '80%',
    action: '35%',
  }
  return widths[key] || '50%'
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
</style>
