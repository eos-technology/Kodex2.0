import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import axios from '@/plugins/Axios'
import App from './App.vue'
import { router } from './router'
import VueApexCharts from 'vue3-apexcharts'

//PLUGINS
import vuetify from './plugins/Vuetify'
import globalComponents from './plugins/GlobalComponents'
import './plugins/Luxon'
import { i18n } from './plugins/i18n'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.config.globalProperties.mode = 'dev'

//PLUGINS
app.use(globalComponents)
app.use(vuetify)
app.use(i18n)
app.use(VueApexCharts)
app.use(VueClipboard)

//PROJECT BASE
app.use(pinia)
app.use(router)

app.use(Vue3Toasity, {
    autoClose: 3000,
    // ...
} as ToastContainerOptions,)

app.mount('#app')

const prodApi = 'https://space-api.kodexpay.com/app/v1'
const devApi = 'https://93cd-131-100-48-235.ngrok-free.app/v2'

app.config.globalProperties.apiUrl = app.config.globalProperties.mode == 'dev' ? devApi : prodApi
axios.defaults.baseURL = app.config.globalProperties.apiUrl

/* (window as any).openNotification = function (
    title: string | null = null,
    text: string,
    variant: string = 'success'
  ) {
    const toast = useToast(); // Asumiendo que useToast está disponible en tu entorno
  
    toast[variant](text, {
      position: "top-right",
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: "button",
      icon: false,
      rtl: false
    });
  }; */
