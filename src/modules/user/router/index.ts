const userRoutes = {
  path: '/user',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: ':uuid',
      name: 'user',
      component: () => import('@/modules/user/views/list/Index.vue'),
      props: true
    },
    {
      path: ':uuid/create',
      name: 'create-user',
      component: () => import('@/modules/user/views/create_user/Index.vue'),
      props: true
    },
    {
      path: ':uuid/permissions',
      name: 'permissions',
      component: () => import('@/modules/user/views/permissions/Index.vue'),
      props: true
    },
    {
      path: ':uuid/payment-method',
      name: 'payment-method',
      component: () => import('@/modules/user/views/payment_method/Index.vue'),
      props: true
    },
    {
      path: ':uuid/invite',
      name: 'invite',
      component: () => import('@/modules/user/views/invite/Index.vue'),
      props: true
    }
  ]
}

export default userRoutes
