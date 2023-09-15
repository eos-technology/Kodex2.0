const payment_methodRoutes = {
    path: '/payment_method',
    name: 'payment_method',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'list',
    name: 'list',
    component: () => import ('@/modules/payment_method/views/list/Index.vue')
},
{
    path: 'enable',
    name: 'enable',
    component: () => import ('@/modules/payment_method/views/enable/Index.vue')
},
{
    path: 'config',
    name: 'config',
    component: () => import ('@/modules/payment_method/views/config/Index.vue')
}
    ]
}

export default payment_methodRoutes
