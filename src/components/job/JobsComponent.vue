<template>
  <div>
    <div v-if="job">
      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- First Column (spans 2 columns) -->
        <div class="md:col-span-2">
          <div class="bg-white rounded-md shadow-sm lg:p-8 p-4">
            <router-link to="/admin/careers/manage">
              <a href="" class="text-gray-500 hover:text-gray-600">Back To Listings</a>
            </router-link>

            <div class="flex items-center justify-between text-gray-700 mt-5 border-b border-gray-100">
              <div class="mb-6">
                <h1 class="text-xl font-semibold">{{ job.position }}</h1>
              </div>
              <div>
                <button class="">{{ job.company.name }}</button>
              </div>
            </div>

            <div class="lg:p-6 flex flex-col lg:flex-row">
              <div class="chart-wrapper lg:p-6 flex-shrink-0 lg:w-3/4 overflow-x-auto">
                <div class="w-full">
              <JobChart :data="weeklyData" />
            </div>
          </div>
              <div class="flex   justify-center flex-col gap-5 lg:w-1/4 mt-6 lg:mt-0">
            <div>
              <router-link :to="`/admin/careers/edit/${job.id}`">
              <button class="w-full border border-blue-300 px-6 py-2 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Edit Job</button>
              </router-link>  
            </div>
            <div>
              <div v-if="job?.status === 'active'">
              <button @click="showDeactivateJobModal" class="w-full border border-red-300 px-6 py-2 text-red-500 rounded-md  hover:bg-red-500 hover:text-white">
                Deactivate Job
              </button>
            </div>
            <div v-else>
              <button @click="activateJob" class="w-full border border-purple-300 px-6 py-2 text-purple-600 rounded-md  hover:bg-purple-500 hover:text-white">
                <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" />
                Activate Job
              </button>
            </div>

            <!-- Deactivate Job Modal -->
            <DeactivateJobModal
            :jobId="job?.id"
            v-if="isDeactivateOpen"
            @close="closeDeactivateJobModal"
            @updateStatus="job.status = $event"
          />
          </div>
          </div>
            </div>

            <div class="p-6">
              <h1 class="text-xl font-semibold mb-6">Candidates</h1>
              <!-- Container for cards -->
              <div class="flex flex-col md:flex-row gap-6">
                <div class="border border-gray-100 rounded-md p-6 flex-1 flex flex-col items-center">
                  <h2 class="text-xl mb-4">Awaiting Approval</h2>
                  <p class="font-bold text-2xl">{{activeApplications}}</p>
                </div>

                <div class="border border-gray-100 rounded-md p-6 flex-1 flex flex-col items-center">
                  <h2 class="text-xl mb-4">Total Applications</h2>
                  <p class="font-bold text-2xl">{{totalApplications}}</p>
                </div>
              </div>
            </div>

            <div class="p-6">
              <!-- Job Description -->
              <h1 class="text-xl font-semibold mb-6">Job Description</h1>
              <p class="mb-6 text-gray-600">{{ job.description }}</p>

              <!-- Responsibilities -->
              <div class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Responsibilities</h2>
                <ul class="list-disc pl-6">
                  <li v-for="(responsibility, index) in job.responsibilities" :key="index" class="text-gray-600 mb-1">
                    {{ responsibility }}
                  </li>
                </ul>
              </div>

              <!-- Required Experience -->
              <div class="mb-6">
                <h2 class="text-xl font-semibold mb-2">Required Experience</h2>
                <ul class="list-disc pl-6">
                  <li v-for="(experience, index) in job.required_experience" :key="index" class="text-gray-600 mb-1">
                    {{ experience }}
                  </li>
                </ul>
              </div>

              <!-- Class Date and Salary Range -->
              <div>
                <h2 class="text-xl font-semibold mb-2">Details</h2>
                <div class="mb-4">
                  <p class="text-gray-700 font-medium">Close Date: <span class="text-purple-600">{{ job.close_date }}</span></p>
                  <p></p>
                </div>
                <div>
                  <p class="text-gray-700 font-medium">
                    Salary Range: 
                    <span class="text-green-600">
                      {{ job.currency }} {{ job.salary_from }} - {{ job.currency }} {{ job.salary_to }}
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-white rounded-md shadow-sm lg:p-8 p-4">
            
            <router-link :to="`/admin/careers/edit/${job.id}`">
            <button class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded mb-4 w-full">Edit Job</button>
          </router-link>

            <div class="space-y-4">
              <button 
              @click="mark_is_featured"
              class="flex items-center justify-between border-b border-gray-100 text-gray-800 py-2 px-2 rounded w-full hover:bg-gray-100 transition duration-200"
            >
            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" />
              <p>{{ job.is_featured ? 'Mark as not featured' : 'Mark as featured' }}</p>
              <v-icon 
                :name="job.is_featured ? 'gi-round-knob-off' : 'gi-round-knob'" 
                class="w-8 h-8 text-gray-200" 
                scale="1" 
              />
            </button>


              <button class="flex items-center justify-between border-b border-gray-100 text-gray-800 py-2 px-2 rounded w-full hover:bg-gray-100 transition duration-200">
                <p>View Reports</p>
                <v-icon name="gi-round-knob" class="w-8 h-8 text-gray-200" scale="1" />
              </button>

              <button class="flex items-center justify-between border-b border-gray-100 text-gray-800 py-2 px-2 rounded w-full hover:bg-gray-100 transition duration-200">
                <p>Find Candidates for this Job</p>
                <v-icon name="gi-round-knob" class="w-8 h-8 text-gray-200" scale="1" />
              </button>
            </div>

            <div class="mt-8 flex items-center justify-center px-2">
              <button  @click="openModal"  class="border border-green-400 w-full rounded-md py-2 text-green-500 hover:bg-green-600 hover:text-white">Add Candidate</button>
              <Application 
                :isModalOpen="isModalOpen" 
                @update:isModalOpen="isModalOpen = $event" 
                @applicationSubmitted="handleApplicationSubmitted"
                :id="jobId" 
              />
            </div>

            <div class="text-gray-600 mt-6 space-y-4 px-2">
              <p><strong>Applications by:</strong> {{job.last_date_to_apply}}</p>
              <p><strong>Candidates:</strong> {{totalApplications}}</p>
              <p><strong>Status:</strong> Open - Pause</p>
              <p><strong>Created:</strong> {{ job.posted_date }}</p>
              <p><strong>Company:</strong> {{ job.company_info.name }}</p>
            </div>
            <div class="mt-8 px-2">
              <a :href="publicPageUrl" target="_blank" class=" flex items-center justify-center border border-yellow-400 w-full rounded-md py-2 text-yellow-400 hover:bg-yellow-500 hover:text-white">
                View Public Page
              </a>
            </div>

            <div class="mt-8 px-2">
              <SocialShare :jobId="String(job.id)" />
            </div>



          </div>
        </div>
      </div>
    </div>

    <!-- Skeleton Loader -->
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- First Column (spans 2 columns) -->
      <div class="md:col-span-2">
        <div class="bg-white rounded-md shadow-sm lg:p-8 p-4 animate-pulse">
          <!-- Skeleton for Back To Listings link -->
          <div class="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>

          <div class="flex items-center justify-between text-gray-700 mt-5 border-b border-gray-100">
            <!-- Skeleton for Job Position -->
            <div class="mb-6">
              <div class="h-8 bg-gray-200 rounded w-3/4"></div>
            </div>
            <!-- Skeleton for More Button -->
            <div class="w-1/4">
              <div class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div class="mt-6">
            <!-- Skeleton for Job Chart -->
            <div class="bg-gray-200 rounded h-48"></div>
          </div>

          <div class="p-6">
            <h1 class="text-xl font-semibold mb-6">Candidates</h1>
            <!-- Container for cards -->
            <div class="flex flex-col md:flex-row gap-6">
              <div class="border border-gray-100 rounded-md p-6 flex-1 flex flex-col items-center">
                <div class="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div class="h-10 bg-gray-200 rounded w-1/2"></div>
              </div>

              <div class="border border-gray-100 rounded-md p-6 flex-1 flex flex-col items-center">
                <div class="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div class="h-10 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <!-- Skeleton for Job Description -->
            <h1 class="text-xl font-semibold mb-6">Job Description</h1>
            <div class="h-24 bg-gray-200 rounded mb-6"></div>

            <!-- Skeleton for Responsibilities -->
            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">Responsibilities</h2>
              <div class="space-y-2">
                <div class="h-4 bg-gray-200 rounded"></div>
                <div class="h-4 bg-gray-200 rounded"></div>
                <div class="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>

            <!-- Skeleton for Required Experience -->
            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">Required Experience</h2>
              <div class="space-y-2">
                <div class="h-4 bg-gray-200 rounded"></div>
                <div class="h-4 bg-gray-200 rounded"></div>
                <div class="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>

            <!-- Skeleton for Class Date and Salary Range -->
            <div>
              <h2 class="text-xl font-semibold mb-2">Details</h2>
              <div class="space-y-4">
                <div class="h-4 bg-gray-200 rounded"></div>
                <div class="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skeleton for Sidebar -->
      <div>
        <div class="bg-white rounded-md shadow-sm lg:p-8 p-4 animate-pulse">
          <div class="h-10 bg-gray-200 rounded mb-4"></div>
          <div class="space-y-4">
            <div class="h-8 bg-gray-200 rounded"></div>
            <div class="h-8 bg-gray-200 rounded"></div>
            <div class="h-8 bg-gray-200 rounded"></div>
            <div class="h-8 bg-gray-200 rounded"></div>
          </div>
          <div class="mt-8 h-10 bg-gray-200 rounded"></div>
          <div class="mt-8 h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import axiosInstance from '@/axiosConfig'
