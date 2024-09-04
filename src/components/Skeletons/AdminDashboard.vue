<template>
    <div class="lg:grid lg:grid-cols-4 lg:gap-6 space-y-4 lg:space-y-0">
      <!-- Placeholder for AdminDashboard -->
      <div class="lg:col-span-3 space-y-4">
       
        
        <!-- Placeholder for CardBoxWidget components -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div class="bg-white shadow-lg shadow-gray-200 rounded-lg w-92 p-6 flex items-center space-x-4">
                <!-- Left Side -->
                <div class="flex-1">
                <div class="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div class="h-6 bg-gray-300 rounded w-1/2"></div>
                </div>

                <!-- Right Side -->
                <div class="flex items-center justify-center relative">
                <div class="w-24 h-24 flex items-center justify-center">
                    <div class="w-full h-full flex items-center justify-center bg-gray-300 rounded-full animate-pulse"></div>
                </div>
                </div>
            </div>
            <div class="bg-white shadow-lg shadow-gray-200 rounded-lg w-92 p-6 flex items-center space-x-4">
                <!-- Left Side -->
                <div class="flex-1">
                <div class="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div class="h-6 bg-gray-300 rounded w-1/2"></div>
                </div>

                <!-- Right Side -->
                <div class="flex items-center justify-center relative">
                <div class="w-24 h-24 flex items-center justify-center">
                    <div class="w-full h-full flex items-center justify-center bg-gray-300 rounded-full animate-pulse"></div>
                </div>
                </div>
            </div>
            <div class="bg-white shadow-lg shadow-gray-200 rounded-lg w-92 p-6 flex items-center space-x-4">
                <!-- Left Side -->
                <div class="flex-1">
                <div class="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div class="h-6 bg-gray-300 rounded w-1/2"></div>
                </div>

                <!-- Right Side -->
                <div class="flex items-center justify-center relative">
                <div class="w-24 h-24 flex items-center justify-center">
                    <div class="w-full h-full flex items-center justify-center bg-gray-300 rounded-full animate-pulse"></div>
                </div>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-slate-900 shadow-md rounded-lg p-4 lg:col-span-2">
            
            <div class="bg-white dark:bg-gray-700 h-64 rounded-lg animate-pulse"></div>

        <!-- Placeholder for Applications section -->
      
        <div class="bg-white dark:bg-gray-700 h-64 rounded-lg animate-pulse"></div>
          </div>
          <div class="bg-white shadow-md rounded-lg p-4 lg:col-span-1 dark:bg-gray-800 dark:text-white">
        </div>
    </div>
       
  
       
      </div>
  
      <!-- Placeholder for Calendar component and Scheduled Meetings -->
      <div class="lg:col-span-1 space-y-4 h-full">
        <div class="bg-white shadow-md rounded-lg p-4 max-w-full overflow-hidden animate-pulse">
          <div class="h-32 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div> 
          <div class="mt-4 px-4">
            <div class="h-6 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div> 
            <ul class="space-y-6 mt-4">
              <li class="flex items-start justify-between space-x-3">
                <div class="h-8 w-8 bg-white dark:bg-gray-700 rounded-full animate-pulse"></div> 
                <div class="flex-1 flex flex-col items-start space-y-2">
                  <div class="h-4 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div> 
                  <div class="h-4 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div> 
                </div>
                <div class="h-4 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div> 
              </li>
              <li class="flex items-start justify-between space-x-3">
                <div class="h-8 w-8 bg-white dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div class="flex-1 flex flex-col items-start space-y-2">
                  <div class="h-4 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div>
                  <div class="h-4 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div>
                </div>
                <div class="h-4 bg-white dark:bg-gray-700 rounded-lg animate-pulse"></div>
              </li>
              <!-- Repeat the above <li> block as needed for additional scheduled meetings -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonLoader',
  };
  </script>
  