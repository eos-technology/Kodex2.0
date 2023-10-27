const configRoutes = {
  path: '/config',
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
      path: 'security',
      children: [
        {
          path: 'timeline',
          name: 'timeline',
          component: () => import('@/modules/config/views/security/Timeline.vue')
        },
        {
          path: 'restrictions',
          name: 'restrictions',
          component: () => import('@/modules/config/views/security/Restrictions.vue')
        }
      ]
    }
  ]
}

export default configRoutes
