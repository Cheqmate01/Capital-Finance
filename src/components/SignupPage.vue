<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-black bg-[url('/src/assets/AuthPages/AuthBackgroundSVG.png')] bg-cover bg-center bg-fixed min-h-screen">
        <RouterLink to="/">
            <div class="fixed top-18 left-18 bg-white hover:bg-green-400 transition-all duration-300 rounded-full px-2 py-2.5">
                <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-2xl text-green-500" />
            </div>
        </RouterLink>
        <div class="flex justify-center items-center min-h-screen">
            <div class="bg-radial-[at_-295%_-295%] from-white to-[] rounded-2xl shadow-xl p-8 max-w-sm w-full border border-gray-700 m-auto">
                <div class="text-center mb-6">
                    <img src="@/assets/AuthPages/logo.png" alt="Company Logo" class="mx-auto h-20 w-20 mb-3">
                    <h1 class="text-2xl font-bold text-white">Create Account</h1>
                    <p class="text-gray-400 mt-1 text-sm">Start your journey today.</p>
                </div>
                <form action="#" method="POST" class="space-y-4">
                    <div>
                        <label for="full-name" class="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                        <input type="text" name="full-name" id="full-name" autocomplete="name" required
                            class="w-full px-3 py-1.5 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-sm"
                            placeholder="John Doe">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                        <input type="email" name="email" id="email" autocomplete="email" required
                            class="w-full px-3 py-1.5 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-sm"
                            placeholder="you@example.com">
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input type="password" name="password" id="password" autocomplete="new-password" required
                            class="w-full px-3 py-1.5 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-sm"
                            placeholder="••••••••">
                    </div>
                    <div>
                        <label for="confirm-password" class="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" autocomplete="new-password" required
                            class="w-full px-3 py-1.5 bg-gray-700 border border-gray-600 rounded focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-sm"
                            placeholder="••••••••">
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" name="terms" type="checkbox" required
                                class="h-4 w-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500">
                        </div>
                        <div class="ml-2 text-sm">
                            <label for="terms" class="font-medium text-gray-300">
                                I agree to the <a href="#" class="text-green-400 hover:text-green-500">Terms</a> and <a href="#" class="text-green-400 hover:text-green-500">Privacy</a>.
                            </label>
                        </div>
                    </div>
                    <div class="w-fit m-auto">
                        <button type="submit"
                                class="px-10 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-base">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div class="mt-6 text-center text-sm">
                    <p class="text-gray-400">
                        Already have an account? 
                    </p>
                    <RouterLink to="/login" class="text-green-400 hover:text-green-500 font-medium">Log in</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>