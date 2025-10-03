<template>
    <div class="hero-section bg-[#070024] h-dvh text-white relative overflow-hidden px-0">
        <img src="@/assets/HeaderSVG-1.png" class="absolute hidden sm:block top-4 sm:top-10 sm:left-1/12 w-40 sm:w-110 z-0 pointer-events-none" alt="">
        <div class="relative z-20 flex flex-col justify-center min-h-[60vh] sm:min-h-dvh w-full text-center pt-16 sm:pt-24">
            <h1 class="text-3xl sm:text-5xl font-bold">Your Gateway to</h1>
            <h1 class="text-3xl sm:text-5xl font-bold">Global Investments</h1>
            <p class="mt-4 sm:mt-10 text-xs sm:text-base">Achieve financial freedom starting today!</p>
            <RouterLink to="/auth/signup">
                <button class="btn bg-green-400 hover:bg-green-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mt-2 sm:mt-3 transition-colors duration-300 transition-discrete text-xs sm:text-base">
                    Start Investing Now
                </button>
            </RouterLink>
            <div class="m-auto mt-6 sm:mt-12 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-5xl px-2 sm:px:0">
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
                <div class="tradingview-widget-container hidden sm:block">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
                <div class="tradingview-widget-container hidden sm:block">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
            </div>
        </div>
    <img src="@/assets/HeroSVG.png" class="absolute bottom-0 w-full z-10 pointer-events-none" alt="">
    </div>
</template>

<script>
export default {
    mounted() {
        // Remove any existing widget scripts to avoid duplicates
        const existingScripts = document.querySelectorAll('script[src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"]');
        existingScripts.forEach(s => s.remove());

        // Find all widget containers and assign different symbols
        const widgetContainers = this.$el.querySelectorAll('.tradingview-widget-container__widget');
        const symbols = [
            "BITSTAMP:BTCUSDT",
            "BINANCE:ETHUSDT",
            "OANDA:XAUUSD",
            "OANDA:XPTUSD"
        ];
        widgetContainers.forEach((container, idx) => {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": symbols[idx % symbols.length],
                "chartOnly": false,
                "dateRange": "12M",
                "noTimeScale": false,
                "colorTheme": "dark",
                "isTransparent": true,
                "locale": "en",
                "width": "100%",
                "autosize": true,
                "height": "100%"
            });
            container.appendChild(script);
        });
    }
}
</script>

<style scoped>
.tradingview-widget-container {
    border: 1px solid #1d1930;
    border-radius: 8px;
}
.tradingview-widget-container__widget {
    pointer-events: none;
}
.hero-section {
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 100 100"%3E%3Cdefs%3E%3Cpattern id="p" width="5" height="5" patternUnits="userSpaceOnUse"%3E%3Cpath fill="%232e3a50" d="M0 0h1v1H0zm2 2h1v1H2z"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23p)"/%3E%3C/svg%3E');
    background-size: cover;
    animation: pulse-grid 20s infinite linear;
}
@keyframes pulse-grid {
    0% { background-position: 0 0; }
    100% { background-position: -200px -200px; }
}
</style>