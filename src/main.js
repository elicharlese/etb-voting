import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'tailwindcss/tailwind.css'
import './assets/css/index.styl'
import helpers from './mixins/helpers'

const app = createApp(App)

app.config.globalProperties.$AppName = process.env.VUE_APP_NAME || 'Voting App'
app.config.globalProperties.$TokenName = process.env.VUE_APP_TOKEN || 'TokenName'

app.use(store).use(router).mixin(helpers).mount('#app')
