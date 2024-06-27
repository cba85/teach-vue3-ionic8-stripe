import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'

const routes = [
{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name: 'Home',
  component: HomePage
},
{
  path: '/user',
  name: 'User',
  component: () => import('../views/UserPage.vue')
},
{
  path: '/checkout',
  name: 'Checkout',
  component: () => import('../views/CheckoutPage.vue')
},
{
  path: '/checkout/success',
  name: 'CheckoutSuccess',
  component: () => import('../views/CheckoutSuccessPage.vue')
},
{
  path: '/checkout/cancel',
  name: 'CheckoutCancel',
  component: () => import('../views/CheckoutCancelPage.vue')
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
