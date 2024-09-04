<template>
    <div>
        
    
    <nav  class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <v-icon name="fa-bars" class="mr-2 text-sm" />
             </button>
            <a href="" class="flex ms-2 md:me-24">
              <img src="@/assets/logo.jpeg" class="h-8 me-3" alt="" />
              <span class="self-center text-lg font-semibold sm:text-1xl whitespace-nowrap dark:text-white">RoyalPrinceAgencyLtd</span>
            </a>
          </div>
          <div class="flex items-center">
              <div class="flex items-center lg:ms-3 lg:space-x-4">
                <div >
                
                <div class="relative bg-white lg:p-2 p-1 rounded-md hover:text-blue-500">
                  <v-icon name="io-notifications-off-outline" scale="1.2" />
                  
                  <div class="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                </div>
              </div>
    
    
              <div class="bg-white lg:p-2 p-1 rounded-md hover:text-blue-500">
                <v-icon name="io-settings-outline"  scale="1.2" />
              </div>
              
              <AdminNavbarVue />
          
              </div>
            </div>
        </div>
      </div>
    </nav>
    <LoadingIndicator />
    
    <aside id="logo-sidebar" class="lg:opacity-75 fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div class="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
        <!-- Menu Group -->
        <div>
          <h3 class="mb-4 ml-4 text-sm font-bold">MENU</h3>
    
          <ul class="mb-6 flex flex-col gap-1.5">
            <!-- Menu Item Dashboard -->
            <li>
              <router-link
                to="/doctor/dashboard"
                class="group relative hover:bg-blue-600 hover:text-white flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                active-class="bg-blue-600 text-white rounded-lg"
              >
                <!-- SVG Placeholder for Dashboard -->
               
                <v-icon  name="md-dashboard" scale="1.4" />
    
                Dashboard
              </router-link>
    
            
              <!-- Dropdown Menu End -->
            </li>
    
    
      
    
    
            <li>
              <router-link
                 to="/doctor/patients/"
                class="group relative hover:bg-blue-600 hover:text-white flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                active-class="bg-blue-600 text-white rounded-lg"
              >
                <!-- SVG Placeholder for Calendar -->
                <v-icon name="hi-clipboard-list" scale="1.4" />
    
                Patients
              </router-link>
            </li>
    
            
            <div>
            
     
    
            <li>
              
              <router-link
                to="/doctor/settings/"
                class="group relative hover:bg-blue-600 hover:text-white flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                active-class="bg-blue-600 text-white rounded-lg"
              >
                <!-- SVG Placeholder for Settings -->
                <v-icon name="ri-settings-5-line"  scale="1.4" />
                Settings
              </router-link>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </aside>
    
    
    
    
    <div class="lg:p-4 sm:ml-64">
      <div class="px-4 py-8  mt-14">
      <router-view />
      </div>
    </div>
    </div>
    
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    
    import { initDrawers, initDropdowns, initTooltips } from 'flowbite';
    import AdminNavbarVue from '../components/admin/AdminNavbar.vue';
    import LoadingIndicator from '@/components/LoadingIndicator.vue';
    
    // Initialize Flowbite components on mount
    onMounted(() => {
      initDrawers();
      initDropdowns();
      initTooltips();
    });
    
    // Reactive state for the active dropdown menu
    const activeDropdown = ref(null);
    
    // Function to toggle dropdowns
    const toggleDropdown = (menu) => {
      activeDropdown.value = activeDropdown.value === menu ? null : menu;
    };
    </script>
    
    
    <style scoped>
    /* Optional: Styles for the active class, if needed */
    .bg-graydark {
      background-color: #333; /* Example color for active state */
    }
    </style>