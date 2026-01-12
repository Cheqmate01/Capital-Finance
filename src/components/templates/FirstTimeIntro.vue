<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-0">
    <div class="relative w-full max-w-sm sm:max-w-2xl p-4 sm:p-8 bg-white rounded-2xl shadow-lg font-sans max-h-[90vh] overflow-y-auto">
      <div class="absolute top-3 right-3">
        <button @click="close" class="bg-white hover:bg-red-400 transition-all duration-300 rounded-full px-2 py-1.5">
          <font-awesome-icon icon="fa-solid fa-x" class="text-xl text-red-500" />
        </button>
      </div>

      <section class="flex flex-col items-center text-center">
        <h2 class="text-xl sm:text-2xl font-bold mb-2">Welcome to Capital Finance</h2>
        <p class="text-sm sm:text-base text-gray-600 mb-4">A quick tour to get you started.</p>

        <div class="w-full">
          <div class="mb-4">
            <div v-if="step === 1" class="space-y-2">
              <img src="@/assets/FirstTimeIntro.png" alt="Dashboard" class="mx-auto w-28 h-28 object-contain" />
              <h3 class="font-semibold">Track your finances</h3>
              <p class="text-sm text-gray-600">View your dashboard to monitor balances, transactions, and insights.</p>
            </div>

            <div v-if="step === 2" class="space-y-2">
              <img src="@/assets/FirstTimeIntro1.png" alt="Transactions" class="mx-auto w-28 h-28 object-contain" />
              <h3 class="font-semibold">Make deposits & withdrawals</h3>
              <p class="text-sm text-gray-600">Quickly deposit, withdraw, and manage your funds securely.</p>
            </div>

            <div v-if="step === 3" class="space-y-2">
              <img src="@/assets/FirstTimeIntro2.png" alt="Security" class="mx-auto w-28 h-28 object-contain" />
              <h3 class="font-semibold">Built with Vue & Django</h3>
              <p class="text-sm text-gray-600">Front-end: Vue.js; Back-end: Django REST API. Highly secure authentication and scalable APIs.</p>
            </div>
          </div>

          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <button @click="prev" :disabled="step===1" class="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-sm disabled:opacity-50">Back</button>
              <button @click="next" class="px-4 py-1.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm">{{ step < 3 ? 'Next' : 'Get started' }}</button>
            </div>

            <div class="flex items-center gap-2">
              <div class="flex gap-1">
                <span v-for="n in 3" :key="n" :class="['w-2 h-2 rounded-full', step===n ? 'bg-green-600' : 'bg-gray-300']"></span>
              </div>
              <label class="text-xs text-gray-500 flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="doNotShow" /> Don't show again
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const visible = ref(true);
const step = ref(1);
const doNotShow = ref(true);

function close() {
  if (doNotShow.value) {
    try { localStorage.setItem('cf_onboarding_shown', '1'); } catch (e) { /* ignore */ }
  }
  visible.value = false;
}

function next() {
  if (step.value < 3) {
    step.value += 1;
  } else {
    close();
  }
}

function prev() {
  if (step.value > 1) step.value -= 1;
}

onMounted(() => {
  try {
    const flag = localStorage.getItem('cf_onboarding_shown');
    if (flag === '1') visible.value = false;
  } catch (e) {
    // ignore localStorage errors
  }
});

watch(visible, (v) => {
  // expose an event or side-effect if needed later
});
</script>

<style scoped>
/* small overrides to keep modal content constrained */
.w-28 { width: 7rem; }
.h-28 { height: 7rem; }
</style>
