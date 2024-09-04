<template>
    <div>
        <div class="">
          <!-- Dashboard Grid Layout -->
          <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <!-- First Column -->
            <div class="lg:col-span-1">
              <!-- Nested Grid for the First Column -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <!-- Big Card on the Left -->
                <div class="lg:col-span-1">
                <div class="bg-white p-4 rounded-lg shadow h-full">
                  <div class="relative flex items-center justify-center">
                    <svg width="100" height="100" viewBox="0 0 100 100" class="lg-w-full lg-h-auto w-64 h-64">
                      <!-- Female Circle Segment -->
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#a78bfa"
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="282"
                        :stroke-dashoffset="282 * (1 - (genderDistribution.percentages.female / 100))"
                      />
                      <!-- Male Circle Segment -->
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#6d28d9 "
                        stroke-width="10"
                        fill="none"
                        stroke-dasharray="282"
                        :stroke-dashoffset="282 * (1 - (genderDistribution.percentages.male / 100))"
                        :transform="'rotate(' + genderDistribution.percentages.female * 3.6 + ' 50 50)'"
                      />
                    </svg>
                    <!-- Text Below the Circle -->
                    <div class="absolute flex flex-col items-center">
                      <span class="lg:text-md font-bold text-gray-500">Total Patients</span>
                      <span class="text-xl font-bold text-gray-500 mt-1">{{totalPatients}}</span>
                    </div>
                  </div>
                  <!-- Percentage Distribution -->
                  <div class="mt-4 flex flex-col items-center text-center">
                    <p class="text-sm font-serif flex items-center mt-2">
                      <span class="text-purple-300 text-4xl mr-2">•</span>
                      Female: {{genderDistribution.counts.female}} ({{genderDistribution.percentages.female}}%)
                    </p>
                    <p class="text-sm font-serif flex items-center">
                      <span class="text-purple-600 text-4xl mr-2">•</span>
                      Male: {{genderDistribution.counts.male}} ({{genderDistribution.percentages.male}}%)
                    </p>
                  </div>
                </div>
              </div>

        <!-- Two Smaller Cards on the Right -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-1">
          <div class="bg-white p-4 rounded-lg shadow">
            <div class="flex flex-col gap-5">
                  <h4 class="text-xl font-semibold mb-2 text-gray-600 font-serif">New Patients</h4>
                  <div class="flex justify-between items-center">
                    <h2 class="text-4xl font-bold my-0">{{totalPatients}}</h2>
                    <div class="flex items-center">
                      <span class="bg-green-100 text-green-800 py-1 px-3 text-sm rounded-full flex items-center">
                        <i class="fa fa-angle-up mr-2"></i> 39%
                      </span>
                    </div>
                  </div>
                </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <div class="flex flex-col gap-5">
                  <h4 class="text-xl font-semibold mb-2 text-gray-600 font-serif">Total Patients</h4>
                  <div class="flex justify-between items-center">
                    <h2 class="text-4xl font-bold my-0">{{totalPatients}}</h2>
                    <div class="flex items-center">
                      <span class="bg-red-100 text-red-800 py-1 px-3 text-sm rounded-full flex items-center">
                        <i class="fa fa-angle-up mr-2"></i> 100%
                      </span>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Column -->
   
  <div class="lg:col-span-1">
    <div class="bg-white p-4 rounded-lg shadow h-full">
      <div class="flex justify-between mb-4">
        <h1 class="text-xl font-serif text-start font-semibold">Your Patients This Week</h1>
        <router-link to="/doctor/patients/" class="text-gray-400">
          <a>All patients <span> <v-icon name="fa-arrow-right" class="text-gray-400" scale="0.8" /></span> </a>
        </router-link>
      </div>
      <ul class="space-y-2">
        <li
          v-for="patient in patientsToday"
          :key="patient.id"
          class="flex items-center justify-between border-b border-stroke relative"
        >
          <span class="text-gray-500 text-sm">{{ formatDate(patient.created_at) }}</span>
          <div class="flex-1 mx-4 text-center">
            <h2 class="text-md font-medium">{{ patient.application.name }}</h2>
            <p class="text-sm text-gray-600">Age: {{ calculateAge(patient.application.dob) }} | Gender: {{ capitalizeFirstLetter(patient.application.gender) }}</p>
          </div>
          <button @click="toggleDropdown(patient.id)" class="text-gray-500 hover:text-gray-700">
            <v-icon name="bi-three-dots-vertical" scale="1" />
          </button>
          <!-- Dropdown Menu -->
          <div
            v-if="activeDropdown === patient.id"
            class="absolute top-full right-0  w-24 text-xs bg-white border border-gray-200 rounded-sm shadow-lg z-10"
          >
            <ul>
              <li class="px-4 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">Details</li>
              <li class="px-4 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">Edit</li>
              <li class="px-4 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">Delete</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>



    <!-- Third Column -->
    <div class="lg:col-span-1">
      <div class="bg-white p-4 rounded-lg shadow h-full">
        <h1 class="text-xl font-semibold text-center font-serif mb-4">Upcoming Appointments</h1>
        <ul class="space-y-2">
        <li
          v-for="patient in patientsToday"
          :key="patient.id"
          class="flex items-center justify-between border-b border-stroke relative"
        >
          <span class="text-gray-500 text-sm">{{ formatDate(patient.created_at) }}</span>
          <div class="flex-1 mx-4 text-center">
            <h2 class="text-md font-medium">{{ patient.application.name }}</h2>
            <p class="text-sm text-gray-600">Age: {{ calculateAge(patient.application.dob) }} | Gender: {{ capitalizeFirstLetter(patient.application.gender) }}</p>
          </div>
          <button @click="toggleDropdown(patient.id)" class="text-gray-500 hover:text-gray-700">
            <v-icon name="bi-three-dots-vertical" scale="1" />
          </button>
          <!-- Dropdown Menu -->
          <!-- <div
            v-if="activeDropdown === patient.id"
            class="absolute top-full right-0  w-24 text-xs bg-white border border-gray-200 rounded-sm shadow-lg z-10"
          >
            <ul>
              <li class="px-4 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">Details</li>
              <li class="px-4 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">Edit</li>
              <li class="px-4 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">Delete</li>
            </ul>
          </div> -->
        </li>
      </ul>
      </div>
    </div>
  </div>
