import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Artists from '@/components/Artists'
import Albums from '@/components/Albums'
import Tracks from '@/components/Tracks'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: Tracks
    }
  ]
})
