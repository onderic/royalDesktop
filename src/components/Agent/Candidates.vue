<template>
    <div>
      <div class="bg-white rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Candidates</h2>
        <div class="flex flex-col mb-4">
          <div class="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by Name or Role"
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
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Name</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Gender</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Role Applied</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Phone</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Email</th>
                   
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <!-- Skeleton Loader Rows -->
                  <tr v-if="isLoading">
                    <td colspan="6">
                      <div v-for="index in 10" :key="index" class="flex justify-between p-4 space-x-3">
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/2"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                        <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                      </div>
                    </td>
                  </tr>
                  <!-- No Results Found -->
                  <tr v-if="!isLoading && filteredCandidates.length === 0">
                    <td colspan="6" class="p-4 text-center text-gray-500 dark:text-gray-400">No results found!</td>
                  </tr>
                  <tr v-for="candidate in filteredCandidates" :key="candidate.id">
                    <td class="p-4 whitespace-nowrap">{{ candidate.name }}</td>
                    <td class="p-4 whitespace-nowrap capitalize">{{ candidate.gender }}</td>
                    <td class="p-4 whitespace-nowrap">
                    <router-link :to="{ name: 'career-detail', params: { id: candidate.job.id } }" class="text-blue-500 hover:underline">
                        {{ candidate.job.position }}
                    </router-link>
                    </td>
                    <td class="p-4 whitespace-nowrap">{{ candidate.phone }}</td>
                    <td class="p-4 whitespace-nowrap">{{ candidate.email }}</td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import axiosInstance from '@/axiosConfig';

const authStore = useAuthStore();
const userProfile = ref({ id: '', first_name: '', email: '', last_name: '' });
const candidates = ref([]);
const isLoading = ref(true);
const searchQuery = ref('');
const debounceTimeout = ref(null);


const fetchUserProfile = async () => {
  try {
    const response = await axiosInstance.get('/user/profile');
    userProfile.value = response.data;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
  }
};



const getCandidates = async (query = '') => {
  isLoading.value = true;
  try {
    const response = await axiosInstance.get('/agent-applications', { 
      params: { search: query, agent: userProfile.value.id } 
    });
    candidates.value = response.data.applications;
  } catch (error) {
    console.error('Error fetching candidates:', error);
  } finally {
    isLoading.value = false;
  }
};

const debounceSearch = () => {
  clearTimeout(debounceTimeout.value);
  debounceTimeout.value = setTimeout(() => {
    getCandidates(searchQuery.value);
  }, 200);
};

const filteredCandidates = computed(() => {
  if (!searchQuery.value) {
    return candidates.value;
  }
  const lowerQuery = searchQuery.value.toLowerCase();
  return candidates.value.filter(candidate =>
    candidate.name.toLowerCase().includes(lowerQuery) ||
    candidate.roleApplied.toLowerCase().includes(lowerQuery)
  );
});

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await fetchUserProfile(); 
    getCandidates();
  }
});
</script>