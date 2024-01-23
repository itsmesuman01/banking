import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'
import OTP from '../views/auth/OTP.vue'
import UpdatePassword from '../views/auth/UpdatePassword.vue'
import ForgetPassword from '../views/auth/ForgetPassword.vue'
import Dashboard from '../views/Dashboard.vue'
import KYC from '../views/KYC/KYC.vue'
import KYCStore from '../views/KYC/KYCStore.vue'
import Opening from '../views/opening/Opening.vue'
import ChequeIssue from '../views/ChequeIssue.vue'
import Deposit from '../views/Deposit.vue'
import Withdraw from '../views/Withdraw.vue'

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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/kyc',
      name: 'kyc',
      component: KYC
    },
    {
      path: '/kycstore',
      name: 'kycstore',
      component: KYCStore
    },
    {
      path: '/opening',
      name: 'opening',
      component: Opening
    },
    {
      path: '/chequeissue',
      name: 'chequeissue',
      component: ChequeIssue
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: Deposit
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: Withdraw
    },
  ]
})

export default router