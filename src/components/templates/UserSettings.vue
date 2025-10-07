<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-0">
        <div class="relative w-full max-w-xs sm:max-w-xl p-2 sm:p-8 bg-white rounded-2xl shadow-lg font-sans max-h-[90vh] overflow-y-auto">
            <RouterLink to="/dashboard">
                <div class="absolute top-2 right-2 sm:top-8 sm:right-8 bg-white hover:bg-red-400 transition-all duration-300 rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2.5">
                    <font-awesome-icon icon="fa-solid fa-x" class="text-xl sm:text-2xl text-red-500" />
                </div>
            </RouterLink>
            <section class="flex flex-col items-center justify-center mb-4 sm:mb-8">
                <div class="relative w-20 h-20 sm:w-28 sm:h-28">
                    <img
                        class="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-gray-200"
                        :src="user.profilePicture"
                        alt="Profile Picture"
                    />
                    <span class="absolute inset-0 flex items-center justify-center">
                        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-gray-700 bg-white bg-opacity-80 rounded-full p-1 sm:p-2 text-lg sm:text-xl shadow" />
                    </span>
                </div>
            </section>

            <section class="mt-4 sm:mt-8">
                <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-800">Personal Information</h3>
                <div class="mb-4 sm:mb-6">
                    <label for="username" class="ml-2 sm:ml-6 text-xs sm:text-base">Username</label>
                    <div class="relative flex flex-row mb-2 gap-2 items-center">
                        <div class="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 flex items-center">
                            <span class="text-gray-500 font-bold text-xs sm:text-base">@</span>
                        </div>
                        <input
                            name="username"
                            class="w-full py-1.5 sm:py-2 rounded-full font-bold pl-8 sm:pl-10 pr-6 sm:pr-8 border border-green-400 text-xs sm:text-base"
                            type="text"
                            :value="user.username"
                        >
                    </div>
                    <label for="name" class="ml-2 sm:ml-6 text-xs sm:text-base">Full Name</label>
                    <input name="name" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-gray-500 text-xs sm:text-base" type="text" :value="user.fullName" readonly>
                    <label for="dob" class="ml-2 sm:ml-6 text-xs sm:text-base">Date of Birth</label>
                    <input name="dob" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-xs sm:text-base" type="date" :value="user.username">
                </div>
            </section>
            <section class="mt-4 sm:mt-8">
                <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-800">Contact Information</h3>
                <label for="email" class="ml-2 sm:ml-6 text-xs sm:text-base">Email</label>
                <input name="email" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-xs sm:text-base" type="email" :value="user.email">
                <label for="phone" class="ml-2 sm:ml-6 text-xs sm:text-base">Phone Number</label>
                <input name="phone" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-xs sm:text-base" type="tel" :value="user.phoneNumber">
            </section>
            <div class="flex justify-center flex-wrap gap-2 sm:gap-4 my-4 sm:my-6">
                <button class="px-3 sm:px-6 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-xs sm:text-base">
                    Change Password
                </button>
                <button class="px-3 sm:px-6 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-xs sm:text-base">
                    Update Financial Info
                </button>
            </div>
            <section>
                <hr class="my-4 sm:my-6 border-gray-300">
                <div class="mt-4 sm:mt-6 flex justify-end">
                    <button class="px-3 sm:px-6 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-xs sm:text-base">
                        Save Changes
                    </button>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAccessToken, refreshToken, logout } from '@/auth';

const user = ref({
    profilePicture: '',
    username: '',
    fullName: '',
    category: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
});
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
    isLoading.value = true;
    error.value = null;
    const authHeader = () => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
    });
    try {
        // let userRes = await fetch('https://NightinGale.pythonanywhere.com/api/users', {
        //     headers: authHeader()
        // });
        let userRes = await apiFetch('https://NightinGale.pythonanywhere.com/api/users/');
        if (userRes.status === 401) {
            const newToken = await refreshToken();
            if (newToken) {
                userRes = await fetch('https://NightinGale.pythonanywhere.com/api/users', {
                    headers: { ...authHeader(), 'Authorization': `Bearer ${newToken}` }
                });
            } else {
                logout();
                return;
            }
        }
        if (!userRes.ok) throw new Error('Failed to fetch user');
        const userData = await userRes.json();
        if (Array.isArray(userData) && userData.length > 0) {
            user.value = userData[0];
        } else if (userData && typeof userData === 'object') {
            user.value = userData;
        }
    } catch (e) {
        error.value = e.message || 'Error loading user';
    } finally {
        isLoading.value = false;
    }
});
</script>