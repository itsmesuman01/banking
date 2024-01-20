import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import OTP from '../views/OTP.vue'
import UpdatePassword from '../views/UpdatePassword.vue'
import ForgetPassword from '../views/ForgetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/otp',
      name: 'otp',
      component: OTP
    },
    {
      path: '/updatepassword',
      name: 'updatepassword',
      component: UpdatePassword
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: ForgetPassword
    },
  ]
})

export default router