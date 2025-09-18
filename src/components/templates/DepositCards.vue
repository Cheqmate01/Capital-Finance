<script setup>
const props = defineProps(['iconBg', 'icon', 'name', 'desc', 'address'])
const emit = defineEmits(['copy'])

function copyAddress() {
  navigator.clipboard.writeText(props.address)
    .then(() => emit('copy'))
    .catch(() => {})
}
</script>

<template>
    <div class="bg-gray-900 p-6 rounded-2xl flex items-center justify-between shadow-lg">
        <div class="flex items-center space-x-4">
            <div :class="iconBg + ' p-2 rounded-full'" v-html="icon"></div>
            <div>
                <h2 class="text-xl font-semibold">{{ name }}</h2>
                <p class="text-gray-400 text-sm invisible sm:visible">{{ desc }}</p>
            </div>
        </div>
        <button
            class="copy-button bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full focus:outline-none"
            @click="copyAddress"
        >
            Copy Address
        </button>
    </div>
</template>