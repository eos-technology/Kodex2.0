const gatewayRoutes = {
    path: '/gateway',
    name: 'gateway',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'one',
    name: 'one',
    component: () => import ('@/modules/gateway/views/one/Index.vue')
}
    ]
}

export default gatewayRoutes
