<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-0">
        <div class="relative w-full max-w-xs sm:max-w-xl p-2 sm:p-8 bg-white rounded-2xl shadow-lg font-sans max-h-[90vh] overflow-y-auto">
            <RouterLink to="/dashboard">
                <div class="absolute top-2 right-2 sm:top-8 sm:right-8 bg-white hover:bg-red-400 transition-all duration-300 rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2.5">
                    <font-awesome-icon icon="fa-solid fa-x" class="text-xl sm:text-2xl text-red-500" />
                </div>
            </RouterLink>
            <section class="flex flex-col items-center justify-center mb-4 sm:mb-8">
                <div class="relative w-20 h-20 sm:w-28 sm:h-28 cursor-pointer" @click="triggerFileInput">
                    <img
                        class="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-gray-200"
                        :src="user.profilePicture"
                        alt="Profile Picture"
                    />
                    <span class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                        <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-white text-lg sm:text-xl" />
                    </span>
                </div>
                <input type="file" ref="fileInput" @change="handleFileChange" class="hidden" accept="image/*">
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
                            :placeholder="user.username"
                            readonly
                        >
                    </div>
                    <label for="name" class="ml-2 sm:ml-6 text-xs sm:text-base">Full Name</label>
                    <input name="name" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-gray-500 text-xs sm:text-base" type="text" v-model="user.fullName">
                    <label for="dob" class="ml-2 sm:ml-6 text-xs sm:text-base">Date of Birth</label>
                    <input name="dob" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-xs sm:text-base" type="date" v-model="user.dateOfBirth">
                </div>
            </section>
            <section class="mt-4 sm:mt-8">
                <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-800">Contact Information</h3>
                <label for="email" class="ml-2 sm:ml-6 text-xs sm:text-base">Email</label>
                <input name="email" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-xs sm:text-base" type="email" v-model="user.email">
                <label for="phone" class="ml-2 sm:ml-6 text-xs sm:text-base">Phone Number</label>
                <input name="phone" class="w-full py-1.5 sm:py-2 rounded-full mb-2 font-bold px-6 sm:px-8 border border-green-400 text-xs sm:text-base" type="tel" v-model="user.phoneNumber">
            </section>
            <div class="flex justify-center flex-wrap gap-2 sm:gap-4 my-4 sm:my-6">
                <button class="px-3 sm:px-6 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-xs sm:text-base">
                    Change Password
                </button>
            </div>
            <section>
                <hr class="my-4 sm:my-6 border-gray-300">
                <div v-if="updateStatus.message" class="text-center mb-4" :class="updateStatus.isError ? 'text-red-500' : 'text-green-500'">
                    {{ updateStatus.message }}
                </div>
                <div class="mt-4 sm:mt-6 flex justify-end">
                    <button @click="updateUser" :disabled="isUpdating" class="px-3 sm:px-6 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-xs sm:text-base disabled:bg-gray-400">
                        <span v-if="isUpdating">Saving...</span>
                        <span v-else>Save Changes</span>
                    </button>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { apiFetch, logout } from '@/auth';

const user = ref({
    profilePicture: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
});
const isLoading = ref(true);
const error = ref(null);
const isUpdating = ref(false);
const updateStatus = reactive({
    message: '',
    isError: false
});
const fileInput = ref(null);

function triggerFileInput() {
    fileInput.value?.click();
}

async function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profile_picture', file);

    try {
        const response = await apiFetch('https://NightinGale.pythonanywhere.com/api/profile/', {
            method: 'PATCH',
            body: formData
        });

        if (!response.ok) {
            let errorMessage = 'Failed to upload image.';
            try {
                const errorData = await response.json();
                // Prefer normalized message, then detail, then flatten errors dict
                if (errorData.message) {
                    errorMessage = errorData.message;
                } else if (errorData.detail) {
                    errorMessage = errorData.detail;
                } else if (errorData.errors) {
                    // flatten errors dict into a single string
                    const parts = [];
                    for (const [k, v] of Object.entries(errorData.errors)) {
                        const msg = Array.isArray(v) ? v.join(', ') : String(v);
                        parts.push(`${k}: ${msg}`);
                    }
                    errorMessage = parts.join('; ');
                } else {
                    errorMessage = JSON.stringify(errorData) || errorMessage;
                }
            } catch (parseErr) {
                // fallback to text if response isn't JSON
                try {
                    const txt = await response.text();
                    if (txt) errorMessage = txt;
                } catch (e) {
                    // ignore
                }
            }
            throw new Error(`${response.status}: ${errorMessage}`);
        }

        let updatedUserData = {};
        try {
            updatedUserData = await response.json();
        } catch (parseErr) {
            // If backend returned plain text or HTML, avoid crashing and treat as no-change
            try {
                const txt = await response.text();
                console.warn('Expected JSON but got:', txt);
            } catch (e) {}
            updatedUserData = {};
        }
        user.value.profilePicture = updatedUserData.profile_picture || user.value.profilePicture;
        updateStatus.message = 'Profile picture updated successfully!';
        updateStatus.isError = false;
    } catch (e) {
        if (e.message === 'Session expired' || e.message === 'Authentication required') {
            logout();
            return;
        }
        updateStatus.message = e.message || 'An error occurred while uploading the image.';
        updateStatus.isError = true;
    } finally {
        // Reset file input so selecting the same file again will trigger change
        try {
            if (fileInput.value) {
                fileInput.value.value = '';
            }
        } catch (e) {}

        setTimeout(() => {
            updateStatus.message = '';
        }, 3000);
    }
}

