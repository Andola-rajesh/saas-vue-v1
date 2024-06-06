import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from '../src/store';
import axios from 'axios';
import ApiService from '../src/services/api.service';
import TokenService from '../src/services/storage.service';

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://osbaseleaf-api.andolasoft.co.in/v1/';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')