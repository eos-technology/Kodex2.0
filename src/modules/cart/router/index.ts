const cart_Routes = {
  path: '/cart',
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      name: 'cart',
      component: () => import('@/modules/cart/views/cart/Index.vue')
    },
    {
      path: 'cc-cart',
      name: 'cc-cart',
      component: () => import('@/modules/cart/views/cart/cc_payment/Index.vue')
    }
  ]
}

export default cart_Routes
