<template>
    <div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <v-icon name="fc-manager" class="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"  />
               
                <div>
                    <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">Account Information</h3>
                    <div class="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <p> {{ userProfile.email }} </p>
                        
                    </div>
                    {{ userProfile.first_name }} {{ userProfile.last_name }}
                    <p class="font-serif capitalize ">Role: {{ userProfile.user_type }} </p>

                </div>
            </div>
        </div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 class="mb-4 text-xl font-semibold dark:text-white">Language &amp; Time</h3>
            <div class="mb-4">
                <label for="settings-language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select language</label>
                <select id="settings-language" name="countries" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option>English (US)</option>
                  
                </select>
            </div>
            <div class="mb-6">
                <label for="settings-timezone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time Zone</label>
                <select id="settings-timezone" name="countries" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option>GMT+0 Greenwich Mean Time (GMT)</option>
                  
                </select>
            </div>
            <div>
                <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save all</button>
            </div>
        </div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div class="flow-root">
                <h3 class="text-xl font-semibold dark:text-white">Social accounts</h3>
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <v-icon name="bi-facebook" scale="1" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                                    Facebook account
                                </span>
                                <a href="#" class="block text-sm font-normal truncate text-primary-700 hover:underline dark:text-primary-500">
                                    www.facebook.com/royalprinceagency/careers
                                </a>
                            </div>
                            <div class="inline-flex items-center">
                                <a href="#" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <svg class="w-5 h-5 dark:text-white" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                                    Twitter account
                                </span>
                                <a href="#" class="block text-sm font-normal truncate text-primary-700 hover:underline dark:text-primary-500">
                                    www.twitter.com/royalprinceagency/careers
                                </a>
                            </div>
                            <div class="inline-flex items-center">
                                <a href="#" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <v-icon name="io-logo-instagram" scale="1" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                                    Instagram account
                                </span>
                                <a href="#" class="block text-sm font-normal truncate text-primary-700 hover:underline dark:text-primary-500">
                                    www.twitter.com/royalprinceagency/careers
                                </a>
                            </div>
                            <div class="inline-flex items-center">
                                <a href="#" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <v-icon name="io-logo-instagram" scale="1" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                                    Instagram account
                                </span>
                                <a href="#" class="block text-sm font-normal truncate text-primary-700 hover:underline dark:text-primary-500">
                                    www.twitter.com/royalprinceagency/careers
                                </a>
                            </div>
                            <div class="inline-flex items-center">
                                <a href="#" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                    <li class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <v-icon name="io-logo-instagram" scale="1" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="block text-base font-semibold text-gray-900 truncate dark:text-white">
                                    Instagram account
                                </span>
                                <a href="#" class="block text-sm font-normal truncate text-primary-700 hover:underline dark:text-primary-500">
                                    www.twitter.com/royalprinceagency/careers
                                </a>
                            </div>
                            <div class="inline-flex items-center">
                                <a href="#" class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Disconnect</a>
                            </div>
                        </div>
                    </li>
                
                </ul>
                <div>
                    <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save all</button>
                </div>
            </div>
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
  router.push({ name: 'home' });
};

onMounted(() => {
  if (authStore.isAuthenticated) {
    fetchUserProfile();
  }
});
</script>
