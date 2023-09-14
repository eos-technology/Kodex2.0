const dashboardRoutes = {
  path: '/',
  component: () => import('@/layouts/App.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'dashboard',
      component: () => import('@/modules/dashboard/views/dashboard/Index.vue')
    }
  ]
}

export default dashboardRoutes
