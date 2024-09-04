<template>
    <div class="bg-white shadow-lg shadow-gray-200 rounded-lg w-92 p-6 flex items-center">
      <!-- Left Side -->
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-gray-400">{{ label }}</h3>
        <p class="text-3xl font-bold">{{ formattedNumber }}</p>
      </div>
  
      <!-- Right Side -->
      <div class="flex items-center justify-center relative">
        <div class="w-24 h-24 flex items-center justify-center">
          <svg class="w-full h-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <!-- Background Circle -->
            <path
              class="text-gray-200"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              d="M18 2.5a15.5 15.5 0 1 1-15.5 15.5A15.5 15.5 0 0 1 18 2.5z"
            ></path>
            <!-- Progress Circle -->
            <path
              :class="circleColor"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              :stroke-dasharray="`${percentage} 100`"
              d="M18 2.5a15.5 15.5 0 1 1-15.5 15.5A15.5 15.5 0 0 1 18 2.5z"
            ></path>
            <text
            x="50%"
            y="50%"
            text-anchor="middle"
            alignment-baseline="middle"
            :style="{ fontSize: '8px', fontWeight: 'normal', fill: '#4B5563' }"
          >
            {{ percentage }}%
          </text>
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardBoxWidget',
    props: {
      number: {
        type: Number,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      circleColor: {
        type: String,
        default: 'text-blue-500',
      },
      percentage: {
        type: Number,
        default: 80,
      },
    },
    data() {
      return {
        displayedNumber: 0,
      };
    },
    computed: {
      formattedNumber() {
        if (this.number >= 1_000_000) {
          return `${(this.number / 1_000_000).toFixed(1)}M`;
        } else if (this.number >= 1_000) {
          return `${(this.number / 1_000).toFixed(2)}k`;
        } else if (this.number >= 100) {
          return `${(this.number / 1_000).toFixed(1)}k`;
        } else if (this.number >= 10) {
          return `${(this.number / 1_000).toFixed(2)}k`;
        } else if (this.number >= 1) {
          return `${(this.number / 1_000).toFixed(3)}k`;
        } else {
          return this.number;
        }
      },
    },
    mounted() {
      this.animateNumber();
    },
    methods: {
      animateNumber() {
        const start = 0;
        const end = this.number;
        const duration = 2000;
        const stepTime = 50;
        const steps = Math.ceil(duration / stepTime);
        const increment = (end - start) / steps;
  
        let currentNumber = start;
  
        const interval = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= end) {
            this.displayedNumber = end;
            clearInterval(interval);
          } else {
            this.displayedNumber = Math.floor(currentNumber);
          }
        }, stepTime);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here if needed */
  </style>
  