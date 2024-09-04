
<template>
  <div >
   
    <div  v-if="loaderStore.loading" class="lg:grid lg:grid-cols-4 lg:gap-6 space-y-4 lg:space-y-0">

      <div class="lg:col-span-3 space-y-4">
        <!-- Card Widgets -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div class="animate-pulse bg-white h-32 rounded-lg"></div>
          <div class="animate-pulse bg-white h-32 rounded-lg"></div>
          <div class="animate-pulse bg-white h-32 rounded-lg"></div>
        </div>

        <!-- Applications and Job Titles -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-900 shadow-md rounded-lg p-4 lg:col-span-2">
            <div class="h-64 animate-pulse bg-gray-200 rounded-lg"></div>

            <div class="mt-20">
              <div class="flex justify-between mb-4 border-b-2 border-gray-100">
                <div class="font-semibold text-gray-600 animate-pulse bg-gray-200 h-6 w-32"></div>
                <div class="font-semibold text-gray-600 animate-pulse bg-gray-200 h-6 w-20"></div>
              </div>

              <div class="space-y-2">
                <div class="flex justify-between items-center py-2 border border-none animate-pulse bg-gray-200 h-8"></div>
                <div class="flex justify-between items-center py-2 border border-none animate-pulse bg-gray-200 h-8"></div>
                <div class="flex justify-between items-center py-2 border border-none animate-pulse bg-gray-200 h-8"></div>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg p-4 lg:col-span-1 dark:bg-gray-800 dark:text-white">
            <div class="border-b border-gray-300 mb-5">
              <div class="animate-pulse bg-gray-200 h-6 w-48"></div>
            </div>

            <!-- Progress Bars -->
            <div class="space-y-6 mt-2">
              <div class="flex items-center space-x-4 border-b border-gray-100 pb-2">
                <div class="w-3 h-3 bg-gray-300 rounded-full dark:bg-purple-400"></div>
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-1">
                    <div class="text-gray-600 dark:text-gray-300 animate-pulse bg-gray-200 h-4 w-20"></div>
                    <div class="text-gray-600 dark:text-gray-300 animate-pulse bg-gray-200 h-4 w-10"></div>
                  </div>
                  <div class="relative">
                    <div class="flex h-2 bg-gray-200 rounded-full dark:bg-gray-600"></div>
                  </div>
                </div>
              </div>
              <!-- Repeat similar blocks for other progress bars -->
            </div>
          </div>
        </div>

        <!-- New Applications -->
        <div class="bg-white shadow-md rounded-lg p-4 lg:col-span-1 dark:bg-gray-800 dark:text-white mt-6">
          <div class="border-b border-gray-300 mb-5">
            <div class="animate-pulse bg-gray-200 h-6 w-48"></div>
          </div>
          <ul class="space-y-4">
            <li class="flex items-center space-x-2 animate-pulse bg-gray-200 h-8"></li>
            <li class="flex items-center space-x-2 animate-pulse bg-gray-200 h-8"></li>
            <li class="flex items-center space-x-2 animate-pulse bg-gray-200 h-8"></li>
          </ul>
        </div>
      </div>

      <div class="lg:col-span-1 space-y-4">
        <div class="bg-white shadow-md rounded-lg p-4 max-w-full overflow-hidden">
          <div class="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
        </div>

        <div class="bg-white shadow-md rounded-lg p-4 max-w-full overflow-hidden">
          <div class="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
        </div>
      </div>

      </div>

   
    <div v-else>


      <div class="xl:grid xl:grid-cols-4 xl:gap-6 space-y-4 xl:space-y-0">
  <div class="xl:col-span-3 space-y-4">
    <div class="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      <CardBoxWidget
        :number="totalApplications"
        label="Applications"
        circleColor="text-purple-500"
        :percentage="calculatePercentage(totalApplications, totalApplications)"
      />
      <CardBoxWidget
        :number="totalHired"
        label="Shortlisted"
        circleColor="text-green-400"
        :percentage="calculatePercentage(totalHired, totalApplications)"
      />
      <CardBoxWidget
        :number="totalRejected"
        label="On Hold"
        circleColor="text-yellow-400"
        :percentage="calculatePercentage(totalRejected, totalApplications)"
      />
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-slate-900 shadow-md rounded-lg p-4 xl:col-span-2">
        <div>
          <div class="h-64">
            <Applications :initial-fees="initialFeesPerMonth" :final-fees="finalFeesPerMonth" />
          </div>
        </div>

        <div class="mt-20">
          <!-- Header Section -->
          <div class="flex justify-between mb-4 border-b-2 border-gray-100">
            <div class="font-semibold text-gray-600">Job Title</div>
            <div class="font-semibold text-gray-600">Applications</div>
          </div>

          <!-- Records Container -->
          <div class="space-y-2">
            <div 
              v-for="job in latestJobs" 
              :key="job.id"
              class="flex justify-between items-center py-2 border border-none"
            >
              <div class="font-mono">{{ job.position }}</div>
              <div class="font-bold text-gray-500">{{ job.total_applications }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-4 xl:col-span-1 dark:bg-gray-800 dark:text-white">
        <div class="border-b border-gray-300 mb-5">
          <h1 class="text-gray-700 font-semibold pb-8">Total Applications</h1>
        </div>

        <!-- Progress Bars -->
        <div class="space-y-6 mt-2">
          <div class="flex items-center space-x-4 border-b border-gray-100 pb-2">
            <div class="w-3 h-3 bg-purple-600 rounded-full dark:bg-purple-400"></div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <div class="text-gray-600 dark:text-gray-300">Total</div>
                <div class="text-gray-600 dark:text-gray-300">{{ rejectedPercentage }}%</div>
              </div>
              <div class="relative">
                <div class="flex h-2 bg-gray-200 rounded-full dark:bg-gray-600">
                  <div class="bg-purple-600 h-full rounded-full" :style="{ width: rejectedPercentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Shortlisted -->
          <div class="flex items-center space-x-4 border-b border-gray-100 pb-2">
            <div class="w-3 h-3 bg-green-500 rounded-full dark:bg-green-400"></div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <div class="text-gray-600 dark:text-gray-300">Shortlisted</div>
                <div class="text-gray-600 dark:text-gray-300">{{ shortlistedPercentage }}%</div>
              </div>
              <div class="relative">
                <div class="flex h-2 bg-gray-200 rounded-full dark:bg-gray-600">
                  <div class="bg-green-500 h-full rounded-full" :style="{ width: shortlistedPercentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- On-Hold -->
          <div class="flex items-center space-x-4 border-b border-gray-100 pb-2">
            <div class="w-3 h-3 bg-yellow-500 rounded-full dark:bg-yellow-400"></div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <div class="text-gray-600 dark:text-gray-300">On-Hold</div>
                <div class="text-gray-600 dark:text-gray-300">{{ onHoldPercentage }}%</div>
              </div>
              <div class="relative">
                <div class="flex h-2 bg-gray-200 rounded-full dark:bg-gray-600">
                  <div class="bg-yellow-500 h-full rounded-full" :style="{ width: onHoldPercentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <div class=" p-4 xl:col-span-1 dark:bg-gray-800 dark:text-white mt-6">
        <div class="border-b border-gray-300 mb-5">
          <h1 class="text-gray-700 font-semibold pb-8">New Applications</h1>
        </div>
        <ul class="space-y-4">
          <li v-for="application in latestApplications" :key="application.id" class="flex items-center space-x-2 capitalize">
            <div class="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
              <v-icon name="fc-manager" class="w-8 h-8 rounded-full" />
              <!-- <span class="text-xs font-bold text-yellow-400">SD</span> -->
            </div>
            <div>
              <p class="text-sm font-semibold font-mono">{{application.user_name}}</p>
              <p class="text-sm text-gray-500">applied for {{application.job_position}}</p>
            </div>
          </li>
        </ul>
      </div>
        </div>
      </div>

   
    </div>
  </div>

  <div class="xl:col-span-1 space-y-4">
    <div class="bg-white shadow-md rounded-lg p-4 max-w-full overflow-hidden">
      <div>
        <Calender/>
      </div>

      <div class="mt-4 px-4">
        <div class="flex items-center justify-center mb-4">
          <h1 class="text-gray-800 font-semibold pb-4 text-lg md:text-xl xl:text-1xl">Scheduled Meetings</h1>
        </div>
        <ul class="space-y-6">
          <li class="flex items-start justify-between space-x-3">
            <div class="text-xs md:text-sm font-bold text-yellow-400 flex-shrink-0 text-center">Thu 8</div>
            <div class="flex-1 flex flex-col items-start space-y-1">
              <div class="text-xs md:text-sm font-semibold font-serif">Interview</div>
              <div class="text-xs md:text-sm text-gray-500">9:00am - 11:30am</div>
            </div>
            <div class="text-xs md:text-sm text-gray-500 flex-shrink-0 w-16 md:w-20 text-center">Action</div>
          </li>
          <li class="flex items-start justify-between space-x-3">
            <div class="text-xs md:text-sm font-bold text-yellow-400 flex-shrink-0 text-center">Fri 10</div>
            <div class="flex-1 flex flex-col items-start space-y-1">
              <div class="text-xs md:text-sm font-semibold font-serif">Organizational meeting</div>
              <div class="text-xs md:text-sm text-gray-500">10:00am - 10:30am</div>
            </div>
            <div class="text-xs md:text-sm text-gray-500 flex-shrink-0 w-16 md:w-20 text-center">Action</div>
          </li>
          <li class="flex items-start justify-between space-x-3">
            <div class="text-xs md:text-sm font-bold text-yellow-400 flex-shrink-0 text-center">Mon 17</div>
            <div class="flex-1 flex flex-col items-start space-y-1">
              <div class="text-xs md:text-sm font-semibold font-serif">Meeting with the manager</div>
              <div class="text-xs md:text-sm text-gray-500">9:00am - 11:30am</div>
            </div>
            <div class="text-xs md:text-sm text-gray-500 flex-shrink-0 w-16 md:w-20 text-center">Action</div>
          </li>
          <li class="flex items-start justify-between space-x-3">
            <div class="text-xs md:text-sm font-bold text-yellow-400 flex-shrink-0 text-center">Wed 22</div>
            <div class="flex-1 flex flex-col items-start space-y-1">
              <div class="text-xs md:text-sm font-semibold font-serif">Meeting with the manager</div>
              <div class="text-xs md:text-sm text-gray-500">9:00am - 11:30am</div>
            </div>
            <div class="text-xs md:text-sm text-gray-500 flex-shrink-0 w-16 md:w-20 text-center">Action</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



     
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted,computed } from 'vue'
import axiosInstance from '@/axiosConfig';
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import SectionTitleLine from '@/components/SectionTitleLine.vue'
import Applications from '@/components/charts/Applications.vue'
import Calender from "@/components/Calendar.vue"
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { useLoaderStore } from '@/stores/loader'; 


