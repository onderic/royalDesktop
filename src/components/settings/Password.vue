<template>
    <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 class="mb-4 text-xl font-semibold dark:text-white">Password information</h3>
      <form @submit.prevent="handlePasswordChange">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3 relative">
            <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current password</label>
            <input v-model="currentPassword" :type="passwordType.current" id="current-password" name="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required>
            <button type="button" @click="togglePasswordVisibility('current')" class="absolute mt-4 right-2 top-1/2 transform -translate-y-1/2">
              <v-icon :name="passwordType.current === 'password' ? 'fa-eye-slash' : 'bi-eye'" class="text-gray-500" scale="1.5" />
            </button>
          </div>
          <div class="col-span-6 sm:col-span-3 relative">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
            <input v-model="newPassword" :type="passwordType.new" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required>
            <button type="button" @click="togglePasswordVisibility('new')" class="absolute mt-4 right-2 top-1/2 transform -translate-y-1/2">
              <v-icon :name="passwordType.new === 'password' ? 'fa-eye-slash' : 'bi-eye'" class="text-gray-500" scale="1.5" />
            </button>
          </div>
          <div class="col-span-6 sm:col-span-3 relative">
            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input v-model="confirmNewPassword" :type="passwordType.confirm" id="confirm-password" name="confirm-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required>
            <button type="button" @click="togglePasswordVisibility('confirm')" class="absolute mt-4 right-2 top-1/2 transform -translate-y-1/2">
              <v-icon :name="passwordType.confirm === 'password' ? 'fa-eye-slash' : 'bi-eye'" class="text-gray-500" scale="1.5" />
            </button>
          </div>
          <div class="col-span-6 sm:col-full">
            <button type="submit" class="btn">
                <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                Save Password</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  

  <script setup>
  import { ref } from 'vue';
  import axiosInstance from '@/axiosConfig';
  import { useToast } from 'vue-toast-notification';

  
  const currentPassword = ref('');
  const newPassword = ref('');
  const confirmNewPassword = ref('');
  const passwordType = ref({
    current: 'password',
    new: 'password',
    confirm: 'password'
  });
  const loading = ref(false);
  const errors = ref({});
  const $toast = useToast();
  
  const togglePasswordVisibility = (field) => {
    passwordType.value[field] = passwordType.value[field] === 'password' ? 'text' : 'password';
  };
  
  const handlePasswordChange = async () => {
    loading.value = true;
    try {
      await axiosInstance.post('/change-password/', {
        current_password: currentPassword.value,
        new_password: newPassword.value,
        confirm_new_password: confirmNewPassword.value,
      });
      $toast.success('Password changed successfully!');
      errors.value = {};
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessages = error.response.data;
        const firstError = Object.values(errorMessages)[0][0];
        $toast.error(firstError); 
      } else {
        $toast.error('Error changing password.');
      }
    } finally {
      loading.value = false;
    }
  };
  </script>