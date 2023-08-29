import { createApp } from 'vue'
import App from './app.vue'

import components from './Components/UI/index'
import router from "@/router/router";

const app = createApp(App)

components.forEach( component =>{
    app.component(component.name, component);
})

app
    .use(router)
    .mount('#app')