</div>

      <!-- Chart and Card Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <!-- Chart Column (spanning 2 columns on large screens) -->
        <div class="col-span-1 lg:col-span-2">
          <div class="bg-white p-4 lg:p-8 rounded-sm shadow-md max-w-full mx-auto">
            <Patients :maleCountsPerMonth="maleCountsPerMonth" :femaleCountsPerMonth="femaleCountsPerMonth" />
          </div>
        </div>
  
        <!-- Single Card Column -->
        <div class="col-span-1 ">
          <div class="bg-white p-4 lg:p-8 rounded-sm shadow-md max-w-lg mx-auto">
            <Donut />
          </div>
        </div>
      </div>
    </div>
    
  </template>
  

  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import Patients from '@/components/charts/Patients.vue';
  import Donut from '@/components/charts/Donut.vue';
  import axiosInstance from '@/axiosConfig';
  
  const totalPatients = ref(0);
  const patientsToday = ref([]);
  const genderDistribution = ref({ counts: { female: 0, male: 0 }, percentages: { female: 0, male: 0 } });
  const maleCountsPerMonth = ref([]);
  const femaleCountsPerMonth = ref([]);

  const activeDropdown = ref(null);

  function toggleDropdown(patientId) {

    activeDropdown.value = activeDropdown.value === patientId ? null : patientId;
  }

    
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/doctor-reports');
        const data = response.data;
        console.log("data", data)
        totalPatients.value = data.total_patients;
        patientsToday.value = data.latest_patients;
        genderDistribution.value = data.gender_distribution;
        maleCountsPerMonth.value = data.male_counts_per_month;
        femaleCountsPerMonth.value = data.female_counts_per_month;
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    
    onMounted(fetchData);
    
    function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function calculateAge(dob) {
    return 'N/A';
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    const patientsData = computed(() => ({
      totalPatients: totalPatients.value,
      patientsToday: patientsToday.value
    }));
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  