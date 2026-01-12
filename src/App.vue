<script setup>
import { RouterView, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import HeaderConst from './components/HeaderConst.vue';
import FooterConst from './components/FooterConst.vue';

const route = useRoute();
const elfsightLoaded = ref(false);
const showWhatsApp = ref(false);

const excludedPages = ['signup', 'login', 'contact'];

onMounted(() => {
  // Check if Elfsight platform is available
  if (window.eapps) {
    elfsightLoaded.value = true;
    showWhatsApp.value = !excludedPages.includes(route.name);
  } else {
    console.warn('Elfsight platform failed to load');
  }
});
</script>

<template>
  <HeaderConst v-if="!excludedPages.includes(route.name)" />
  <main>
    <RouterView />
  </main>
  <FooterConst v-if="!excludedPages.includes(route.name)" />
  <!-- Elfsight WhatsApp Chat Widget -->
  <div
    v-if="showWhatsApp && elfsightLoaded"
    class="elfsight-app-bdf67417-783d-439a-aa16-8fdca8ddad14"
    data-elfsight-app-lazy
  ></div>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
