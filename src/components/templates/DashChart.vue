<script setup>
import { ref, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: [],
  datasets: [
    {
      data: [],
      fill: true,
      borderColor: '#4ade80',
      tension: 0.4,
      pointBackgroundColor: '#4ade80',
      pointBorderColor: '#4ade80',
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
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

onMounted(async () => {
  try {
    // Fetch daily balances from backend (adjust endpoint as needed)
    const res = await fetch('http://localhost:8000/api/balances/?group_by=date');
    if (!res.ok) throw new Error('Failed to fetch daily balances');
    const data = await res.json();
    // Expecting data as array of { date: 'YYYY-MM-DD', balance: number }
    const results = Array.isArray(data) ? data : (data.results || []);
    chartData.value.labels = results.map(item => item.date);
    chartData.value.datasets[0].data = results.map(item => Number(item.balance));
  } catch (err) {
    console.error('DashChart fetch error:', err);
    chartData.value.labels = [];
    chartData.value.datasets[0].data = [];
  }
});
</script>

<template>
  <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    
  />
</template>