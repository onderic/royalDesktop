<template>
<div>
  <div class="bg-white p-2 rounded-md hover:text-blue-500">
              <button type="button" class="flex text-sm bg-gray-400 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <v-icon name="fc-manager" class="w-8 h-8 rounded-full" />
              
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  {{ userProfile.first_name }} {{ userProfile.last_name }}
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  {{ userProfile.email }}
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
              
                <li>
                  <a @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
</div>
</template>
  

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import axiosInstance from '@/axiosConfig';

const authStore = useAuthStore();
const router = useRouter();
const userProfile = ref({ first_name: '', email: '', last_name: '' });

const fetchUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/user/profile');
    userProfile.value = response.data;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
  }
};

const logout = () => {
  authStore.logout();
  router.push({ name: 'login' });
};

onMounted(() => {
  if (authStore.isAuthenticated) {
    fetchUserProfile();
  }
});
</script>
