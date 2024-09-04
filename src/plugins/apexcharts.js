// src/plugins/apexcharts.js
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default {
  install(app) {
    app.component('apexchart', VueApexCharts)
  }
}
