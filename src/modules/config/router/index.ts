const configRoutes = {
    path: '/config',
    name: 'config',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'account',
    name: 'account',
    component: () => import ('@/modules/config/views/account/Index.vue')
},
{
    path: 'security',
    name: 'security',
    component: () => import ('@/modules/config/views/security/Index.vue')
},
{
    path: 'keys',
    name: 'keys',
    component: () => import ('@/modules/config/views/keys/Index.vue')
},
{
    path: 'kyc',
    name: 'kyc',
    component: () => import ('@/modules/config/views/kyc/Index.vue')
}
    ]
}

export default configRoutes
