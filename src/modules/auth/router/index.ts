const authRoutes = {
    path: '/auth',
    name: 'auth',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'login',
    name: 'login',
    component: () => import ('@/modules/auth/views/login/Index.vue')
},
{
    path: 'register',
    name: 'register',
    component: () => import ('@/modules/auth/views/register/Index.vue')
},
{
    path: 'otp',
    name: 'otp',
    component: () => import ('@/modules/auth/views/otp/Index.vue')
},
{
    path: 'recover',
    name: 'recover',
    component: () => import ('@/modules/auth/views/recover/Index.vue')
},
{
    path: 'restore',
    name: 'restore',
    component: () => import ('@/modules/auth/views/restore/Index.vue')
}
    ]
}

export default authRoutes
