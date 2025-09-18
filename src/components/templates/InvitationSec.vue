<template>
    <div class="flex flex-col sm:flex-row m-4 sm:px-30 sm:m-20 py-10 sm:py-0 justify-around gap-4">
        <div class="flex-1 flex flex-col items-start justify-center gap-2">
            <p class="text-xs">Everywhile we live, we die as well</p>
            <h3 class="font-bold text-2xl sm:text-5xl">Diversify Your Portfolio</h3>
            <h5 class="font-bold text-lg sm:text-4xl">Achieve Financial Growth</h5>
            <p class="text-xs sm:text-base">Invest in a wide range of assets to minimize risk and maximize returns.</p>
        </div>
        <div class="flex-1 max-w-full sm:max-w-1/3 flex flex-row items-center overflow-hidden rounded-xl">
            <img src="@/assets/InvitationSVG.png" class="w-20 sm:max-w-1/3" alt="">
            <div class="mx-2 sm:mx-5">
                <h5 class="font-bold text-base sm:text-xl">Profiling Plus</h5>
                <p class="text-xs">Unlock personalized investment strategies powered by advanced technology and AI, tailored just for you.</p>
                <RouterLink to="/auth/login" class="bg-green-400 hover:bg-green-500 hover:animate-bounce text-white text-xs sm:text-sm mt-1 px-2 sm:px-3 py-0.5 rounded-full">Get In</RouterLink>
            </div>
        </div>
    </div>
</template>