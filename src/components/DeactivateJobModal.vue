<template>
    <!-- Modal container with overlay -->
    <div v-if="isDeactivateOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-gray-500 opacity-50" @click="handleClose"></div>
      <!-- Modal content -->
      <div class="relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 z-10">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
          <h3 class="text-xl font-semibold dark:text-white">Deactivate Job</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
            @click="handleClose"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-sm text-gray-900 dark:text-gray-400">Are you sure you want to deactivate this job? This action might be destructive.</p>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              class="text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              @click="handleClose"
            >
              Cancel
            </button>
            <button
              type="button"
              @click="confirmDeactivateJob"
              class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" />
              Deactivate Job
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref} from 'vue'
  import { useToast } from 'vue-toast-notification'
  import axiosInstance from '@/axiosConfig'
  
  const props = defineProps({
    jobId: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['close', 'updateStatus'])
  const isDeactivateOpen = ref(true)
  const loading = ref(false)
  const toast = useToast()
  
  const handleClose = () => {
    emit('close')
  }
  
  const confirmDeactivateJob = async () => {
    loading.value = true
    try {
      await axiosInstance.patch(`admin/job/${props.jobId}/`, { status: 'inactive' })
      toast.success('Job successfully deactivated!')
      emit('updateStatus', 'inactive')
      handleClose()
    } catch (error) {
      toast.error('Failed to deactivate job: ' + error.message)
    } finally {
      loading.value = false
    }
  }
  </script>
  