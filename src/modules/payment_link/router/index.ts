const payment_linkRoutes = {
  path: '/payment_link',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: ':uuid',
      name: 'payment_links',
      component: () => import('@/modules/payment_link/views/payment_links/Index.vue'),
      props: true
    },
    {
      path: ':uuid/config',
      name: 'config-payments',
      component: () => import('@/modules/payment_link/views/config/Index.vue'),
      props: true
    },
    {
      path: ':uuid/create',
      name: 'create',
      component: () => import('@/modules/payment_link/views/create/Index.vue'),
      props: true
    },
    {
      path: ':uuid/detail',
      name: 'detail',
      component: () => import('@/modules/payment_link/views/detail/Index.vue'),
      props: true
    }
  ]
}

export default payment_linkRoutes
