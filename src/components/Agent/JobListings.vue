<template>
    <div>
      <div class="bg-white rounded-lg p-6">
        <!-- Title Section -->
        <h2 class="text-xl font-semibold mb-4">Job Listings</h2> <!-- Title Added Here -->
        <div class="flex flex-col mb-4">
          <div class="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by Title"
              v-model="searchQuery"
              class="border border-gray-300 p-2 rounded-md w-full"
              @input="debounceSearch"
            />
          </div>
        </div>
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Posted Date
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <!-- Skeleton Loader Rows -->
                  <tr v-if="isLoading">
                    <td colspan="5">
                      <div
                        v-for="index in 10"
                        :key="index"
                        class="flex justify-between p-4 space-x-3"
                      >
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/2"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                      </div>
                    </td>
                  </tr>
                  <!-- No Results Found -->
                  <tr v-if="!isLoading && filteredJobs.length === 0">
                    <td colspan="5" class="p-4 text-center text-gray-500 dark:text-gray-400">
                      No results found!
                    </td>
                  </tr>
                  <tr v-for="job in filteredJobs" :key="job.id" v-else>
                    <td class="p-4 whitespace-nowrap">
                    <router-link :to="{ name: 'career-detail', params: { id: job.id } }" class="text-blue-500 hover:underline">
                        {{ job.position }}
                    </router-link>
                    </td>

                    <td class="p-4 whitespace-nowrap">{{ job.country }}</td>
                    <td class="p-4 whitespace-nowrap">{{ job.posted_date }}</td>
                    <td class="p-4 whitespace-nowrap capitalize">
                      <span :class="statusClass(job.status)">
                        {{ job.status }}
                      </span>
                    </td>
                    <td class="p-4 whitespace-nowrap flex gap-2 bg-white">
                      <button
                        @click="openModal(job.id)"
                        type="button"
                        class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                      >
                        <svg
                          class="w-4 h-4 -ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Add
                      </button>
  
                      <router-link
                        :to="{ name: 'career-detail', params: { id: job.id } }"
                        class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-purple-600 text-white px-3 py-2 text-sm font-medium hover:bg-purple-700 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-purple-100 dark:border-purple-600 dark:bg-purple-800 dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-700 lg:w-auto"
                      >
                        View
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Application
            :isModalOpen="isModalOpen"
            @update:isModalOpen="isModalOpen = $event"
            :id="String(selectedJobId)"
            :agentId="String(userProfile.id)"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useAuthStore } from '@/stores/authStore';
  import axiosInstance from '@/axiosConfig';
  import Application from '@/components/Application.vue';
  
  const authStore = useAuthStore();
  const userProfile = ref({ id: '', first_name: '', email: '', last_name: '' });
  const jobs = ref([]);
  const isLoading = ref(true);
  const searchQuery = ref('');
  const debounceTimeout = ref(null);
  const isModalOpen = ref(false);
  const selectedJobId = ref(null);
  
  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get('/user/profile');
      userProfile.value = response.data;
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };
  
  const openModal = (jobId) => {
    selectedJobId.value = jobId;
    isModalOpen.value = true;
  };
  
  const getJobs = async (query = '') => {
    isLoading.value = true;
    try {
      const response = await axiosInstance.get('/job', { params: { search: query } });
      jobs.value = response.data.results;
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      isLoading.value = false;
    }
  };
  
  const statusClass = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-600';
      case 'inactive':
        return 'text-red-600';
      case 'pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-500';
    }
  };
  
  // Debounce search function
  const debounceSearch = () => {
    clearTimeout(debounceTimeout.value);
    debounceTimeout.value = setTimeout(() => {
      getJobs(searchQuery.value);
    }, 200);
  };
  
  const filteredJobs = computed(() => {
    if (!searchQuery.value) {
      return jobs.value;
    }
    const lowerQuery = searchQuery.value.toLowerCase();
    return jobs.value.filter(job =>
      job.position.toLowerCase().includes(lowerQuery) ||
      job.country.toLowerCase().includes(lowerQuery)
    );
  });
  
  onMounted(() => {
    if (authStore.isAuthenticated) {
      fetchUserProfile();
      getJobs();
    }
  });
  </script>
  