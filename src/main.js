import './assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { install } from 'vue3-recaptcha-v2'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    id
  }
})
const pinia = createPinia()
const app = createApp(App)
app.use(install, {
  sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  cnDomains: false
})
app.use(i18n)
app.use(router)
app.use(pinia)
app.mount('#app')
