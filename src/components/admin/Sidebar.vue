<template>
    <nav
      class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden border-r border-gray-300 lg:opacity-70 bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
    >
      <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
      >
        <!-- Toggler -->
        <button
          class="cursor-pointeropacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
        >  
        <v-icon name="fa-bars"  class=" text-grey-600"  scale="1.2" />
     
        </button>
        <!-- Brand -->
        <router-link
    class="flex items-center text-black font-bold px-4"
    to="/"
  >
    <img
      src="../../assets/logo.jpeg"
      alt="RoyalPrinceAgencyLtd Logo"
      class="h-8 mr-2"
    />
    <span class="text-md uppercase">RoyalPrinceAgencyLtd</span>
  </router-link>
        <!-- User -->
        <ul class="md:hidden items-center flex flex-wrap list-none">
          <li class="inline-block relative">
            <notification-dropdown />
          </li>
          <li class="inline-block relative">
            <user-dropdown />
          </li>
        </ul>
        <!-- Collapse -->
        <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
          v-bind:class="collapseShow"
        >
          <!-- Collapse header -->
          <div
            class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200"
          >
            <div class="flex flex-wrap">
              <div class="w-6/12">
                <router-link
                  class="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  to="/"
                >
               RoyalPrinceAgencyLtd
                </router-link>
              </div>
              <div class="w-6/12 flex justify-end">
                <button
                  type="button"
                  class="cursor-pointer  md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  v-on:click="toggleCollapseShow('hidden')"
                >
                <font-awesome-icon :icon="['fas', 'times']" class="ext-grey-600" />
                </button>
              </div>
            </div>
          </div>
          <!-- Form -->
          <form class="mt-6 mb-4 md:hidden">
            <div class="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search"
                class="border-0 px-3 py-2 h-12  border-solid border-gray-500 placeholder-gray-300 text-gray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              />
            </div>
          </form>
  
          <!-- Divider -->
          <!-- <hr class="my-4 md:min-w-full" /> -->
          <!-- Heading -->
          <h6
            class="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            MENU
          </h6>
          <!-- Navigation -->
          <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link to="/admin/dashboard" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate, toggleCollapseShow('hidden')"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-gray-700 hover:text-gray-500',
                ]"
              >
                <v-icon name="md-dashboard" class="mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-gray-500']" />
                Dashboard
              </a>
            </router-link>
          </li>
          

          <li class="items-center">
            <router-link to="/admin/settings" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate, toggleCollapseShow('hidden')"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-gray-700 hover:text-gray-500',
                ]"
              >
                <v-icon name="io-settings-sharp" class="mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-gray-500']" />
                Settings
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/users" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate, toggleCollapseShow('hidden')"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-blue-500 hover:text-blue-600'
                    : 'text-gray-700 hover:text-gray-500',
                ]"
              >
                <v-icon name="px-users" class="mr-2 text-sm" :class="[isActive ? 'opacity-75' : 'text-gray-500']" />
                Users
              </a>
            </router-link>
          </li>

  
            <li class="items-center">
              <router-link to="/admin/maps" v-slot="{ href, navigate, isActive }">
                <a
                  :href="href"
                   @click="navigate, toggleCollapseShow('hidden')"
                  class="text-xs uppercase py-3 font-bold block"
                  :class="[
                    isActive
                      ? 'text-blue-500 hover:text-blue-600'
                      : 'text-gray-700 hover:text-gray-500',
                  ]"
                >
                  <!-- <i
                    class="fas fa-map-marked mr-2 text-sm"
                    :class="[isActive ? 'opacity-75' : 'text-gray-300']"
                  ></i>
                  Maps -->
                </a>
              </router-link>
            </li>
          </ul>
  
          <!-- Divider -->
          <hr class="my-4 md:min-w-full" />
          <!-- Heading -->
          <h6
            class="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            Manage Products
          </h6>
          <!-- Navigation -->
  
         
  
          <!-- Divider -->
          <hr class="my-4 md:min-w-full" />
          <!-- Heading -->
          <h6
            class="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
          >
            Settings
          </h6>
          <!-- Navigation -->
  
      
  
          <!-- Divider -->
          <hr class="my-4 md:min-w-full" />
          <!-- Heading -->
         
        </div>
      </div>
    </nav>
  </template>

  
  <script>

  import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
  
  export default {
    data() {
      return {
        collapseShow: "hidden",
      };
    },
    methods: {
      toggleCollapseShow: function (classes) {
        this.collapseShow = classes;
      },
    },
    components: {
  
      UserDropdown,
    },
  };

  
  </script>


