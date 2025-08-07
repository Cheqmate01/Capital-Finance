<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="border border-gray-700 transform hover:-translate-y-3 bg-gray-900 hover:bg-gray-800 card text-white p-5 m-3 text-center rounded-xl shadow-lg relative transition-all duration-300" @mouseover="isHovered = true" @mouseout="isHovered = false">
            <div class="icon-container my-4 w-fit h-fit p-2 rounded-full mx-auto font-bold" :class="{ 'bg-gray-600': !isHovered, 'bg-white': isHovered }">
            <font-awesome-icon icon="fa-solid fa-user-check" :class="{ 'text-white': !isHovered, 'text-green-400': isHovered }" />
            </div>
            <h5 class="font-bold pt-16 mb-2">Register Your Account</h5>
            <p>Create your account today to access a world of investment opportunities and financial insights.</p>
        </div>
        <div class="border border-gray-700 transform hover:-translate-y-3 bg-gray-900 hover:bg-gray-800 card text-white p-5 m-3 text-center rounded-xl shadow-lg relative transition-all duration-300" @mouseover="isHovered1 = true" @mouseout="isHovered1 = false">
            <div class="icon-container my-4 w-fit h-fit p-2 icon rounded-full items-center mx-auto font-bold" :class="{ 'bg-gray-600': !isHovered1, 'bg-white': isHovered1 }">
            <font-awesome-icon icon="fa-solid fa-clipboard-check" :class="{ 'text-white': !isHovered1, 'text-green-400': isHovered1 }" />
            </div>
            <h5 class="font-bold pt-16 mb-2">Choose Your Investment Plan</h5>
            <p>Select from a variety of investment plans tailored to your financial goals and risk appetite.</p>
        </div>
        <div class="border border-gray-700 transform hover:-translate-y-3 bg-gray-900 hover:bg-gray-800 card text-white p-5 m-3 text-center rounded-xl shadow-lg relative transition-all duration-300" @mouseover="isHovered2 = true" @mouseout="isHovered2 = false">
            <div class="icon-container my-4 w-fit h-fit p-2 icon rounded-full items-center mx-auto font-bold" :class="{ 'bg-gray-600': !isHovered2, 'bg-white': isHovered2 }">
            <font-awesome-icon icon="fa-solid fa-chart-line" :class="{ 'text-white': !isHovered2, 'text-green-400': isHovered2 }" />
            </div>
            <h5 class="font-bold pt-16 mb-2">Watch Your Portfolio Grow</h5>
            <p>Monitor your investments and watch your portfolio grow with our advanced tracking tools and insights.</p>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
const isHovered1 = ref(false);
const isHovered2 = ref(false);
</script>

<style scoped>
/* Add relative to the parent */
.relative {
    position:relative;
}

.icon-container {
  position: absolute; /* Take it out of the normal flow */
  top: 14%;            /* Initial vertical centering */
  left: 50%;           /* Initial horizontal centering */
  transform: translate(-50%, -50%); /* Precise centering */
  transition: all 0.3s ease-in-out;
}

.card:hover .icon-container {
  transform: translate(-50%, -50%) scale(1.2); /* Scale on hover */
}
</style>