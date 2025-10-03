
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { checkAuthOnLoad } from './auth'

import './assets/main.css'

checkAuthOnLoad();

const app = createApp(App)

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
