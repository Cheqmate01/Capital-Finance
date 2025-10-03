<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { setTokens, isAuthenticated } from '@/auth';

const fullName = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref('');
const router = useRouter();

async function handleSignup(e) {
    e.preventDefault();
    error.value = '';
    if (password.value !== confirmPassword.value) {
        error.value = 'Passwords do not match.';
        return;
    }
    loading.value = true;
    try {
        const res = await fetch('NightinGale.pythonanywhere.com/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ full_name: fullName.value, username: username.value, password: password.value })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || data.message || 'Signup failed');
        // After signup, auto-login using JWT
        const loginRes = await fetch('NightinGale.pythonanywhere.com/api/auth/token/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username.value, password: password.value })
        });
        const loginData = await loginRes.json();
        if (loginRes.ok && loginData.access && loginData.refresh) {
            setTokens(loginData.access, loginData.refresh);
            isAuthenticated.value = true;
            router.push('/dashboard');
        } else {
            throw new Error('Auto-login failed after signup');
        }
    } catch (err) {
        error.value = err.message || 'Signup failed';
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <div class="bg-black bg-[url('/src/assets/AuthPages/AuthBackgroundSVG.png')] bg-cover bg-center bg-fixed min-h-screen">
        <RouterLink to="/">
            <div class="fixed top-4 left-4 bg-white hover:bg-green-400 transition-all duration-300 rounded-full px-1.5 py-2">
                <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-lg sm:text-2xl text-green-500" />
            </div>
        </RouterLink>
        <div class="flex justify-center items-center min-h-screen p-2 sm:p-0">
            <div class="bg-radial-[at_-295%_-295%] from-white to-[] rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 pb-6 sm:pb-10 max-w-xs sm:max-w-sm w-full border border-gray-700 m-auto">
                <div class="text-center mb-4 sm:mb-6">
                    <img src="@/assets/AuthPages/logo.png" alt="Company Logo" class="mx-auto h-12 w-12 sm:h-20 sm:w-20 mb-2 sm:mb-3">
                    <h1 class="text-lg sm:text-2xl font-bold text-white">Create Account</h1>
                    <p class="text-gray-400 mt-1 text-xs sm:text-sm">Start your journey today.</p>
                </div>
                <form @submit="handleSignup" class="space-y-2 sm:space-y-4">
                    <div>
                        <label for="full-name" class="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Full Name</label>
                        <input type="text" name="full-name" id="full-name" autocomplete="name" required
                            class="w-full px-2 sm:px-3 py-1 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-xs sm:text-sm"
                            placeholder="John Doe" v-model="fullName">
                    </div>
                    <div>
                        <label for="username" class="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Username</label>
                        <input type="text" name="username" id="username" autocomplete="username" required
                            class="w-full px-2 sm:px-3 py-1 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-xs sm:text-sm"
                            placeholder="yourusername" v-model="username">
                    </div>
                    <div>
                        <label for="password" class="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input type="password" name="password" id="password" autocomplete="new-password" required
                            class="w-full px-2 sm:px-3 py-1 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-xs sm:text-sm"
                            placeholder="••••••••" v-model="password">
                    </div>
                    <div>
                        <label for="confirm-password" class="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" autocomplete="new-password" required
                            class="w-full px-2 sm:px-3 py-1 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-xs sm:text-sm"
                            placeholder="••••••••" v-model="confirmPassword">
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-4 sm:h-5">
                            <input id="terms" name="terms" type="checkbox" required
                                class="h-3 w-3 sm:h-4 sm:w-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500">
                        </div>
                        <div class="ml-2 text-xs sm:text-sm">
                            <label for="terms" class="font-medium text-gray-300">
                                I agree to the <a href="#" class="text-green-400 hover:text-green-500">Terms</a> and <a href="#" class="text-green-400 hover:text-green-500">Privacy</a>.
                            </label>
                        </div>
                    </div>
                    <div v-if="error" class="text-red-400 text-xs sm:text-sm text-center">{{ error }}</div>
                    <div class="w-fit m-auto">
                        <button type="submit" :disabled="loading"
                                class="btn px-4 sm:px-10 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-xs sm:text-base">
                            <span v-if="loading">Signing Up...</span>
                            <span v-else>Sign Up</span>
                        </button>
                    </div>
                </form>
                <div class="mt-4 sm:mt-6 text-center text-xs sm:text-sm">
                    <p class="text-gray-400">
                        Already have an account? 
                    </p>
                    <RouterLink to="/auth/login" class="text-green-400 hover:text-green-500 font-medium">Log in</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>