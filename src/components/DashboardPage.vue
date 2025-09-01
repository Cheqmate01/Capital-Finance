<template>
    <div class="bg-[#070024] text-gray-100 min-h-screen p-8 font-sans">
        <div class="container mx-auto p-6 lg:p-12 bg-[#070024] rounded-xl shadow-2xl">
            <h1 class="text-3xl lg:text-4xl font-extrabold text-white mb-8">Dashboard</h1>

            <!-- Portfolio Growth Chart Section -->
            <div class="mb-8 p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
                <h2 class="text-xl lg:text-2xl font-bold mb-6 text-white">Portfolio Growth</h2>
                <div class="w-full h-80">
                    <DashChart />
                </div>
            </div>

            <!-- Market Quotes & Account Balance Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Market Quotes Grid -->
                <div class="lg:col-span-2">
                    <h2 class="text-xl lg:text-2xl font-bold mb-4 text-white">Live Market Quotes</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-for="item in marketData" :key="item.ticker"
                            class="flex items-center justify-between p-4 bg-gray-950 rounded-xl shadow-md border border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
                            <div class="flex items-center">
                                <span
                                    :class="['h-12 w-12 flex items-center justify-center rounded-full text-white', item.isPositive ? 'bg-green-600' : 'bg-red-600']">
                                    <FontAwesomeIcon :icon="item.isPositive ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'" :size="24" />
                                </span>
                                <div class="ml-4">
                                    <p class="text-lg font-bold text-gray-200">{{ item.ticker }}</p>
                                    <p class="text-sm text-gray-400">{{ item.name }}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-xl font-bold text-yellow-400">${{ item.price }}</p>
                                <p :class="['text-sm', item.isPositive ? 'text-green-400' : 'text-red-400']">
                                    {{ item.isPositive ? '+' : '' }}{{ item.change }}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Account Balance Card -->
                <div class="lg:col-span-1 p-6 bg-gray-950 rounded-2xl shadow-lg border border-gray-700">
                    <h2 class="text-xl lg:text-2xl font-bold mb-4 text-white">Account Balance</h2>
                    <div class="mb-6">
                        <p class="text-lg text-gray-400">Current Balance</p>
                        <p class="text-4xl font-extrabold text-yellow-400">$3843.00</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-3 text-gray-200">Recent Transactions</h3>
                        <ul class="space-y-3">
                            <li v-for="tx in recentTransactions" :key="tx.id"
                                class="flex items-center justify-between text-gray-300">
                                <div class="flex items-center">
                                    <span
                                        :class="['h-6 w-6 flex items-center justify-center rounded-full mr-3 text-white', tx.type === 'Deposit' ? 'bg-green-600' : tx.type === 'Withdraw' ? 'bg-red-600' : 'bg-blue-600']">
                                        <font-awesome-icon v-if="tx.type === 'Deposit'" icon="fa-solid fa-check" :size="16" />
                                        <font-awesome-icon v-else-if="tx.type === 'Withdraw'" icon="fa-solid fa-arrow-right" :size="16" />
                                        <font-awesome-icon v-else icon="fa-solid fa-arrow-left" :size="16" />
                                    </span>
                                    <span class="text-sm">{{ tx.type }}</span>
                                </div>
                                <span class="text-sm font-semibold text-white">${{ tx.amount }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Action Buttons Section -->
            <div class="flex justify-center flex-wrap gap-4">
                <button
                    class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Deposit
                </button>
                <button
                    class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Withdraw
                </button>
            </div>
            <div class="m-10">
                <h4 class="text-lg font-semibold mb-2">All Transactions</h4>
                <div class="overflow-x-auto">
                    <table class="min-w-full rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-gray-100 text-gray-700 text-left">
                                <th class="py-3 px-4 font-semibold">Type</th>
                                <th class="py-3 px-4 font-semibold">Amount</th>
                                <th class="py-3 px-4 font-semibold">Date</th>
                                <th class="py-3 px-4 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tx in transactions" :key="tx.id" class="border-b border-gray-200 text-base">
                                <td :class="['font-bold py-2 px-4', tx.type === 'in' ? 'text-green-700' : 'text-red-700']">{{ tx.type }}</td>
                                <td class="py-2 px-4 min-w-[80px]">{{ tx.amount | currency }}</td>
                                <td class="py-2 px-4 text-gray-400 text-sm min-w-[100px]">{{ tx.date }}</td>
                                <td class="py-2 px-4 text-gray-500">{{ tx.description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import DashChart from './templates/DashChart.vue';
// import { ChevronUp, ChevronDown, Check, ArrowRight, ArrowLeft } from 'lucide-vue-next';
// import RechartsLineChart from './RechartsLineChart.vue'; // You need to create this wrapper for recharts or use a Vue chart library

const initialChartData = ref([
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6500 },
    { name: 'Jun', value: 6000 },
    { name: 'Jul', value: 8000 },
]);

const marketData = ref([
    { ticker: 'BTC', name: 'Bitcoin', price: '17549.30', change: 1.2, isPositive: true },
    { ticker: 'ETH', name: 'Ethereum', price: '16320.00', change: -0.5, isPositive: false },
    { ticker: 'SOL', name: 'Solana', price: '15400.12', change: 2.1, isPositive: true },
    { ticker: 'XRP', name: 'Ripple', price: '29.20', change: -0.1, isPositive: false },
    { ticker: 'ADA', name: 'Cardano', price: '15.840', change: 3.5, isPositive: true },
    { ticker: 'DOGE', name: 'Dogecoin', price: '19.200', change: 0.8, isPositive: true },
]);

const recentTransactions = ref([
    { id: 1, type: 'Deposit', amount: '750.00' },
    { id: 2, type: 'Income', amount: '1247.00' },
    { id: 3, type: 'Withdraw', amount: '230.04' },
    { id: 4, type: 'Deposit', amount: '2.00' },
]);

const transactions = [
    {
        id: 1,
        type: "in",
        amount: 500,
        date: "2024-06-01",
        description: "Salary",
    },
    {
        id: 2,
        type: "out",
        amount: 120,
        date: "2024-06-03",
        description: "Groceries",
    },
    {
        id: 3,
        type: "in",
        amount: 200,
        date: "2024-06-05",
        description: "Freelance",
    },
    {
        id: 4,
        type: "out",
        amount: 50,
        date: "2024-06-07",
        description: "Transport",
    },
];

function currency(value) {
    return "$" + Number(value).toLocaleString();
}
</script>

<style>
</style>