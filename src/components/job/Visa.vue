<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="relative bg-white rounded-lg w-full max-w-sm p-6">
      <button class="absolute top-4 right-4 text-4xl text-gray-600 hover:text-gray-900" @click="$emit('close')">×</button>
      <h2 class="text-lg font-semibold mt-6">Upload Visa Document</h2>
      <p class="text-sm ml-8">{{ name }}</p>
      <div class="p-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Visa</label>
          <div 
            class="mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
            @click="triggerFileInput"
            @dragover.prevent
            @drop.prevent="handleFileDrop"
          >
            <div class="space-y-1 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-700" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <span class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                  Upload visa
                </span>
                <p class="pl-1 text-gray-700">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-600">PDF up to 10MB</p>
            </div>
            <input
              id="visa-upload"
              ref="fileInput"
              type="file"
              @change="handleFileUpload"
              class="sr-only"
            />
            <div v-if="visaFileName" class="mt-2 text-sm text-gray-700">
              <p>Uploaded file: {{ visaFileName }}</p>
            </div>
            <p v-if="errors.visa" class="text-red-500 text-sm">{{ errors.visa }}</p>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="mt-4">
          <button 
            @click="addVisa" 
            :disabled="loading || !visaFileName" 
            class="btn w-full">
            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
            Submit Visa
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axiosInstance from '@/axiosConfig';
import { useToast } from 'vue-toast-notification';

const props = defineProps({
  applicationId: Number,
  name: String,
});

const emit = defineEmits(['close', 'visaSuccess']);
const loading = ref(false);
const visaFileName = ref("");
const errors = ref({});
const visaFile = ref(null);
const $toast = useToast();

const triggerFileInput = () => {
  document.getElementById('visa-upload').click();
};

function handleFileUpload(event) {
  const file = event.target.files[0];
  processFile(file);
}

function handleFileDrop(event) {
  const file = event.dataTransfer.files[0];
  processFile(file);
}

function processFile(file) {
  if (file) {
    if (file.type !== 'application/pdf') {
      errors.value.visa = 'Visa document must be a PDF file.';
      visaFile.value = null;
      visaFileName.value = '';
    } else {
      visaFile.value = file;
      visaFileName.value = file.name;
      errors.value.visa = '';
    }
  }
}

const close = () => {
  emit('close');
};

const addVisa = async () => {
  try {
    loading.value = true;
    const formData = new FormData();
    formData.append('visa', visaFile.value);
    formData.append('applicationId', props.applicationId);

    const response = await axiosInstance.post('/visa/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      const { message, visa_url, application_id } = response.data;
      emit('visaSuccess', { visa_url, application_id });
      $toast.success(message);
      close();
    } else {
      $toast.error('Visa upload failed:', response.data);
    }
  } catch (error) {
    $toast.error('Something went wrong', error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Additional styling, if needed */
</style>
