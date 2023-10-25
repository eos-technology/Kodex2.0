const configRoutes = {
  path: '/config',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: ':uuid',
      name: 'config',
      component: () => import('@/modules/config/views/Index.vue'),
      props: true
    },
    {
      path: 'account',
      name: 'account',
      component: () => import('@/modules/config/views/account/Index.vue')
    },
    {
      path: 'security',
      children: [
        {
          path: ':uuid/timeline',
          name: 'timeline',
          component: () => import('@/modules/config/views/security/Timeline.vue'),
          props: true
        },
        {
          path: ':uuid/restrictions',
          name: 'restrictions',
          component: () => import('@/modules/config/views/security/Restrictions.vue'),
          props: true
        }
      ]
    },
    {
      path: 'add-image',
      name: 'add-image',
      component: () => import('@/modules/config/views/add_image/Index.vue')
    },
    {
      path: 'keys',
      name: 'keys',
      component: () => import('@/modules/config/views/keys/Index.vue')
    },
    {
      path: 'kyc',
      name: 'kyc',
      component: () => import('@/modules/config/views/kyc/Index.vue')
    }
  ]
}

export default configRoutes
