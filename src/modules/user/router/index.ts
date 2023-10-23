const userRoutes = {
  path: '/user',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    // {
    //   path: '',
    //   name: 'user',
    //   component: () => import('@/modules/user/views/list/Index.vue')
    // },
    // {
    //   path: 'create',
    //   name: 'create-user',
    //   component: () => import('@/modules/user/views/create_user/Index.vue')
    // },
    // {
    //   path: 'permissions',
    //   name: 'permissions',
    //   component: () => import('@/modules/user/views/permissions/Index.vue')
    // },
    // {
    //   path: 'payment-method',
    //   name: 'payment-method',
    //   component: () => import('@/modules/user/views/payment_method/Index.vue')
    // },
    // {
    //   path: 'invite',
    //   name: 'invite',
    //   component: () => import('@/modules/user/views/invite/Index.vue')
    // }
  ]
}

export default userRoutes