import JobChart from '../charts/JobChart.vue'
import SocialShare from '@/components/SocialShare.vue'
import DeactivateJobModal from '@/components/DeactivateJobModal.vue'
import Application from '../Application.vue'
import { useToast } from 'vue-toast-notification'

const isModalOpen = ref(false)
const isDeactivateOpen = ref(false)
const job = ref(null)
const totalApplications = ref(null)
const activeApplications = ref(null)
const weeklyData = ref([])
const loading = ref(true)
const toast = useToast()

const props = defineProps(['jobId'])

const showDeactivateJobModal = (id) => {
  isDeactivateOpen.value = true
}

const closeDeactivateJobModal = () => {
  isDeactivateOpen.value = false
}

const fetchJob = async () => {
  if (!props.jobId) return 

  try {
    const response = await axiosInstance.get(`admin/job/${props.jobId}/`)
    job.value = response.data.job
    weeklyData.value = response.data.applications_per_day
    totalApplications.value = response.data.total_applications
    activeApplications.value = response.data.active_applications

    if (typeof job.value.responsibilities === 'string') {
      job.value.responsibilities = JSON.parse(job.value.responsibilities)
    }
    if (typeof job.value.required_experience === 'string') {
      job.value.required_experience = JSON.parse(job.value.required_experience)
    }
  } catch (error) {
    console.error('Error fetching job details:', error)
  } finally {
    loading.value = false
  }
}

const activateJob = async () => {
  loading.value = true
  try {
    await axiosInstance.patch(`admin/job/${props.jobId}/`, { status: 'active' })
    job.value.status = 'active'
    toast.success('Job successfully activated!')
  } catch (error) {
    toast.error('Failed to activate job: ' + error.message)
  } finally {
    loading.value = false
  }
}

const mark_is_featured = async () => {
  loading.value = true
  try {
    const newIsFeatured = !job.value.is_featured;
    await axiosInstance.patch(`admin/job/${props.jobId}/`, { is_featured: newIsFeatured });
    
    job.value.is_featured = newIsFeatured;
  
    toast.success(
    `${newIsFeatured ? 'successfully marked !' : 'successfully deactivated '}`, 
    { 
      duration: 6000, 
      pauseOnHover: true 
    }
  );

  } catch (error) {
    toast.error('Failed to update job: ' + error.message);
  } finally {
    loading.value = false;
  }
};


const publicPageUrl = computed(() => `/careers/${props.jobId}`)

function openModal() {
  isModalOpen.value = true
}

function handleApplicationSubmitted() {
  fetchJob()
}

onMounted(() => {
  fetchJob()
})
</script>


