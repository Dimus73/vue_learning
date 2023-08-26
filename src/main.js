import { createApp } from 'vue'
import App from './app.vue'

import components from './Components/UI/index'

const app = createApp(App)

components.forEach( component =>{
    app.component(component.name, component);
})

app.mount('#app')
