import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import App from './App.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: () => import('@/views/AboutPage.vue') },
        { path: '/classes', component: () => import('@/views/ClassesPage.vue') },
        { path: '/homework', component: () => import('@/views/HomeworkPage.vue') }
    ]
})


createApp(App).use(router).mount('#app')
