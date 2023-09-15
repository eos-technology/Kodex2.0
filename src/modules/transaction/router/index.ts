const transactionRoutes = {
    path: '/transaction',
    name: 'transaction',
    meta: {
        requiresAuth: false
    },
    children: [
{
    path: 'transactions',
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
