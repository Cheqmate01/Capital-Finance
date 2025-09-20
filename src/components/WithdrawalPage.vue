<template>
  <div class="bg-[#070024] text-white flex flex-col items-center justify-center min-h-screen p-2 sm:p-4">
        <!-- Modern Status Tracker -->
  <div class="w-full max-w-md sm:max-w-2xl flex flex-col items-center mb-4 sm:mb-8">
            <div class="flex flex-col sm:flex-row items-center w-full max-w-xs sm:max-w-md justify-between relative gap-4 sm:gap-0">
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
            :class="requestStatus ? 'bg-green-500' : 'bg-green-500'"
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
  <main class="bg-gray-950 w-full max-w-xs sm:max-w-2xl p-2 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl">
            <h1 class="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-2">Withdraw Funds</h1>
            <p class="text-center text-gray-400 mb-4 sm:mb-8 text-xs sm:text-base">Select the currency you wish to withdraw and enter the details.</p>

            <div class="space-y-4 sm:space-y-6">
                <div class="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-8">
                    <button
                        v-for="currency in currencies"
                        :key="currency"
                        :class="['wallet-select bg-gray-900 hover:bg-gray-700 text-white font-medium py-2 sm:py-3 px-3 sm:px-6 rounded-2xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-xs sm:text-base', selectedCurrency === currency ? 'bg-gray-500 hover:bg-gray-600' : '']"
                        @click="selectCurrency(currency)"
                    >
                        {{ currency }}
                    </button>
                </div>

                <div v-if="selectedCurrency" class="space-y-2 sm:space-y-4">
                    <div>
                        <label for="wallet-address" class="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-base">Your Wallet Address</label>
                        <input
                            type="text"
                            id="wallet-address"
                            v-model="walletAddress"
                            placeholder="Enter your wallet address"
                            class="w-full bg-gray-900 text-white p-2 sm:p-4 rounded-xl border border-transparent focus:border-green-500 focus:outline-none transition duration-200 text-xs sm:text-base"
                        >
                    </div>
                    <div>
                        <label for="withdrawal-amount" class="block text-gray-400 mb-1 sm:mb-2 text-xs sm:text-base">Amount to Withdraw</label>
                        <div class="relative">
              <input
                type="number"
                id="withdrawal-amount"
                v-model.number="amount"
                placeholder="0.00"
                inputmode="decimal"
                            class="w-full bg-gray-900 text-white p-2 sm:p-4 pr-10 sm:pr-16 rounded-xl border border-transparent focus:border-green-500 focus:outline-none transition duration-200 hide-number-spin text-xs sm:text-base"
              >
                            <span class="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4 text-gray-400 text-xs sm:text-base">{{ selectedCurrency }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-1 sm:gap-0">
                        <p>Transaction Fee: <span class="text-white">{{ fee }} {{ selectedCurrency }}</span></p>
                        <p>You will receive: <span class="text-white font-bold">{{ total }} {{ selectedCurrency }}</span></p>
                    </div>
                    <button
                        class="btn w-full mt-4 sm:mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-4 rounded-xl transition duration-200 text-xs sm:text-base"
                        @click="submitWithdrawal"
                    >
                        Withdraw
                    </button>
                </div>
            </div>
        </main>
        <transition name="fade">
            <div v-if="message" :class="['fixed top-6 right-6 z-50 px-6 py-3 rounded-full shadow-lg transition-all', messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white']">
                {{ message }}
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getAccessToken, refreshToken, logout } from '@/auth';

const requestStatus = ref(false)
const confirmStatus = ref(false)


import { onMounted } from 'vue'
const currencies = ref([])
const selectedCurrency = ref('')
const walletAddress = ref('')
const amount = ref(0)
const fee = ref(0.00)
const message = ref('')
const messageType = ref('success')
let messageTimeout = null

onMounted(async () => {
  try {
    const res = await apiFetch('http://localhost:8000/api/wallets');
    if (res.ok) {
      const data = await res.json();
      currencies.value = [...new Set(data.map(w => w.currency))];
    } else {
      currencies.value = ['USDT TRC20', 'BTC', 'ETH'];
    }
  } catch {
    currencies.value = ['USDT TRC20', 'BTC', 'ETH'];
  }
});

const total = computed(() => {
    // Example: fee is 1% of amount
    return amount.value > 0 ? (amount.value - amount.value * 0.01).toFixed(2) : '0.00'
})

function selectCurrency(currency) {
    selectedCurrency.value = currency
    message.value = ''
}

function submitWithdrawal() {
    if (walletAddress.value && amount.value > 0) {
        message.value = 'Withdrawal request submitted!'
        messageType.value = 'success'
        requestStatus.value = true
        // Simulate admin confirmation after 2s
        setTimeout(() => {
            confirmStatus.value = true
        }, 2000)
    } else {
        message.value = 'Please enter a valid address and amount.'
        messageType.value = 'error'
    }
    clearTimeout(messageTimeout)
    messageTimeout = setTimeout(() => {
        message.value = ''
    }, 3000)
}
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
