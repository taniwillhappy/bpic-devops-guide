import { createRouter, createWebHistory } from 'vue-router'
import dev from '../views/DevOverview.vue'
import NodejsUbuntu from '@/views/NodejsUbuntu.vue'
import NodejsWindows from '@/views/NodejsWindows.vue'
import Docker from '@/views/Docker.vue'
import UbuntuServer from '@/views/UbuntuServer.vue'
import ViteExample from '@/views/ViteExample.vue'
import NuxtExample from '@/views/NuxtExample.vue'
import Postgres from '@/views/Postgres.vue'
import Postman from '@/views/Postman.vue'
import Create_Crud_Backend2 from '@/views/Create_Crud_Backend-2.vue'
import Create_Crud_Backend from '@/views/Create_Crud_Backend.vue'
import Create_Crud_Frontend from '@/views/Create_Crud_Frontend.vue'
import FileDownload from '@/views/FileDownload.vue'
import NodeRed from '@/views/NodeRed.vue'
import AboutView from '@/views/AboutView.vue'







const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [
    { path: '/', component: dev },
    { path: '/nodejs_ubuntu', component: NodejsUbuntu},
    { path: '/nodejs_windows', component: NodejsWindows},
    { path: '/ubuntuserver', component: UbuntuServer},
    { path: '/docker', component: Docker},
    { path: '/vite_example', component: ViteExample},
    { path: '/nuxt_example', component: NuxtExample},
    { path: '/postgres', component: Postgres},
    { path: '/postman', component: Postman},
    { path: '/create_crud_backend_2', component: Create_Crud_Backend2},
    { path: '/create_crud_backend', component: Create_Crud_Backend},
    { path: '/create_crud_frontend', component: Create_Crud_Frontend},
    { path: '/file_download', component: FileDownload },
    { path: '/nodered', component: NodeRed },
    { path: '/about', component: AboutView },

    
  ],
})

export default router
