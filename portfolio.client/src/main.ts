import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'

import './styles/style.scss'
import FontAwesomeIcon from './utilities/fontawesome-icons'
import { highlightDirective } from './utilities/custom-directive'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('highlight', highlightDirective)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
