<template>
  <div id="app-lineChart">
       <line-chart :data='{datacollection}'
  :options="{responsive: false, maintainAspectRatio: false}"
  :width="400"
  :height="200"
  >
 </line-chart>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  datacollection: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

