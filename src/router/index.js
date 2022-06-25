import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ClassesPage from '@/views/ClassesPage.vue'
import HomeworkPage from '@/views/HomeworkPage.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/classes', name: 'Classes', component: ClassesPage },
    { path: '/homework', names: 'Homework', component: HomeworkPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router