<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg p-4 flex items-center gap-3">
      <svg class="animate-spin h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <div class="text-gray-800">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ message: { type: String, default: 'Loading...' } })
</script>
