import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// import './mock'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)

app.use(store)
  .use(ViewUIPlus)
  .use(router)
  .mount('#app')
