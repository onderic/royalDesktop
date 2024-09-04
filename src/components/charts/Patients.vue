<template>
    <apexchart 
      width="100%" 
      height="300px"
      type="line" 
      :options="lineOptions" 
      :series="lineSeries">
    </apexchart>
  </template>
  
  <script setup>
  import {  ref, watch } from 'vue';
  import ApexCharts from 'vue3-apexcharts';
  
  // Define props to receive data
  const props = defineProps({
    maleCountsPerMonth: {
      type: Array,
      default: () => []
    },
    femaleCountsPerMonth: {
      type: Array,
      default: () => []
    }
  });
  
  const lineOptions = ref({
    chart: {
      id: 'patients-line',
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months of the year
      labels: {
        rotate: -45,
        style: {
          fontSize: '12px',
          colors: ['#333']
        }
      }
    },
    title: {
      text: 'Patient Gender Comparison',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#333',
      },
    },
    colors: ['#007bff', '#ff5722'], 
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      borderColor: '#e0e0e0'
    },
    theme: {
      mode: 'light'
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          width: '100%'
        },
        xaxis: {
          labels: {
            rotate: -30
          }
        }
      }
    }]
  });
  
  const lineSeries = ref([
    {
      name: 'Male Patients',
      data: props.maleCountsPerMonth
    },
    {
      name: 'Female Patients',
      data: props.femaleCountsPerMonth
    }
  ]);
  
  watch(() => props.maleCountsPerMonth, (newValue) => {
    lineSeries.value[0].data = newValue;
  });
  
  watch(() => props.femaleCountsPerMonth, (newValue) => {
    lineSeries.value[1].data = newValue;
  });
  </script>
  
  <style scoped>

  </style>
  