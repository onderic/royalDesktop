<template>
  <div>
   <!-- First Card Skeleton: Visible only on mobile devices -->
   <div class="relative flex flex-col items-center justify-center overflow-hidden block lg:hidden">
    <div class="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md animate-pulse">
      <!-- Left Section Skeleton -->
      <div>
        <div class="bg-gray-300 h-4 w-32 rounded-md mb-2"></div>
        <div class="bg-gray-300 h-6 w-48 rounded-md mb-2"></div>
        <div class="flex items-center gap-3 mt-2">
          <div class="bg-gray-300 h-6 w-20 rounded-md"></div>
          <span class="flex gap-1 items-center">
            <div class="bg-gray-300 h-4 w-24 rounded-md"></div>
          </span>
        </div>
      </div>

      <!-- Right Section Skeleton -->
      <div class="w-full md:w-64">
        <div class="bg-blue-300 h-10 rounded-md w-full"></div>
      </div>
    </div>
  </div>

  <!-- Full Loader Visible on Medium and Up -->
  <div class="relative overflow-hidden hidden md:flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-800 rounded p-5 space-y-4 md:space-y-0 md:space-x-4">
    <!-- Company Logo and Name -->
    <div class="flex items-center space-x-3 w-full md:w-1/2">
      <div class="size-16 flex items-center justify-center dark:bg-slate-900 dark:shadow-gray-700 rounded-md animate-pulse">
        <div class="bg-gray-300 dark:bg-gray-600 h-12 w-12 rounded-md"></div>
      </div>
      <div class="bg-gray-300 dark:bg-gray-600 h-4 w-32 rounded-md animate-pulse"></div>
    </div>

    <!-- Job Type and Date -->
    <div class="flex flex-col items-start w-full md:w-1/2">
      <div class="bg-gray-300 dark:bg-gray-600 rounded-md py-1 px-4 animate-pulse h-6 w-24"></div>
      <div class="bg-gray-300 dark:bg-gray-600 h-4 w-32 rounded-md animate-pulse mt-2"></div>
    </div>

    <!-- Location and Salary -->
    <div class="w-full md:w-1/2">
      <div class="bg-gray-300 dark:bg-gray-600 h-4 w-32 rounded-md animate-pulse"></div>
      <div class="bg-gray-300 dark:bg-gray-600 h-4 w-24 rounded-md animate-pulse mt-1"></div>
    </div>

    <!-- Apply Button -->
    <div class="w-full md:w-64">
      <div class="bg-blue-300 dark:bg-blue-600 h-10 rounded-md animate-pulse w-full"></div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
