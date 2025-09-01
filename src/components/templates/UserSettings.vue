<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="relative max-w-xl w-full p-8 bg-white rounded-2xl shadow-lg font-sans max-h-10/12 overflow-y-auto">
            <RouterLink to="/dashboard">
                <div class="absolute top-8 right-8 bg-white hover:bg-red-400 transition-all duration-300 rounded-full px-2 py-2.5">
                    <font-awesome-icon icon="fa-solid fa-x" class="text-2xl text-red-500" />
                </div>
            </RouterLink>
            <section class="flex items-center justify-center mb-8">
                <div class="relative w-28 h-28">
                    <img
                        class="w-28 h-28 rounded-full object-cover border-4 border-gray-200"
                        :src="user.profilePicture"
                        alt="Profile Picture"
                    />
                    <span class="absolute inset-0 flex items-center justify-center">
                        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-gray-700 bg-white bg-opacity-80 rounded-full p-2 text-xl shadow" />
                    </span>
                </div>
            </section>

            <section class="mt-8">
                <h3 class="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
                <div class="mb-6">
                    <label for="username" class="ml-6">Username</label>
                    <div class="relative flex flex-row mb-2 gap-2 items-center">
                        <div class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                            <span class="text-gray-500 font-bold">@</span>
                        </div>
                        <input
                            name="username"
                            class="w-full py-2 rounded-full font-bold pl-10 pr-8 border border-green-400"
                            type="text"
                            :value="user.username"
                        >
                    </div>
                    <label for="name" class="ml-6">Full Name</label>
                    <input name="name" class="w-full py-2 rounded-full mb-2 font-bold px-8 border border-green-400 text-gray-500 " type="text" :value="user.fullName" readonly>
                    <label for="dob" class="ml-6">Date of Birth</label>
                    <input name="dob" class="w-full py-2 rounded-full mb-2 font-bold px-8 border border-green-400" type="date" :value="user.username">
                </div>
            </section>
            <section class="mt-8">
                <h3 class="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
                <label for="email" class="ml-6">Email</label>
                <input name="email" class="w-full py-2 rounded-full mb-2 font-bold px-8 border border-green-400" type="email" :value="user.email">
                <label for="phone" class="ml-6">Phone Number</label>
                <input name="phone" class="w-full py-2 rounded-full mb-2 font-bold px-8 border border-green-400" type="tel" :value="user.phoneNumber">
            </section>
            <div class="flex justify-center flex-wrap gap-4 my-6">
                <button class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Change Password
                </button>
                <button class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Update Financial Info
                </button>
            </div>
            <section>
                <hr class="my-6 border-gray-300">
                <div class="mt-6 flex justify-end">
                    <button class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Save Changes
                    </button>
                </div>
            </section>
        </div>
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