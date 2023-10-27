const transactionRoutes = {
  path: '/transaction',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: ':uuid',
      name: 'transactions',
      component: () => import('@/modules/transaction/views/transactions/Index.vue'),
      props: true
    },
    {
      path: ':uuid/send_copy',
      name: 'send_copy',
      component: () => import('@/modules/transaction/views/send_copy/Index.vue'),
      props: true
    },
    {
      path: ':uuid/detail/:transaction?',
      name: 'detail',
      component: () => import('@/modules/transaction/views/detail/Index.vue'),
      props: true
    }
  ]
}

export default transactionRoutes