async function updateUser() {
    isUpdating.value = true;
    updateStatus.message = '';
    updateStatus.isError = false;

    try {
        const response = await apiFetch('https://NightinGale.pythonanywhere.com/api/profile/', {
            method: 'PATCH',
            body: JSON.stringify({
                profile_picture: user.value.profilePicture,
                full_name: user.value.fullName,
                email: user.value.email,
                phone_number: user.value.phoneNumber,
                date_of_birth: user.value.dateOfBirth,
            })
        });

        if (!response.ok) {
                let errorMessage = 'Failed to update user details.';
                try {
                    const errorData = await response.json();
                    if (errorData.message) {
                        errorMessage = errorData.message;
                    } else if (errorData.detail) {
                        errorMessage = errorData.detail;
                    } else if (errorData.errors) {
                        const parts = [];
                        for (const [k, v] of Object.entries(errorData.errors)) {
                            const msg = Array.isArray(v) ? v.join(', ') : String(v);
                            parts.push(`${k}: ${msg}`);
                        }
                        errorMessage = parts.join('; ');
                    } else {
                        errorMessage = JSON.stringify(errorData) || errorMessage;
                    }
                } catch (parseErr) {
                    try {
                        const txt = await response.text();
                        if (txt) errorMessage = txt;
                    } catch (e) {}
                }
                throw new Error(`${response.status}: ${errorMessage}`);
        }

        let updatedUserData = {};
        try {
            updatedUserData = await response.json();
        } catch (parseErr) {
            try {
                const txt = await response.text();
                console.warn('Expected JSON but got:', txt);
            } catch (e) {}
            updatedUserData = {};
        }
        // Map snake_case from API to camelCase in the local state
        user.value = { 
            ...user.value, 
            ...{
                ...updatedUserData,
                profilePicture: updatedUserData.profile_picture || user.value.profilePicture,
                fullName: updatedUserData.full_name || user.value.fullName,
                dateOfBirth: updatedUserData.date_of_birth || user.value.dateOfBirth,
                phoneNumber: updatedUserData.phone_number || user.value.phoneNumber
            }
        };
        updateStatus.message = 'Profile updated successfully!';

    } catch (e) {
        if (e.message === 'Session expired' || e.message === 'Authentication required') {
            logout(); // apiFetch handles logout, but we can ensure redirection here
            return;
        }
        updateStatus.message = e.message || 'An error occurred while updating.';
        updateStatus.isError = true;
    } finally {
        isUpdating.value = false;
        setTimeout(() => {
            updateStatus.message = '';
        }, 3000);
    }
}

onMounted(async () => {
    isLoading.value = true;
    error.value = null;
    
    try {
        // Using a more specific endpoint for the current user
        const userRes = await apiFetch('https://NightinGale.pythonanywhere.com/api/profile/');
        
        if (!userRes.ok) throw new Error('Failed to fetch user');
        let userData = {};
        try {
            userData = await userRes.json();
        } catch (parseErr) {
            try {
                const txt = await userRes.text();
                console.warn('Expected JSON but got:', txt);
            } catch (e) {}
            throw new Error('Invalid response format from server');
        }
        
        user.value = {
            ...userData,
            profilePicture: userData.profile_picture || '',
            fullName: userData.full_name || '',
            dateOfBirth: userData.date_of_birth || '', // Ensure date format is YYYY-MM-DD
            phoneNumber: userData.phone_number || ''
        };

    } catch (e) {
        if (e.message === 'Session expired' || e.message === 'Authentication required') {
            logout();
            return;
        }
        error.value = e.message || 'Error loading user';
    } finally {
        isLoading.value = false;
    }
});
</script>