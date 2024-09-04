<template>
    <div class="mt-20 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <!-- Bar Chart for Job Applications by Month -->
      <div class="chart-wrapper mb-6">
        <apexchart 
          width="800" type="bar" 
          :options="barOptions" :series="barSeries">
        </apexchart>
      </div>
      <hr class="my-6 border-gray-200 dark:border-gray-700">
      <!-- Line Chart for Job Applications by Type -->
      <div class="chart-wrapper">
        <apexchart 
          width="800" type="line" 
          :options="lineOptions" :series="lineSeries">
        </apexchart>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JobCharts',
    data() {
      return {
        // Options for the bar chart
        barOptions: {
          chart: {
            id: 'job-applications-bar'
          },
          xaxis: {
            categories: [
              "Jan", "Feb", "Mar", "Apr", "May",
              "Jun", "Jul", "Aug", "Sep", "Oct",
              "Nov", "Dec"
            ]
          },
          title: {
            text: 'Job Applications by Month',
            align: 'center',
            style: {
              fontSize: '20px',
              color: '#333', 
            },
          },
          colors: ['#007bff'],
          dataLabels: {
            enabled: true
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            }
          },
          theme: {
            mode: 'light' 
          }
        },
       
        barSeries: [],
  
        // Options for the line chart
        lineOptions: {
          chart: {
            id: 'job-applications-line'
          },
          xaxis: {
            categories: [
              "Jan", "Feb", "Mar", "Apr", "May",
              "Jun", "Jul", "Aug", "Sep", "Oct",
              "Nov", "Dec"
            ]
          },
          title: {
            text: 'Job Applications by Type',
            align: 'center',
            style: {
              fontSize: '20px',
              color: '#333', 
            },
          },
          colors: ['#28a745', '#dc3545'],
          dataLabels: {
            enabled: true
          },
          plotOptions: {
            line: {
              curve: 'smooth'
            }
          },
          theme: {
            mode: 'light' 
          }
        },
        // Series for the line chart (applications by type)
        lineSeries: []
      }
    },
    mounted() {
      // Simulate fetching data for the bar chart
      setTimeout(() => {
        this.barSeries = [{
          name: 'Applications',
          data: [150, 200, 180, 220, 250, 210, 300, 270, 260, 290, 320, 350]
        }];
  
        // Simulate fetching data for the line chart
        this.lineSeries = [
          {
            name: 'Full-Time',
            data: [100, 150, 120, 170, 200, 180, 250, 220, 210, 240, 270, 300]
          },
          {
            name: 'Part-Time',
            data: [50, 50, 60, 50, 50, 30, 50, 50, 50, 50, 50, 50]
          }
        ];
      }, 800); 
    }
  }
  </script>
  
  <style scoped>
  .chart-wrapper {
    @apply flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg;
  }
  
  hr {
    @apply my-6 border-t border-gray-200 dark:border-gray-700;
  }
  </style>
  