<script setup>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
  datasets: [
    {
      data: [40, 20, 12, 32, 72, 50, 60],
      fill: true,
      borderColor: '#4ade80', // green-400
      tension: 0.4,
      pointBackgroundColor: '#4ade80',
      pointBorderColor: '#4ade80',
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false }
  },
  scales: {
    x: {
      grid: { display: false, drawBorder: true },
      border: { display: true }
    },
    y: {
      grid: { display: false, drawBorder: true },
      border: { display: true }
    }
  }
})
</script>

<template>
  <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>