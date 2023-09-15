const payment_linkRoutes = {
    path: '/payment_link',
    name: 'payment_link',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'payment_links',
    name: 'payment_links',
    component: () => import ('@/modules/payment_link/views/payment_links/Index.vue')
},
{
    path: 'config',
    name: 'config',
    component: () => import ('@/modules/payment_link/views/config/Index.vue')
},
{
    path: 'create',
    name: 'create',
    component: () => import ('@/modules/payment_link/views/create/Index.vue')
},
{
    path: 'detail',
    name: 'detail',
    component: () => import ('@/modules/payment_link/views/detail/Index.vue')
}
    ]
}

export default payment_linkRoutes
