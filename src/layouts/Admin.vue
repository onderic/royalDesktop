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
        <a href="/" class="flex ms-2 md:me-24">
          <img src="@/assets/logo.jpeg" class="h-8 me-3" alt="" />
          <span class="self-center text-lg font-semibold sm:text-1xl whitespace-nowrap dark:text-white">RoyalPrinceAgencyLtd</span>
        </a>
      </div>
      <div class="flex items-center">
          <div class="flex items-center  lg:space-x-4">
          
            
            <div class="relative bg-white p-2 rounded-md hover:text-blue-500">
              <v-icon name="io-notifications-off-outline" scale="1.2" />
              
              <div class="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
            </div>
          </div>


          <div class="bg-white p-2 rounded-md hover:text-blue-500">
            <v-icon name="io-settings-outline"  scale="1.2" />
          </div>
          
          <AdminNavbarVue />
      
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
            to="/admin/dashboard"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
            active-class="bg-blue-600 text-white "
          >
            <!-- Adjust the icon color based on the active state -->
            <v-icon
              name="md-dashboard"
              :class="{'text-white': $route.path === '/admin/dashboard', 'text-gray-600': $route.path !== '/admin/dashboard'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/dashboard', 'text-gray-600': $route.path !== '/admin/dashboard'}"
            >
              Dashboard
            </span>
          </router-link>


        
          <!-- Dropdown Menu End -->
        </li>

        <!-- Menu Item Task -->
        <li>
          <a
            @click="toggleDropdown('career')"
              class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
          >
            <!-- SVG Placeholder for Task -->
            
            <v-icon name="bi-person-workspace" class="text-gray-700"  scale="1.4" />
            Careers

            <svg
              class="absolute right-4 top-1/2 -translate-y-1/2 fill-current transition-transform duration-300"
              :class="{ 'rotate-180': activeDropdown === 'career' }"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                fill=""
              ></path>
            </svg>
          </a>

          <!-- Dropdown Menu Start -->
          <div v-if="activeDropdown === 'career'" class="translate transform overflow-hidden">
            <ul class="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
              <li>
                <router-link
                  to="/admin/careers/new"
                  class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-gray-700"
                  active-class="text-blue-500"
                >
                  New Career
                  <span
                    class="absolute right-4 block rounded-full bg-blue-600 px-1 py-1 text-xs font-medium text-white"
                    >New</span
                  >
                </router-link>
              </li>
              <li>
                <router-link
                  to="/admin/careers/manage"
                  class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-md px-4 font-medium duration-300 ease-in-out hover:text-gray-700"
                  active-class="text-blue-500"
                >
                  Manage
                  <!-- <span
                    class="absolute right-4 block rounded-full bg-blue-600 px-1 py-1 text-xs font-medium text-white"
                    >New</span
                  > -->
                </router-link>
              </li>
            </ul>
          </div>
          <!-- Dropdown Menu End -->
        </li>

        <li>
          <router-link
            to="/admin/applications"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
            :class="{'bg-blue-600 text-white ': $route.path === '/admin/applications'}"
          >
            <!-- Adjust the icon color based on the active state -->
            <v-icon
              name="hi-clipboard-list"
              :class="{'text-white': $route.path === '/admin/applications', 'text-gray-700': $route.path !== '/admin/applications'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/applications', 'text-gray-700': $route.path !== '/admin/applications'}"
            >
              Applications
            </span>
          </router-link>
        </li>

        <li>
          <router-link
            to="/admin/agents"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
            :class="{'bg-blue-600 text-white ': $route.path === '/admin/agents'}"
          >
            <!-- Adjust the icon color based on the active state -->
            <v-icon
              name="fa-magento"
              :class="{'text-white': $route.path === '/admin/agents', 'text-gray-700': $route.path !== '/admin/agents'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/agents', 'text-gray-700': $route.path !== '/admin/agents'}"
            >
              Agents
            </span>
          </router-link>
        </li>

        <li>
          <router-link
            to="/admin/complete/applications/"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
            :class="{'bg-blue-600 text-white ': $route.path === '/admin/complete/applications/'}"
          >
            <!-- Adjust the icon color based on the active state -->
            <v-icon
              name="la-hire-a-helper"
              :class="{'text-white': $route.path === '/admin/complete/applications/', 'text-gray-700': $route.path !== '/admin/complete/applications/'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/complete/applications/', 'text-gray-700': $route.path !== '/admin/complete/applications/'}"
            >
              Hired
            </span>
          </router-link>
        </li>

       
        <li>
          <router-link
            to="/admin/categories/"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
            :class="{'bg-blue-600 text-white ': $route.path === '/admin/categories/'}"
          >
            <!-- Adjust the icon color based on the active state -->
            <v-icon
              name="md-category"
              :class="{'text-white': $route.path === '/admin/categories/', 'text-gray-600': $route.path !== '/admin/categories/'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/categories/', 'text-gray-600': $route.path !== '/admin/categories/'}"
            >
              Categories
            </span>
          </router-link>
        </li>

        <!-- <li>
          <router-link
            to="/admin/interviews/"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
            :class="{'bg-blue-600 text-white ': $route.path === '/admin/interviews/'}"
          >
         
            <v-icon
              name="md-meetingroom-outlined"
              :class="{'text-white': $route.path === '/admin/interviews/', 'text-gray-700': $route.path !== '/admin/interviews/'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/interviews/', 'text-gray-700': $route.path !== '/admin/interviews/'}"
            >
            Interviews
            </span>
          </router-link>
        </li> -->

        <!-- <li>
          <router-link
            to="/admin/queue/"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
            :class="{'bg-blue-600 text-white ': $route.path === '/admin/queue/'}"
          >
            
            <v-icon
              name="md-addtoqueue-outlined"
              :class="{'text-white': $route.path === '/admin/queue/', 'text-gray-700': $route.path !== '/admin/queue/'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/queue/', 'text-gray-700': $route.path !== '/admin/queue/'}"
            >
            Queues
            </span>
          </router-link>
        </li> -->

        

       

        <!-- Menu Item Calendar -->
    
        <li>
          <router-link
            to="/admin/companies/"
            class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
            :class="{'bg-blue-600 text-white ': $route.path === '/admin/companies/'}"
          >
            <!-- Adjust the icon color based on the active state -->
            <v-icon
              name="fa-layer-group"
              :class="{'text-white': $route.path === '/admin/companies/', 'text-gray-600': $route.path !== '/admin/companies/'}"
              scale="1.4"
            />
            <span
              :class="{'text-white': $route.path === '/admin/companies/', 'text-gray-600': $route.path !== '/admin/companies/'}"
            >
              Companies
            </span>
          </router-link>
        </li>

        <div>
          <h3 class="mb-4 ml-4 text-sm mt-4 font-bold">Users</h3>
          <!-- Menu Item Users -->
          <li>
            <router-link
              to="/admin/users/"
              class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
              :class="{'bg-blue-600 text-white ': $route.path === '/admin/users/'}"
            >
              <!-- Adjust the icon color based on the active state -->
              <v-icon
              name="px-users"
               :class="{'text-white': $route.path === '/admin/users/', '': $route.path !== '/admin/users/'}"
              scale="1.4"
            />
              
              <span
                :class="{'text-white': $route.path === '/admin/users/', 'text-gray-700': $route.path !== '/admin/users/'}"
              >
                Users
              </span>
            </router-link>
          </li>

          <li>
            <router-link
              to="/admin/settings"
              class="group relative flex items-center hover:bg-blue-50 hover:rounded-full gap-2.5 rounded-full px-4 py-2 font-medium duration-300 ease-in-out  dark:hover:bg-meta-4"
              :class="{'bg-blue-600 text-white ': $route.path === '/admin/settings'}"
            >
              <!-- Adjust the icon color based on the active state -->
              <v-icon
                name="ri-settings-5-line"
                :class="{'text-white': $route.path === '/admin/settings', 'text-gray-700': $route.path !== '/admin/settings'}"
                scale="1.4"
              />
              <span
                :class="{'text-white': $route.path === '/admin/settings', 'text-gray-700': $route.path !== '/admin/settings'}"
              >
                Settings
              </span>
            </router-link>
          </li>
        </div>

      </ul>
    </div>
  </div>
</aside>




<div class="p-4 sm:ml-64">
  <div class="lg:px-4 py-8  mt-14">
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