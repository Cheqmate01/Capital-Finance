<template>
    <div class="bg-[#070024] h-dvh text-white relative">
        <img src="@/assets/HeaderSVG-1.png" class="absolute top-10 left-1/12 w-110" alt="">
        <div class="w-fit m-auto text-center pt-24">
            <h1 class="text-5xl font-bold">Your Gateway to</h1>
            <h1 class="text-5xl font-bold">Global Investments</h1>
            <p class="mt-10">Achieve financial freedom starting today!</p>
            <RouterLink to="/signup"><button class="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full mt-3 transition-colors duration-300 transition-discrete">Start Investing Now</button></RouterLink>
            <div class="mt-12 grid-cols-4 grid gap-4">
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
                <!-- TradingView Widget END -->
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
                <!-- TradingView Widget END -->
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
                <!-- TradingView Widget END -->
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
                <!-- TradingView Widget END -->
            </div>
        </div>
        <img src="@/assets/HeroSVG.png" class="absolute bottom-0 w-full" alt="">
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
</style>