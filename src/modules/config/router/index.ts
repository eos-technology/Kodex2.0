const configRoutes = {
  path: '/config',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'config',
      component: () => import('@/modules/config/views/Index.vue')
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
          path: 'timeline',
          name: 'timeline',
          component: () => import('@/modules/config/views/security/Timeline.vue'),
        },
        {
          path: 'restrictions',
          name: 'restrictions',
          component: () => import('@/modules/config/views/security/Restrictions.vue'),
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
