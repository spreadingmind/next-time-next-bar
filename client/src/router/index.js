import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoogleMap from '@/components/GoogleMap'
import Bars from '@/components/Bars'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bars',
      name: 'Bars',
      component: Bars
    },
    {
      path: '/map',
      name: 'GoogleMap',
      component: GoogleMap
    }
  ]
})
