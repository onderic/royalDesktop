<template>
    <div>
      <apexchart 
        width="100%" 
        height="345px"
        type="donut"
        :options="donutOptions"
        :series="donutSeries"
      >
      </apexchart>
    </div>
  </template>
  
  <script>
  import ApexCharts from 'vue3-apexcharts';
  
  export default {
    name: 'DonutChart',
    components: {
      apexchart: ApexCharts
    },
    data() {
      return {
        // Options and Series for Donut Chart
        donutOptions: {
          chart: {
            type: 'donut'
          },
          labels: ['Consultations', 'Procedures', 'Follow-ups', 'Emergencies'],
          title: {
            text: 'Doctor Actions Breakdown',
            align: 'center',
            style: {
              fontSize: '16px',
              color: '#333',
            },
          },
          colors: ['#1E90FF', '#32CD32', '#FFD700', '#FF4500'],
          dataLabels: {
            enabled: true,
          },
          legend: {
            position: 'bottom'
          },
          responsive: [{
            breakpoint: 600,
            options: {
              chart: {
                width: '100%'
              }
            }
          }]
        },
        donutSeries: [40, 25, 20, 15] 
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  