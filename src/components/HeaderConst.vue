<template>
  <header class="fixed top-0 left-0 w-full bg-black text-white z-50 p-5">
    <div class="flex items-center justify-between p-4">
      <div class="flex flex-row items-center py-1">
        <img src="@/assets/logo.png" class="w-10" alt="">
        <h1 class="font-extrabold text-2xl text-green-400">Standard</h1>
        <p class="text-xl">capitalfinance</p>
      </div>
      <div v-if="!isAuthenticated" class="flex flex-row gap-4 float-right">
        <RouterLink to="/auth/login"><button class="bg-[#505050] hover:bg-green-400 border-2 hover:text-black px-5 py-1 rounded-full transition-all duration-300 transition-discrete">Sign In</button></RouterLink>
        <RouterLink to="/auth/signup"><button class="bg-green-400 hover:bg-[#505050] text-black hover:text-white px-5 py-1 rounded-full transition-all duration-300 transition-discrete">Sign Up</button></RouterLink>
      </div>
      <div v-if="isAuthenticated" class="flex items-center gap-2 float-right relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-700 flex items-center justify-center shadow-lg cursor-pointer">
          <font-awesome-icon icon="fa-solid fa-user-tie" class="text-white text-3xl drop-shadow" />
        </div>
        <font-awesome-icon icon="fa-solid fa-caret-down" />
        <transition name="fade">
          <div v-if="showDropdown" class="absolute right-0 top-10 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2 z-50">
            <RouterLink to="/profile" class="block px-4 py-2 hover:bg-green-100">Profile</RouterLink>
            <RouterLink to="/settings" class="block px-4 py-2 hover:bg-green-100">Settings</RouterLink>
            <button class="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600">Logout</button>
          </div>
        </transition>
      </div>
    </div>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="">
      <nav onmouseover="dashDropdown" v-if="isAuthenticated" class="flex flex-row justify-center gap-4 text-lg">
        <RouterLink to="/dashboard/user" class="transform transition duration-300 hover:-translate-x-1 ease-in-out hover:text-green-400">User</RouterLink><span>|</span>
        <RouterLink to="/dashboard/business" class="transform transition duration-300 hover:translate-x-1 ease-in-out hover:text-green-400">Business</RouterLink>
        <div class="dropdown"></div>
      </nav>
      <nav v-if="!isAuthenticated"class="flex flex-row justify-center gap-4 text-lg">
        <RouterLink to="/" class="transform transition duration-300 hover:-translate-x-1 ease-in-out hover:text-green-400">Home</RouterLink><span>|</span>
        <RouterLink to="/about" class="transform transition duration-300 hover:translate-x-1 ease-in-out hover:text-green-400">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { isAuthenticated } from '@/auth';
import { RouterLink } from 'vue-router';
import { ref } from 'vue'

const showDropdown = ref(false)

function dropdown() {
  dropdown = document.getElementsByClassName('dropdown');
  
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>