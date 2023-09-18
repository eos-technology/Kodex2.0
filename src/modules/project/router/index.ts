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
      component: () => import('@/modules/project/views/dashboard/Index.vue')
    },
    {
      path: 'new_project',
      name: 'new_project',
      component: () => import('@/modules/project/views/new_project/Index.vue')
    }
  ]
}

export default projectRoutes