const loaderStore = useLoaderStore();

const totalApplications = ref(0)
const totalHired = ref(0)
const totalRejected = ref(0)
const initialFeesPerMonth = ref([])
const finalFeesPerMonth = ref([])
const latestApplications = ref([])
const latestJobs = ref([])

const isLoading = ref(true)


const fetchReportData = async () => {
  try {
    loaderStore.showLoader(); 
    const response = await axiosInstance.get('/admin-reports/')
    const data = response.data

    totalApplications.value = data.total_applications
    totalHired.value = data.total_hired
    totalRejected.value = data.total_rejected
    initialFeesPerMonth.value = data.initial_fees_per_month
    finalFeesPerMonth.value = data.final_fees_per_month
    latestApplications.value = data.latest_applications
    latestJobs.value = data.latest_jobs
   
  } catch (error) {
    console.error('Error fetching report data:', error)
  }finally{
    loaderStore.hideLoader();
  }
}

// Calculate percentages
const shortlistedPercentage = computed(() => calculatePercentage(totalHired.value, totalApplications.value))
const onHoldPercentage = computed(() => calculatePercentage(totalRejected.value, totalApplications.value))
const rejectedPercentage = computed(() => calculatePercentage(totalApplications.value, totalApplications.value))


const calculatePercentage = (part, total) => {
  return total > 0 ? Math.round((part / total) * 100) : 0
}

onMounted(() => {
  fetchReportData()
})
</script>