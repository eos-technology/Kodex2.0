const payment_methodRoutes = {
  path: '/payment_method',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: ':uuid',
      name: 'payment_method',
      component: () => import('@/modules/payment_method/views/list/Index.vue'),
      props: true
    },
    {
      path: ':uuid/enable',
      name: 'payment_method-enable',
      component: () => import('@/modules/payment_method/views/enable/Index.vue'),
      props: true
    },
    {
      path: ':uuid/config/:currency',
      name: 'payment_method-config',
      component: () => import('@/modules/payment_method/views/config/Index.vue'),
      props: true
    }
  ]
}

export default payment_methodRoutes
