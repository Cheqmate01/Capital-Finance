<template>
    <div class="max-w-xl mx-auto my-8 p-8 bg-white rounded-2xl shadow-lg font-sans">
        <section class="flex items-center mb-8">
            <img
                class="w-28 h-28 rounded-full object-cover mr-8 border-4 border-gray-200"
                :src="user.profilePicture"
                alt="Profile Picture"
            />
            <div class="flex-1">
                <h2 class="m-0 text-2xl font-bold text-gray-800">@{{ user.username }}</h2>
                <p class="my-1 text-gray-500">{{ user.fullName }}</p>
                <span class="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-xl text-base">{{ user.category }}</span>
            </div>
        </section>

        <section class="mt-8">
            <h3 class="text-lg font-semibold mb-4 text-gray-800">Transaction Traffic</h3>
            <div class="flex gap-6 mb-6">
                <div class="flex-1 bg-gray-100 p-6 rounded-lg text-center">
                    <span class="block text-gray-500 text-base mb-2">Total In</span>
                    <span class="text-xl font-bold text-green-700">{{ totalIn | currency }}</span>
                </div>
                <div class="flex-1 bg-gray-100 p-6 rounded-lg text-center">
                    <span class="block text-gray-500 text-base mb-2">Total Out</span>
                    <span class="text-xl font-bold text-red-700">{{ totalOut | currency }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const user = {
    profilePicture: "https://via.placeholder.com/120",
    username: "johndoe",
    fullName: "John Doe",
    category: "Premium User",
};

const transactions = [
    {
        id: 1,
        type: "in",
        amount: 500,
        date: "2024-06-01",
        description: "Salary",
    },
    {
        id: 2,
        type: "out",
        amount: 120,
        date: "2024-06-03",
        description: "Groceries",
    },
    {
        id: 3,
        type: "in",
        amount: 200,
        date: "2024-06-05",
        description: "Freelance",
    },
    {
        id: 4,
        type: "out",
        amount: 50,
        date: "2024-06-07",
        description: "Transport",
    },
];

function currency(value) {
    return "$" + Number(value).toLocaleString();
}

const totalIn = computed(() =>
    transactions
        .filter((tx) => tx.type === "in")
        .reduce((sum, tx) => sum + tx.amount, 0)
);

const totalOut = computed(() =>
    transactions
        .filter((tx) => tx.type === "out")
        .reduce((sum, tx) => sum + tx.amount, 0)
);
</script>

<style scoped>
    /* Removed all custom styles as they have been replaced with Tailwind CSS classes */
</style>