<template>
  <HeroSec />
  <InvitationSec />
  <img src="@/assets/InvitationSVG1.png" class="w-full -mb-1 pointer-events-none" alt="">
  <AdSec />
  <StepSec />
  <!-- <div>
    <div class="h-[250px] bg-black">
      <iframe allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget-docs%2Fwidgets%2Fscreeners%2Fcrypto-mkt-screener%2F%22%7D" title="crypto mkt-screener TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: calc(100% - 32px); width: 100%;"></iframe>
    </div>
  </div> -->
  <PartenerSec />
</template>

<script setup>
import HeroSec from './templates/HeroSec.vue';
import InvitationSec from './templates/InvitationSec.vue';
import StepSec from './templates/StepSec.vue';
import PartenerSec from './templates/PartenerSec.vue';
import AdSec from './templates/AdSec.vue';
</script>
