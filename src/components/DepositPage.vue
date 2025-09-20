<template>
    <div class="bg-[#070024] text-white flex flex-col items-center justify-center min-h-screen p-2 sm:p-4 md:p-8">
        <!-- Status Tracker -->
    <div class="w-full max-w-xs sm:max-w-md md:max-w-2xl flex flex-col items-center mb-2 sm:mb-4 md:mb-8">
            <div class="flex flex-col sm:flex-row items-center w-full max-w-xs sm:max-w-md justify-between relative gap-2 sm:gap-0">
                <!-- Step 1: Request -->
                <div class="flex flex-col items-center flex-1">
                    <div
                        :class="[
                            'w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-4 transition-all duration-300',
                            requestStatus
                                ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 shadow-lg'
                                : 'bg-gradient-to-br from-gray-400 to-gray-600 border-gray-500 shadow'
                        ]"
                    >
                        <span v-if="requestStatus" class="text-white text-xl sm:text-2xl">
                            <!-- Check Icon -->
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                        </span>
                        <span v-else class="text-white text-xl sm:text-2xl animate-spin">
                            <!-- Spinner Icon -->
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"/>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                        </span>
                    </div>
                    <span class="mt-2 text-xs sm:text-sm font-semibold tracking-wide"
                        :class="requestStatus ? 'text-green-500' : 'text-gray-400'">
                        Request
                    </span>
                    <span class="text-[10px] sm:text-xs mt-1"
                        :class="requestStatus ? 'text-green-400' : 'text-gray-300'">
                        {{ requestStatus ? 'Completed' : 'Pending' }}
                    </span>
                </div>

                <!-- Connecting Line -->
                <div class="flex-1 h-1 relative mx-1 sm:mx-2">
                    <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-700 rounded-full -translate-y-1/2"></div>
                    <div
                        class="absolute top-1/2 left-0 h-1 rounded-full transition-all duration-500"
                        :class="requestStatus ? 'bg-green-500' : 'bg-blue-500'"
                        :style="{ width: requestStatus ? '100%' : '0%' }"
                    ></div>
                </div>

                <!-- Step 2: Confirmation -->
                <div class="flex flex-col items-center flex-1">
                    <div
                        :class="[
                            'w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-4 transition-all duration-300',
                            confirmStatus
                                ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 shadow-lg'
                                : 'bg-gradient-to-br from-gray-400 to-gray-600 border-gray-500 shadow'
                        ]"
                    >
                        <span v-if="confirmStatus" class="text-white text-xl sm:text-2xl">
                            <!-- Check Icon -->
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                        </span>
                        <span v-else class="text-white text-xl sm:text-2xl animate-spin">
                            <!-- Spinner Icon -->
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"/>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                            </svg>
                        </span>
                    </div>
                    <span class="mt-2 text-xs sm:text-sm font-semibold tracking-wide"
                        :class="confirmStatus ? 'text-green-500' : 'text-gray-400'">
                        Confirmation
                    </span>
                    <span class="text-[10px] sm:text-xs mt-1"
                        :class="confirmStatus ? 'text-green-400' : 'text-gray-300'">
                        {{ confirmStatus ? 'Completed' : 'Pending' }}
                    </span>
                </div>
            </div>
        </div>
    <main class="bg-gray-950 w-full max-w-xs sm:max-w-2xl p-2 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl mt-2 sm:mt-4 md:mt-8">
            <h1 class="text-lg sm:text-2xl md:text-4xl font-bold text-center mb-1 sm:mb-2 md:mb-4">Deposit Funds</h1>
            <p class="text-center text-gray-400 mb-2 sm:mb-4 md:mb-8 text-xs sm:text-base">Select the digital currency you wish to deposit.</p>

            <!-- Deposit Options Container or Confirmation Inputs -->
            <transition name="fade" mode="out-in">
                <div v-if="!showConfirm" key="cards" class="space-y-2 sm:space-y-4 md:space-y-6">
                    <DepositCard
                        v-for="wallet in wallets"
                        :key="wallet.id"
                        :iconBg="getIconBg(wallet.currency)"
                        :icon="getIcon(wallet.currency)"
                        :name="wallet.currency"
                        :desc="getCurrencyDesc(wallet.currency)"
                        :address="wallet.address"
                        @copy="showMessage"
                    />
                    <div class="flex justify-end mt-2 sm:mt-4 md:mt-6">
                        <button @click="showConfirm = true" class="text-green-400 hover:text-green-500 font-bold underline transition text-xs sm:text-base">I have completed payments</button>
                    </div>
                </div>
                <div v-else key="confirm" class="space-y-2 sm:space-y-4 md:space-y-6">
                    <div>
                        <label for="confirm-currency" class="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-base">Currency Paid</label>
                        <select id="confirm-currency" v-model="confirmCurrency" class="w-full bg-gray-800 text-white p-2 sm:p-4 rounded-xl border border-transparent focus:border-green-500 focus:outline-none transition duration-200 text-xs sm:text-base">
                            <option value="" disabled>Select currency</option>
                            <option value="USDT TRC20">USDT TRC20</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                        </select>
                    </div>
                    <div>
                        <label for="confirm-amount" class="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-base">Exact Amount Paid</label>
                        <input
                            type="number"
                            id="confirm-amount"
                            v-model.number="confirmAmount"
                            placeholder="0.00"
                            inputmode="decimal"
                            class="w-full bg-gray-800 text-white p-2 sm:p-4 rounded-xl border border-transparent focus:border-green-500 focus:outline-none transition duration-200 hide-number-spin text-xs sm:text-base"
                        >
                    </div>
                    <div class="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-1 sm:gap-2">
                        <p>Currency: <span class="text-white">{{ confirmCurrency || '-' }}</span></p>
                        <p>Amount: <span class="text-white font-bold">{{ confirmAmount || '0.00' }}</span></p>
                    </div>
                    <button
                        class="btn w-full mt-2 sm:mt-4 md:mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 md:py-4 rounded-xl transition duration-200 text-xs sm:text-base"
                        @click="submitConfirmation"
                    >
                        Submit Confirmation
                    </button>
                </div>
            </transition>
        </main>

        <!-- Floating Message Box -->
        <transition name="fade">
            <div v-if="messageVisible" :class="['fixed top-2 right-2 sm:top-6 sm:right-6 z-50 px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all', messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white']">
                {{ messageText }}
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAccessToken, refreshToken, logout } from '@/auth';

