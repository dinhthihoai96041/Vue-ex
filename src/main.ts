import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import "primeicons/primeicons.css" //icons
import "@fortawesome/fontawesome-free/css/all.min.css" //icons



import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

// PrimeVue
import PrimeVue from 'primevue/config'; // import plugin PrimeVue
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Lara from "@primeuix/themes/lara";

const app = createApp(App)

app.use(router)
app.use(VueToast)
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      darkModeSelector: "system", // auto sáng/tối theo hệ thống
    },
  },
});


app.component('Button', Button);
app.component('InputText', InputText);
app.mount('#app')
