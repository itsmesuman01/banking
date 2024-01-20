import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'
import OTP from '../views/auth/OTP.vue'
import UpdatePassword from '../views/auth/UpdatePassword.vue'
import ForgetPassword from '../views/auth/ForgetPassword.vue'

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