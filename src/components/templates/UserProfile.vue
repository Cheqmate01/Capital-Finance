<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-0">
        <div class="relative w-full max-w-xs sm:max-w-xl p-2 sm:p-8 bg-white rounded-2xl shadow-lg font-sans">
            <RouterLink to="/dashboard">
                <div class="absolute top-2 right-2 sm:top-8 sm:right-8 bg-white hover:bg-red-400 transition-all duration-300 rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2.5">
                    <font-awesome-icon icon="fa-solid fa-x" class="text-xl sm:text-2xl text-red-500" />
                </div>
            </RouterLink>
            <section class="flex flex-col sm:flex-row items-center mb-4 sm:mb-8 gap-2 sm:gap-0">
                <img
                    class="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover mb-2 sm:mb-0 sm:mr-8 border-4 border-gray-200"
                    :src="user.profilePicture"
                    alt="Profile Picture"
                />
                <div class="flex-1 text-center sm:text-left">
                    <h2 class="m-0 text-lg sm:text-2xl font-bold text-gray-800">@{{ user.username }}</h2>
                    <p class="my-1 text-xs sm:text-base text-gray-500">{{ user.fullName }}</p>
                    <span class="inline-block bg-blue-100 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl text-xs sm:text-base">{{ user.category }}</span>
                </div>
            </section>

            <section class="mt-4 sm:mt-8">
                <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-800">Transaction Traffic</h3>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4 sm:mb-6">
                    <div class="flex-1 bg-gray-100 p-3 sm:p-6 rounded-lg text-center">
                        <span class="block text-gray-500 text-xs sm:text-base mb-1 sm:mb-2">Total In</span>
                        <span class="text-base sm:text-xl font-bold text-green-700">{{ currency(totalIn) }}</span>
                    </div>
                    <div class="flex-1 bg-gray-100 p-3 sm:p-6 rounded-lg text-center">
                        <span class="block text-gray-500 text-xs sm:text-base mb-1 sm:mb-2">Total Out</span>
                        <span class="text-base sm:text-xl font-bold text-red-700">{{ currency(totalOut) }}</span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { getAccessToken, refreshToken, logout } from '@/auth';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const user = ref({
    profilePicture: '',
    username: '',
    fullName: '',
    category: '',
});
const transactions = ref([]);
const isLoading = ref(true);
const error = ref(null);

function currency(value) {
    return "$" + Number(value).toLocaleString();
}

const totalIn = computed(() =>
    transactions.value
        .filter((tx) => tx.type === "in")
        .reduce((sum, tx) => sum + Number(tx.amount), 0)
);

const totalOut = computed(() =>
    transactions.value
        .filter((tx) => tx.type === "out")
        .reduce((sum, tx) => sum + Number(tx.amount), 0)
);

const apiFetch = async (url) => {
    const authHeader = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
    });

    let res = await fetch(url, {
            headers: authHeader()
        });
    if (res.status === 401) {
            const newToken = await refreshToken();
            if (newToken) {
            res = await fetch(url, {
                    headers: { ...authHeader(), 'Authorization': `Bearer ${newToken}` }
                });
            } else {
                logout();
            throw new Error('Unauthorized and failed to refresh token');
            }
        }

    if (!res.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    return await res.json();
};

onMounted(async () => {
    isLoading.value = true;
    error.value = null;

    try {
        let userRes = await apiFetch('http://localhost:8000/api/users/');
        let txRes = await apiFetch('http://localhost:8000/api/transactions/');
        if (Array.isArray(userRes) && userRes.length > 0) {
            user.value = userRes[0];
        } else if (userRes && typeof userRes === 'object') {
            user.value = userRes;
        }

        transactions.value = txRes;
    } catch (e) {
        error.value = e.message || 'Error loading data';
    } finally {
        isLoading.value = false;
    }
});
</script>