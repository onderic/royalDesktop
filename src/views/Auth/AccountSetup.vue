<template>
   <div>
     <!-- Hero Section -->
     <section class="lg:py-16 py-8 relative overflow-hidden ">
      <div class="absolute inset-0 bg-black/70 z-10"></div>
      <div class="absolute inset-0 bg-[url('@/assets/file.jpg')] bg-center bg-cover"></div>
      <div class="relative z-20">
        <div class="mx-auto max-w-7xl">
          <h1 class="text-white font-semibold text-3xl font-serif lg:px-0 px-4 text-center lg:text-left">Setup Account
          </h1>
        </div>
      </div>
    </section>
    <div class="px-4 lg:px-0">
      <div class="p-6 max-w-lg mx-auto bg-white my-10">
      <div v-if="!isSetupComplete">
        <h1 class="text-2xl font-bold mb-4">Set Up Your Account</h1>
        <p class="text-md text-gray-600 mb-6">Please set your new password. Once you submit, your account will be set up and you will be able to log in with your new credentials.</p>
        
        <form @submit.prevent="setupAccount">
          <div class="space-y-6">
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
              <input v-model="password" type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400" placeholder="••••••••" required />
            </div>
  
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input v-model="confirmPassword" type="password" id="confirm-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400" placeholder="••••••••" required />
            </div>
            
          </div>
          
          <div class="flex items-center mt-6 border-t  rounded-b dark:border-gray-700">
            <button type="submit" class="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-primary-800">
              <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
              Set Up Account
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
   </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'; 
import axiosInstance from '@/axiosConfig';
import { useToast } from 'vue-toast-notification';

const password = ref('');
const confirmPassword = ref('');
const isSetupComplete = ref(false);
const loading = ref(false);
const $toast = useToast();
const route = useRoute();
const router = useRouter(); 

const setupAccount = async () => {
  if (password.value !== confirmPassword.value) {
    $toast.error('Passwords do not match.');
    return;
  }

  loading.value = true;
  try {
    await axiosInstance.post('/setup-account/', {
      user_id: route.params.user_id,
      token: route.params.token,
      password: password.value,
    });
    isSetupComplete.value = true;
    $toast.success('Account setup complete. Thank you!');
    router.push('/auth/login');
  } catch (error) {
    console.error('Error setting up account:', error);

    const errorMessage = error.response?.data?.detail || 'Failed to set up account. Please try again.';
    $toast.error(errorMessage);
  } finally {
    loading.value = false;
  }
};

  </script>
  
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  