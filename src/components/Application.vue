<template>
  <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-4xl h-auto p-6 relative transform transition-transform duration-300 overflow-y-auto max-h-screen sm:max-h-full">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <h1 class="text-2xl font-bold mb-6 font-serif">Apply for Job</h1>
      <form @submit.prevent="submitApplication">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Left Column: User Data -->
          <div class="flex-1 space-y-4">
            <h2 class="text-xl font-semibold mb-4 font-serif">Your Information</h2>
            <div>
              <label for="name" class="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
              <input id="name" v-model="userData.name" type="text" class="w-full p-2 border rounded-md border-gray-300" :class="{ 'border-red-500': errors.name }" required />
              <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
              <input id="email" v-model="userData.email" type="email" class="w-full p-2 border rounded-md border-gray-300" />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
              <input id="phone" v-model="userData.phone" type="tel" class="w-full p-2 border rounded-md border-gray-300" :class="{ 'border-red-500': errors.phone }" required />
              <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
            </div>
            <div>
              <label for="gender" class="block text-sm font-medium mb-2 text-gray-700">Gender Preference</label>
              <select id="gender" v-model="userData.gender" class="w-full p-2 border rounded-md border-gray-300" :class="{ 'border-red-500': errors.gender }" required>
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p v-if="errors.gender" class="text-red-500 text-sm">{{ errors.gender }}</p>
            </div>
          </div>

          <!-- Right Column: Documents & Photo -->
          <div class="flex-1 space-y-4">
            <h2 class="text-xl font-semibold mb-4 font-serif">Upload Documents</h2>
            <div 
              @dragover.prevent
              @drop.prevent="handleDrop"
              class="mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
              @click="triggerFileInput"
            >
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-700" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <span class="text-indigo-600 font-medium hover:text-indigo-500">Upload Resume</span>
                  <p class="pl-1 text-gray-700">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-600">PDF up to 10MB</p>
              </div>
              <div v-if="resumeFileName" class="mt-2 text-sm text-gray-700">
                <p>Uploaded file: {{ resumeFileName }}</p>
              </div>
              <p v-if="errors.resume" class="text-red-500 text-sm">{{ errors.resume }}</p>
              <input ref="fileInput" id="resume-upload" type="file" @change="handleFileUpload" class="sr-only" />
            </div>
          </div>
        </div>

        <div class="mt-6 text-right space-x-2">
          <button type="button" @click="closeModal" class="bg-gray-300 text-gray-700 p-2 lg:rounded-md rounded-md hover:bg-gray-400">
            Cancel
          </button>
          <button type="submit" class="bg-orange-500 text-white p-2 lg:rounded-md rounded-md hover:bg-orange-600">
            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" />
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axiosInstance from '@/axiosConfig'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

const toast = useToast()

const props = defineProps({
  isModalOpen: Boolean,
  id: String,
  agentId: String,
})

const loading = ref(false)
const emit = defineEmits(['update:isModalOpen', 'applicationSubmitted'])

const userData = ref({
  name: '',
  email: '',
  phone: '',
  gender: ''
})
const resumeFile = ref(null)
const resumeFileName = ref('')
const errors = ref({
  name: '',
  phone: '',
  resume: '',
  gender: ''
})

function closeModal() {
  emit('update:isModalOpen', false)
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    if (file.type !== 'application/pdf') {
      errors.value.resume = 'Resume must be a PDF file.'
      resumeFile.value = null
      resumeFileName.value = ''
    } else {
      resumeFile.value = file
      resumeFileName.value = file.name
      errors.value.resume = ''
    }
  }
}

function handleDrop(event) {
  const file = event.dataTransfer.files[0]
  if (file) {
    if (file.type !== 'application/pdf') {
      errors.value.resume = 'Resume must be a PDF file.'
      resumeFile.value = null
      resumeFileName.value = ''
    } else {
      resumeFile.value = file
      resumeFileName.value = file.name
      errors.value.resume = ''
    }
  }
}

function triggerFileInput() {
  const fileInput = document.getElementById('resume-upload')
  fileInput.click()
}


function validateForm() {
  errors.value.name = userData.value.name.trim() === '' ? 'Full Name is required.' : ''
  errors.value.phone = /^[07|01]\d{9}$/.test(userData.value.phone) ? '' : 'Phone number must be 10 digits and start with 07 or 01.'
  errors.value.resume = !resumeFile.value ? 'Resume is required.' : ''
  errors.value.gender = userData.value.gender === '' ? 'Gender preference is required.' : ''

  return !errors.value.name && !errors.value.phone && !errors.value.resume && !errors.value.gender
}

async function submitApplication() {
  if (!validateForm()) return

  loading.value = true

  const formData = new FormData()
  formData.append('job', props.id)
  formData.append('name', userData.value.name)
  formData.append('email', userData.value.email)
  formData.append('phone', userData.value.phone)
  if (resumeFile.value) {
    formData.append('resume', resumeFile.value)
  }
  formData.append('gender', userData.value.gender) 
  
  // Conditionally add the agentId as agent to formData
  if (props.agentId) {
    formData.append('agent', props.agentId)
  }

  try {
    const response = await axiosInstance.post('/applications/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    const { job, name, email, phone, resume, gender } = response.data
    if (job && name && email && phone && resume && gender) {
      toast.success("Application submitted successfully!")
      emit('update:isModalOpen', false)
      emit('applicationSubmitted') 
    } else {
      toast.error('Something went wrong, try again')
    }
  } catch (error) {
    const errorResponse = error.response?.data || {}
    const errorMessage = errorResponse.error || error.message || 'An unexpected error occurred.'

    toast.error(errorMessage)
  } finally {
    loading.value = false
  }
}

</script>
