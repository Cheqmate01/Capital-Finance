<template>
  <header class="fixed top-0 left-0 w-full bg-black text-white z-50 p-5">
    <div class="flex items-center justify-between p-4">
      <div class="flex flex-row items-center py-1">
        <img src="@/assets/logo.png" class="w-10" alt="">
        <h1 class="font-extrabold text-2xl text-green-400">Standard</h1>
        <p class="text-xl">capitalfinance</p>
      </div>
      <div class="flex flex-row gap-4 float-right">
        <RouterLink to="/login"><button class="bg-[#505050] hover:bg-green-400 border-2 hover:text-black px-5 py-1 rounded-full transition-all duration-300 transition-discrete">Sign In</button></RouterLink>
        <RouterLink to="/signup"><button class="bg-green-400 hover:bg-[#505050] text-black hover:text-white px-5 py-1 rounded-full transition-all duration-300 transition-discrete">Sign Up</button></RouterLink>
      </div>
    </div>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="">
      <nav class="flex flex-row justify-center gap-4 text-lg">
        <RouterLink to="/" class="transform transition duration-300 hover:-translate-x-1 ease-in-out hover:text-green-400">Home</RouterLink><span>|</span>
        <RouterLink to="/about" class="transform transition duration-300 hover:translate-x-1 ease-in-out hover:text-green-400">About</RouterLink>
      </nav>
    </div>
  </header>
  <header class="w-full bg-black text-white z-50 p-5">
    <div class="flex items-center justify-between p-4">
      <div class="flex flex-row items-center py-1">
        <img src="@/assets/logo.png" class="w-10" alt="">
        <h1 class="font-extrabold text-2xl text-green-400">Standard</h1>
        <p class="text-xl">capitalfinance</p>
      </div>
      <div class="flex flex-row gap-4 float-right">
        <RouterLink to="/login"><button class="bg-[#505050] hover:bg-green-400 border-2 hover:text-black px-5 py-1 rounded-full transition-all duration-300 transition-discrete">Sign In</button></RouterLink>
        <RouterLink to="/signup"><button class="bg-green-400 hover:bg-[#505050] text-black hover:text-white px-5 py-1 rounded-full transition-all duration-300 transition-discrete">Sign Up</button></RouterLink>
      </div>
    </div>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="">
      <nav class="flex flex-row justify-center gap-4 text-lg">
        <RouterLink to="/" class="transform transition duration-300 hover:-translate-x-1 ease-in-out hover:text-green-400">Home</RouterLink><span>|</span>
        <RouterLink to="/about" class="transform transition duration-300 hover:translate-x-1 ease-in-out hover:text-green-400">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>