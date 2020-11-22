import {createWebHistory, createRouter} from 'vue-router'

import Formulario from '../components/Formulario.vue'
import Listado from '../components/Listado.vue'

const routes = [
    {path: '/', name: 'Formulario', component: Formulario}
    ,{path: '/listado', name: 'Listado', component: Listado}
    

]

const router = createRouter({
    history: createWebHistory()
    ,routes
})

export default router