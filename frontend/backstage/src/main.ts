import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ViewUIPlus from 'view-ui-plus'
createApp(App).use(store).use(router).use(ViewUIPlus).mount('#app')
