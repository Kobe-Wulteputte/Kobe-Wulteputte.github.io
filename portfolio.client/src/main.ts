import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import I18NextVue from 'i18next-vue'

import './styles/style.scss'
import FontAwesomeIcon from './utilities/fontawesome-icons'
import { highlightDirective } from './utilities/custom-directive'
import { registerFontawesomeComponent } from './plugins/font-awesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(I18NextVue, { i18next: i18n })
registerFontawesomeComponent(app)

app.directive('highlight', highlightDirective)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
