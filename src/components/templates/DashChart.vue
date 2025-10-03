<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
    chartData: {
        type: Array,
        required: true,
        default: () => []
    }
});

const chartCanvas = ref(null);
let chartInstance = null;

const renderChart = () => {
    if (chartInstance) {
        chartInstance.destroy();
    }

    if (chartCanvas.value && props.chartData.length > 0) {
        const ctx = chartCanvas.value.getContext('2d');

        const labels = props.chartData.map(item => new Date(item.date).toLocaleDateString());
        const data = props.chartData.map(item => Number(item.total_balance_usd));

        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Portfolio Value (USD)',
                    data: data,
                    fill: true,
                    borderColor: '#4ade80',
                    tension: 0.1,
                    pointBackgroundColor: '#4ade80',
                    pointBorderColor: '#4ade80',
                }]
            },
            options: {
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
                    display: true,
                    grid: { display: false, drawBorder: true },
                    border: { display: true }
                  },
                  y: {
                      beginAtZero: false,
                      grid: { display: false, drawBorder: true },
                      border: { display: true },
                  }
                }
            }
        });
    }
};

watch(() => props.chartData, (newData) => {
    if (newData) {
        renderChart();
    }
}, { deep: true });

onMounted(() => {
    renderChart();
});

onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.destroy();
    }
});
</script>

<template>
    <canvas ref="chartCanvas"></canvas>
</template>