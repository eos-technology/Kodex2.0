const transactionRoutes = {
    path: '/transaction',
    component: () => import('@/layouts/App.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: '',
    name: 'transactions',
    component: () => import ('@/modules/transaction/views/transactions/Index.vue')
},
{
    path: 'send_copy',
    name: 'send_copy',
    component: () => import ('@/modules/transaction/views/send_copy/Index.vue')
},
{
    path: 'detail',
    name: 'detail',
    component: () => import ('@/modules/transaction/views/detail/Index.vue')
}
    ]
}

export default transactionRoutes
