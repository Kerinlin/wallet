import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: () =>
                import ('@/views/Login.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () =>
                import ('@/views/Home.vue')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})