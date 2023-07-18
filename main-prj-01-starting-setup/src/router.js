import { createRouter, createWebHistory } from 'vue-router'
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachesRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'

const router =createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: null },
        { path: '/coaches/:id', component: null, children: [
            {
                path: '/contact/:id', component: null, // coaches/id/contact
            }] },
        { path: '/register', component: null },
        { path: '/coaches/:id', component: null },
        { path: '/requests/', component: null },
        { path: '/:notFound(.*)', component: null },
    ]
});

export default router;