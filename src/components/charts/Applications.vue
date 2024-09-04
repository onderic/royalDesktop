<template>
  <div>
    <apexchart 
      width="100%" height="300" type="line" 
      :options="lineOptions" 
      :series="lineSeries">
    </apexchart>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import ApexCharts from 'vue3-apexcharts'

const props = defineProps({
  initialFees: Array,
  finalFees: Array
})

const lineSeries = ref([])

const lineOptions = {
  chart: {
    id: 'fees-line-chart'
  },
  xaxis: {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May",
      "Jun", "Jul", "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ]
  },
  title: {
    text: 'Monthly Revenue (KES)',
    align: 'left', 
    floating: false, 
    style: {
      fontSize: '20px',
      color: '#333',
      fontWeight: 'bold' 
    }
  },
  colors: ['#6f42c1', '#28a745'],
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
}

// Watch for prop changes and update the chart data
watch(() => [props.initialFees, props.finalFees], ([initialFees, finalFees]) => {
  lineSeries.value = [
    {
      name: 'Initial Deposits',
      data: initialFees
    },
    {
      name: 'Final Fees',
      data: finalFees
    }
  ]
}, { immediate: true })

</script>

<style scoped>
/* Additional CSS if needed */
.apexcharts-title-text {
  text-align: left !important; /* Force align left */
}
</style>
