<template>
  <div class="mt-8 px-2 overflow-hidden">
    <p class="text-gray-500 mb-2 font-mono">Promote this job for more candidates:</p>
    <div class="flex flex-wrap gap-1 mt-4">
      <div class="flex space-x-5">
        <!-- Share Button -->
        <button
          @click="copyToClipboard"
          class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs md:text-base lg:text-sm p-3 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        >
          <v-icon name="fa-share" scale="1" />
        </button>

        <!-- Facebook Share Button -->
        <a
          :href="facebookUrl"
          target="_blank"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs md:text-base lg:text-sm p-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <v-icon name="bi-facebook" scale="1" />
        </a>

        <!-- TikTok Share Button -->
        <a
          :href="tiktokUrl"
          target="_blank"
          class="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs md:text-base lg:text-sm p-3 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <v-icon name="io-logo-tiktok" scale="1" />
        </a>

        <!-- WhatsApp Share Button -->
        <a
          :href="whatsappUrl"
          target="_blank"
          class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs md:text-base lg:text-sm p-3 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        >
          <v-icon name="bi-whatsapp" scale="1" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useToast } from 'vue-toast-notification'

// Setup toast notifications
const toast = useToast()

// Define props for the component
const props = defineProps({
  jobId: {
    type: String,
    required: true
  }
})

// Base URL for sharing
const basePublicUrl = computed(() => `${window.location.origin}/careers/${props.jobId}`)

// Function to copy the URL to clipboard
const copyToClipboard = () => {
  navigator.clipboard.writeText(basePublicUrl.value)
    .then(() => toast.success('URL copied to clipboard!'))
    .catch(err => toast.error('Failed to copy URL: ' + err))
}

// Computed URL for Facebook sharing
const facebookUrl = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(basePublicUrl.value)}`)

// Placeholder URL for TikTok sharing (TikTok doesn't support direct sharing via URL)
const tiktokUrl = computed(() => `https://www.tiktok.com/upload`)

// WhatsApp sharing link (replace with your specific WhatsApp group or channel link)
const whatsappUrl = computed(() => `https://wa.me/?text=${encodeURIComponent(basePublicUrl.value)}`)
</script>
