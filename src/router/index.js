import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
import Lowescoupon from '@/components/Lowescoupon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [

    {
      path: '/area',
      component: Calculator
    },

    {
      path: '/',
      component: Calculator
    },
    {
      path: '/lowescoupon',
      component: Lowescoupon
    },

  ]
})
