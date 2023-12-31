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
    }
  ]
}

export default configRoutes
