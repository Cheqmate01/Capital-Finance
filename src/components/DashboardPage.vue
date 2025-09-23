<template>
    <div class="bg-[#070024] text-gray-100 min-h-screen p-2 sm:p-4 md:p-8 font-sans">
        <div class="container mx-auto px-2 pt-8 sm:p-6 lg:p-12 bg-[#070024] rounded-xl shadow-2xl">
            <h1 class="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-8">User Dashboard</h1>

            <!-- Portfolio Growth Chart Section -->
            <div class="mb-4 sm:mb-8 p-2 sm:p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
                <h2 class="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-6 text-white">Portfolio Growth</h2>
                <div class="w-full h-48 sm:h-80">
                    <DashChart />
                </div>
            </div>

            <!-- Market Quotes & Account Balance Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6 mb-4 sm:mb-8">
                <!-- Wallet Balances -->
                <div class="lg:col-span-2">
                    <h2 class="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white">Wallet Quotes</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                        <div v-for="item in marketData" :key="item.ticker"
                            class="flex items-center justify-between p-2 sm:p-4 bg-gray-950 rounded-xl shadow-md border border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer text-xs sm:text-base">
                            <div class="flex items-center">
                                <span
                                    :class="['h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center rounded-full text-white', item.isPositive ? 'bg-green-600' : 'bg-red-600']">
                                    <FontAwesomeIcon :icon="item.isPositive ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'" :size="16" />
                                </span>
                                <div class="ml-2 sm:ml-4">
                                    <p class="text-base sm:text-lg font-bold text-gray-200">{{ item.ticker }}</p>
                                    <p class="text-xs sm:text-sm text-gray-400">{{ item.name }}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-base sm:text-xl font-bold text-yellow-400">${{ item.price }}</p>
                                <p :class="['text-xs sm:text-sm', item.isPositive ? 'text-green-400' : 'text-red-400']">
                                    {{ item.isPositive ? '+' : '' }}{{ item.change }}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Account Balance Card -->
                <div class="lg:col-span-1 p-2 sm:p-6 bg-gray-950 rounded-2xl shadow-lg border border-gray-700">
                    <h2 class="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white">Account Balance</h2>
                    <div class="mb-2 sm:mb-6">
                        <p class="text-xs sm:text-lg text-gray-400">Current Balance</p>
                        <p class="text-2xl sm:text-4xl font-extrabold text-yellow-400">${{ balance }}</p>
                    </div>
                    <div>
                        <h3 class="text-xs sm:text-lg font-bold mb-1 sm:mb-3 text-gray-200">Recent Transactions</h3>
                        <ul class="space-y-2 sm:space-y-3">
                            <li v-for="tx in recentTransactions" :key="tx.id"
                                class="flex items-center justify-between text-gray-300 text-xs sm:text-sm">
                                <div class="flex items-center">
                                    <span
                                        :class="['h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full mr-2 sm:mr-3 text-white', tx.type === 'Deposit' ? 'bg-green-600' : tx.type === 'Withdraw' ? 'bg-red-600' : 'bg-blue-600']">
                                        <font-awesome-icon v-if="tx.type === 'Deposit'" icon="fa-solid fa-check" :size="12" />
                                        <font-awesome-icon v-else-if="tx.type === 'Withdraw'" icon="fa-solid fa-arrow-right" :size="12" />
                                        <font-awesome-icon v-else icon="fa-solid fa-arrow-left" :size="12" />
                                    </span>
                                    <span class="text-xs sm:text-sm">{{ tx.type }}</span>
                                </div>
                                <span class="text-xs sm:text-sm font-semibold text-white">${{ tx.amount }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Action Buttons Section -->
            <div class="flex justify-center flex-wrap gap-2 sm:gap-4 mt-2">
                <RouterLink
                    to="/transactions/deposit"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-xs sm:text-base">
                    Deposit
                </RouterLink>
                <RouterLink
                    to="/transactions/withdrawal"
                    class="px-3 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-xs sm:text-base">
                    Withdraw
                </RouterLink>
            </div>
            <div class="mt-4 sm:m-10">
                <h4 class="text-base sm:text-lg font-semibold mb-1 sm:mb-2">All Transactions</h4>
                <div class="overflow-x-auto">
                    <table class="min-w-full rounded-lg overflow-hidden text-xs sm:text-base">
                        <thead>
                            <tr class="bg-gray-100 text-gray-700 text-left">
                                <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Type</th>
                                <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Amount</th>
                                <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Date</th>
                                <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tx in transactions" :key="tx.id" class="border-b border-gray-200 text-xs sm:text-base">
                                <td :class="['font-bold py-1 sm:py-2 px-2 sm:px-4', tx.type === 'in' ? 'text-green-700' : 'text-red-700']">{{ tx.type }}</td>
                                <td class="py-1 sm:py-2 px-2 sm:px-4 min-w-[60px] sm:min-w-[80px]">{{ currency(tx.amount) }}</td>
                                <td class="py-1 sm:py-2 px-2 sm:px-4 text-gray-400 text-xs sm:text-sm min-w-[80px] sm:min-w-[100px]">{{ tx.date }}</td>
                                <td class="py-1 sm:py-2 px-2 sm:px-4 text-gray-500">{{ tx.description }}</td>
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
import { getAccessToken, refreshToken, logout } from '@/auth';
// import { ChevronUp, ChevronDown, Check, ArrowRight, ArrowLeft } from 'lucide-vue-next';
// import RechartsLineChart from './RechartsLineChart.vue'; // You need to create this wrapper for recharts or use a Vue chart library
import { ref, onMounted } from 'vue';
import DashChart from './templates/DashChart.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { apiFetch } from '@/auth';

const marketData = ref([]);

const recentTransactions = ref([]);
const transactions = ref([]);
const balance = ref(0);
const isLoading = ref(true);
const error = ref(null);

function currency(value) {
    return "$" + Number(value).toLocaleString();
}

onMounted(async () => {
    isLoading.value = true;
    error.value = null;
    try {
        // Fetch transactions
        const txRes = await apiFetch('http://localhost:8000/api/transactions/');
        if (!txRes.ok) throw new Error('Failed to fetch transactions');
        const txData = await txRes.json();
        console.log('Transactions API response:', txData);
        transactions.value = txData;
        recentTransactions.value = txData.slice(-4).reverse();

        // Fetch balances
        const balRes = await apiFetch('http://localhost:8000/api/balances/');
        if (!balRes.ok) throw new Error('Failed to fetch balances');
        const balData = await balRes.json();
        console.log('Balances API response:', balData);
        balance.value = Array.isArray(balData) ? balData.reduce((sum, b) => sum + (Number(b.balance) || 0), 0) : 0;
        marketData.value = Array.isArray(balData)
            ? balData.map(b => ({
                ticker: b.currency,
                name: b.currency,
                price: Number(b.balance).toFixed(4),
                change: 0,
                isPositive: true
            }))
            : [];
    } catch (e) {
        error.value = e.message || 'Error loading data';
    } finally {
        isLoading.value = false;
    }
});
</script>