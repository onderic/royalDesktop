<template>
   <div>
  <div class="h-screen bg-gray-100 flex justify-center items-center my-16 lg:px-0 px-4  dark:bg-gray-900">
    <div class="w-full max-w-lg p-8 bg-white rounded-lg lg border border-gray-300 dark:bg-gray-800">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center">Login to Your Account</h2>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div>
          <label for="identifier" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email or phone number</label>
          <input
            v-model="formData.identifier"
            type="text"
            name="identifier"
            id="identifier"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Enter your email or phone number"
            required
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            v-model="formData.password"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              name="remember"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="ms-3 text-sm">
            <label class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
          </div>
          <a href="#" class="ms-auto text-sm font-medium text-purple-500 hover:underline dark:text-orange-500">Lost Password?</a>
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
          Login to your account
        </button>
        <!-- <div class="text-sm font-medium text-gray-900 dark:text-white text-center">
          Not registered yet? 
          <router-link to="/auth/register">
            <a class="text-purple-600 hover:underline dark:text-purple-500">Create account</a>
          </router-link>
        </div> -->
      </form>
    </div>
  </div>
   </div>
</template>



<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const formData = ref({
  identifier: '',
  password: '',
});
const authStore = useAuthStore();
const $toast = useToast();
const router = useRouter();
const loading = ref(false);

const login = async () => {
  loading.value = true;
  try {
    const response = await axios.post('/login/', {
      identifier: formData.value.identifier,
      password: formData.value.password,
    });
    
    const { access, refresh, role } = response.data;
    authStore.setTokens(access, refresh,role);

    if (role === 'superuser') {
      router.push('/admin/dashboard');
    } else if (role === 'admin') {
      router.push('/admin/dashboard');
    } else if (role === 'agent') {
      router.push('/agent/dashboard');
    }else if (role === 'user') {
      router.push('/user/Dashboard');
    } else if (role === 'doctor') {
      router.push('/doctor/dashboard');
    } else {
      router.push('/');
    }

    $toast.info('Login successful');

  } catch (error) {
    if (error.response && error.response.data && error.response.data.detail) {
      $toast.error(error.response.data.detail);
    } else {
      $toast.error('Something went wrong');
    }
  } finally {
    loading.value = false;
  }
};
</script>
