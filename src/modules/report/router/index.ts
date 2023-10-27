const reportRoutes = {
  path: '/report',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: ':uuid',
      name: 'reports',
      component: () => import('@/modules/report/views/reports/Index.vue'),
      props: true
    },
    {
      path: ':uuid/generate',
      name: 'generate',
      component: () => import('@/modules/report/views/generate/Index.vue'),
      props: true
    },
    {
      path: ':uuid/download',
      name: 'download',
      component: () => import('@/modules/report/views/download/Index.vue'),
      props: true
    },
    {
      path: ':uuid/send_report',
      name: 'send_report',
      component: () => import('@/modules/report/views/send_report/Index.vue'),
      props: true
    },
    {
      path: ':uuid/details',
      name: 'details',
      component: () => import('@/modules/report/views/details/Index.vue'),
      props: true
    }
  ]
}

export default reportRoutes