const requestStatus = ref(false)
const confirmStatus = ref(false)
const showConfirm = ref(false)
const confirmCurrency = ref('')
const confirmAmount = ref('')
import DepositCard from '@/components/templates/DepositCards.vue'

const wallets = ref([])
const isLoading = ref(true)
const error = ref(null)

const messageVisible = ref(false)
const messageText = ref('')
const messageType = ref('success') // 'success' or 'error'
let messageTimeout = null
// Fetch wallets from API
onMounted(async () => {
    isLoading.value = true;
    error.value = null;
    try {
        const res = await apiFetch('http://localhost:8000/api/wallets');
        if (!res.ok) throw new Error('Failed to fetch wallets');
        const data = await res.json();
        wallets.value = data;
    } catch (e) {
        error.value = e.message || 'Error loading wallets';
    } finally {
        isLoading.value = false;
    }
});

function getIconBg(currency) {
    if (currency === 'USDT TRC20') return 'bg-blue-600';
    if (currency === 'BTC') return 'bg-yellow-500';
    if (currency === 'ETH') return 'bg-gray-500';
    return 'bg-gray-400';
}
function getIcon(currency) {
    if (currency === 'USDT TRC20') return usdtIcon;
    if (currency === 'BTC') return btcIcon;
    if (currency === 'ETH') return ethIcon;
    return '';
}
function getCurrencyDesc(currency) {
    if (currency === 'USDT TRC20') return 'Tether on Tron Network';
    if (currency === 'BTC') return 'Bitcoin';
    if (currency === 'ETH') return 'Ethereum';
    return '';
}

