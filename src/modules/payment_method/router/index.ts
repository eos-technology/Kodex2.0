const payment_methodRoutes = {
  path: '/payment_method',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    // {
    //   path: '',
    //   name: 'payment_method',
    //   component: () => import('@/modules/payment_method/views/list/Index.vue')
    // },
    // {
    //   path: 'enable',
    //   name: 'payment_method-enable',
    //   component: () => import('@/modules/payment_method/views/enable/Index.vue')
    // },
    // {
    //   path: 'config/:currency',
    //   name: 'payment_method-config',
    //   component: () => import('@/modules/payment_method/views/config/Index.vue'),
    //   params: true
    // }
  ]
}

export default payment_methodRoutes
