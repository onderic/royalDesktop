<template>
  <div>
    <apexchart 
      width="100%" 
      type="bar" 
      :options="barOptions" 
      :series="barSeries">
    </apexchart>
  </div>
</template>

<script>
export default {
  name: 'JobChart',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      barOptions: {
        chart: {
          id: 'job-applications-bar',
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          categories: [
            "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"
          ],
          labels: {
            rotate: -45,
            style: {
              fontSize: '12px',
              colors: ['#333']
            }
          }
        },
        title: {
          text: 'Weekly Job Applications',
          align: 'center',
          style: {
            fontSize: '16px',
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
            columnWidth: '45%',
            endingShape: 'rounded'
          }
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
      },
      barSeries: []
    }
  },
  watch: {
    data: {
      handler(newData) {
        this.barSeries = [{
          name: 'Applications',
          data: newData
        }];
      },
      immediate: true // Ensure the watcher runs immediately with the initial value
    }
  }
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
