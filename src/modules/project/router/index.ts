const projectRoutes = {
  path: '/project',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'project',
      component: () => import('@/modules/project/layout/Project.vue'),
      children: [
        {
          path: '',
          name: 'project-dashboard',
          component: () => import('@/modules/project/views/dashboard/Index.vue')
        },
        {
          path: 'payment',
          name: 'payment_links',
          component: () => import('@/modules/payment_link/views/payment_links/Index.vue')
        },
        {
          path: 'config',
          name: 'config-payments',
          component: () => import('@/modules/payment_link/views/config/Index.vue')
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('@/modules/payment_link/views/create/Index.vue')
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('@/modules/payment_link/views/detail/Index.vue')
        },
        {
          path: 'transactions',
          name: 'transactions',
          component: () => import('@/modules/transaction/views/transactions/Index.vue')
        },
        {
          path: 'send_copy',
          name: 'send_copy',
          component: () => import('@/modules/transaction/views/send_copy/Index.vue')
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('@/modules/transaction/views/detail/Index.vue')
        },
        {
          path: 'reports',
          name: 'reports',
          component: () => import('@/modules/report/views/reports/Index.vue')
        },
        {
          path: 'generate',
          name: 'generate',
          component: () => import('@/modules/report/views/generate/Index.vue')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('@/modules/report/views/download/Index.vue')
        },
        {
          path: 'send_report',
          name: 'send_report',
          component: () => import('@/modules/report/views/send_report/Index.vue')
        },
        {
          path: 'details',
          name: 'details',
          component: () => import('@/modules/report/views/details/Index.vue')
        },
        {
          path: 'payment',
          name: 'payment_method',
          component: () => import('@/modules/payment_method/views/list/Index.vue')
        },
        {
          path: 'enable',
          name: 'payment_method-enable',
          component: () => import('@/modules/payment_method/views/enable/Index.vue')
        },
        {
          path: 'config/:currency',
          name: 'payment_method-config',
          component: () => import('@/modules/payment_method/views/config/Index.vue'),
          params: true
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/modules/user/views/list/Index.vue')
        },
        {
          path: 'create',
          name: 'create-user',
          component: () => import('@/modules/user/views/create_user/Index.vue')
        },
        {
          path: 'permissions',
          name: 'permissions',
          component: () => import('@/modules/user/views/permissions/Index.vue')
        },
        {
          path: 'payment-method',
          name: 'payment-method',
          component: () => import('@/modules/user/views/payment_method/Index.vue')
        },
        {
          path: 'invite',
          name: 'invite',
          component: () => import('@/modules/user/views/invite/Index.vue')
        },
        {
          path: 'config',
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
              component: () => import('@/modules/config/views/security/Timeline.vue')
            },
            {
              path: 'restrictions',
              name: 'restrictions',
              component: () => import('@/modules/config/views/security/Restrictions.vue')
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
    },
    {
      path: 'new_project',
      name: 'new_project',
      component: () => import('@/modules/project/views/new_project/Index.vue')
    }
  ]
}

export default projectRoutes
