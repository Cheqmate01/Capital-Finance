<template>
    <div class="bg-[#070024] text-gray-100 min-h-screen p-2 sm:p-4 md:p-8 font-sans">
        <div class="container mx-auto px-2 pt-8 sm:p-6 lg:p-12 bg-[#070024] rounded-xl shadow-2xl">
            <h1 class="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white mb-4 sm:mb-8">User Dashboard</h1>

            <!-- Portfolio Growth Chart Section -->
            <div class="mb-4 sm:mb-8 p-2 sm:p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
                <h2 class="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-6 text-white">Portfolio Growth</h2>
                <div class="w-full h-48 sm:h-80">
                    <DashChart :chartData="portfolioHistory" />
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6 mb-4 sm:mb-8">
                <!-- Transactions -->
                <div class="lg:col-span-2">
                    <h2 class="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white">All Transactions</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full rounded-lg overflow-hidden text-xs sm:text-base">
                            <thead>
                                <tr class="bg-gray-100 text-gray-700 text-left">
                                    <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Type</th>
                                    <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Amount</th>
                                    <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Date</th>
                                    <th class="py-2 sm:py-3 px-2 sm:px-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tx in transactions" :key="tx.id" class="border-b border-gray-200 text-xs sm:text-base">
                                    <td :class="['font-bold py-1 sm:py-2 px-2 sm:px-4', tx.type === 'deposit' ? 'text-green-700' : 'text-red-700']">{{ tx.type }}</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4 min-w-[60px] sm:min-w-[80px]">{{ currency(tx.amount, tx.currency) }}</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4 text-gray-400 text-xs sm:text-sm min-w-[80px] sm:min-w-[100px]">{{ tx.created_at.slice(0, 10) }}</td>
                                    <td class="py-1 sm:py-2 px-2 sm:px-4 text-gray-500">{{ tx.status }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Account Balance Card -->
                <div class="lg:col-span-1 p-2 sm:p-6 bg-gray-950 rounded-2xl shadow-lg border border-gray-700">
                    <h2 class="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white">Account Balance</h2>
                    <div class="mb-2 sm:mb-6">
                        <p class="text-xs sm:text-lg text-gray-400">Current Balance (USD)</p>
                        <p class="text-2xl sm:text-4xl font-extrabold text-yellow-400">${{ balance.toLocaleString() }}</p>
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
                                <span class="text-xs sm:text-sm font-semibold text-white">{{ currency(tx.amount, tx.currency) }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Action Buttons Section -->
                <div class="lg:col-3">
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
                </div>
            </div>
        </div>
    </div>
    <RouterView />
    <LoadingOverlay v-if="isLoading" message="Loading dashboard data..." />
</template>

<script setup>
import { getAccessToken, refreshToken, logout } from '@/auth';
// import { ChevronUp, ChevronDown, Check, ArrowRight, ArrowLeft } from 'lucide-vue-next';
// import RechartsLineChart from './RechartsLineChart.vue'; // You need to create this wrapper for recharts or use a Vue chart library
import { ref, onMounted } from 'vue';
import DashChart from './templates/DashChart.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { apiFetch } from '@/auth';
import LoadingOverlay from './templates/LoadingOverlay.vue';

const marketData = ref([]);
const portfolioHistory = ref([]); // Add this line

const recentTransactions = ref([]);
const transactions = ref([]);
const balance = ref(0);
const isLoading = ref(true);
const error = ref(null);

const currencySymbols = {
    'BTC': 'BTC',
    'ETH': 'ETH',
    'USDT': 'USD',
};

function currency(value, curr = 'USD') {
    const symbol = currencySymbols[curr] || '';
    return Number(value).toLocaleString() + ' ' + symbol;
}

onMounted(async () => {
    isLoading.value = true;
    error.value = null;
    try {
        // Using Promise.all to fetch in parallel
        const [txRes, balRes, portfolioRes] = await Promise.all([
            apiFetch('https://NightinGale.pythonanywhere.com/api/transactions/'),
            apiFetch('https://NightinGale.pythonanywhere.com/api/balances/'),
            apiFetch('https://NightinGale.pythonanywhere.com/api/portfolio-value-daily/')
        ]);

        if (!txRes.ok) throw new Error('Failed to fetch transactions');
        const txData = await txRes.json();
        transactions.value = txData;
        recentTransactions.value = txData.slice(-4).reverse();

        if (!balRes.ok) throw new Error('Failed to fetch balances');
        const balData = await balRes.json();

        if (!portfolioRes.ok) throw new Error('Failed to fetch portfolio history');
        portfolioHistory.value = await portfolioRes.json();

        // Hardcoded rates, ideally fetched from an API
        const rates = {
            'USD': 1.0,
            'BTC': 65000.0,
            'ETH': 3500.0,
            'USDT': 1.0,
            'USDT TRC20': 1.0,
        };

        balance.value = Array.isArray(balData)
            ? balData.reduce((sum, b) => {
                const rate = rates[b.currency] || 0;
                const usdValue = (Number(b.balance) || 0) * rate;
                return sum + usdValue;
            }, 0)
            : 0;

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