function showMessage() {
    messageVisible.value = true;
    messageType.value = 'success';
    messageText.value = 'Address copied to clipboard!';
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => {
        messageVisible.value = false;
        messageText.value = '';
    }, 3000);
}

function submitConfirmation() {
    // Validation: must select currency and enter a positive amount
    if (!confirmCurrency.value || !confirmAmount.value || isNaN(confirmAmount.value) || Number(confirmAmount.value) <= 0) {
        messageVisible.value = true;
        messageText.value = 'Please select a currency and enter a valid amount.';
        messageType.value = 'error';
        clearTimeout(messageTimeout);
        messageTimeout = setTimeout(() => {
            messageVisible.value = false;
            messageText.value = '';
        }, 3000);
        return;
    }
    requestStatus.value = true;
    showConfirm.value = false;
    confirmCurrency.value = '';
    confirmAmount.value = '';
    // Show success message
    messageVisible.value = true;
    messageText.value = 'Confirmation request submitted!';
    messageType.value = 'success';
    clearTimeout(messageTimeout);
    setTimeout(() => {
        confirmStatus.value = true;
    }, 2000);
    messageTimeout = setTimeout(() => {
        messageVisible.value = false;
        messageText.value = '';
    }, 3000);
}

const usdtIcon = `<svg class='w-8 h-8' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <g fill="none" fill-rule="evenodd">
            <circle cx="16" cy="16" r="16" fill="#26A17B"></circle>
            <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"></path>
        </g>
    </g>
</svg>`
const btcIcon = `<svg class='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M13.52 13.67C13.25 14.76 11.42 14.17 10.82 14.02L11.3 12.09C11.9 12.24 13.8 12.53 13.52 13.67ZM11.96 9.45003L11.52 11.2C12.02 11.32 13.55 11.83 13.8 10.84C14.05 9.81003 12.46 9.57003 11.96 9.45003ZM19.76 13.93C18.69 18.21 14.35 20.82 10.06 19.76C5.78 18.69 3.16 14.35 4.23 10.07C5.3 5.78003 9.64 3.18003 13.93 4.24003C18.21 5.31003 20.83 9.65003 19.76 13.93ZM9.37 13.34C9.33 13.45 9.22 13.61 8.97 13.55C8.93 13.55 8.33 13.39 8.33 13.39L7.89 14.39L9.03 14.67C9.25 14.73 9.45 14.78 9.66 14.84L9.3 16.29L10.17 16.51L10.53 15.07C10.77 15.14 11 15.19 11.23 15.25L10.87 16.68L11.75 16.9L12.11 15.45C13.61 15.73 14.74 15.62 15.21 14.26C15.59 13.17 15.19 12.54 14.4 12.13C14.97 12 15.4 11.62 15.52 10.84C15.68 9.78003 14.87 9.20003 13.76 8.83003L14.12 7.38003L13.24 7.16003L12.89 8.56003C12.66 8.50003 12.42 8.45003 12.18 8.39003L12.53 6.98003L11.66 6.76003L11.3 8.20003C11.11 8.16003 10.92 8.11003 10.74 8.07003L9.53 7.76003L9.3 8.70003C9.3 8.70003 9.94 8.85003 9.94 8.86003C10.29 8.95003 10.35 9.18003 10.35 9.37003L9.36 13.32L9.37 13.34Z" fill="#000000"></path>
    </g>
</svg>`
const ethIcon = `<svg class='w-8 h-8 text-white' fill='none' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
    <g>
        <polygon fill='currentColor' points='16,4 16,22.5 25.5,16.5 '/>
        <polygon fill='currentColor' points='16,4 6.5,16.5 16,22.5 '/>
        <polygon fill='currentColor' points='16,24 16,28 25.5,18 '/>
        <polygon fill='currentColor' points='16,28 16,24 6.5,18 '/>
    </g>
</svg>`
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
/* Hide number input spinners/arrows for all browsers */
input.hide-number-spin::-webkit-outer-spin-button,
input.hide-number-spin::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input.hide-number-spin[type=number] {
  -moz-appearance: textfield;
}
</style>