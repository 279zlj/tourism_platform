import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import map_index from '@/components/map_index'
import left_bar from '@/components/share/left_bar'
import time from '@/components/share/time'
import action_index from '@/components/action/action_index'
import market_index from '@/components/marketing/market_index'
import visitor_index from '@/components/visitor/visitor_index'
import data_export from '@/components/data/data_export'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      components: {
        time:time,
        default:left_bar,
        bar:index
      }
    },
    {
      path: '/left_bar',
      name: 'left_bar',
      component: left_bar
    },
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/',
      name: 'map_index',
      component: map_index
    },
    {
      path: '/visitor_index',
      name: 'visitor_index',
      components: {
        time:time,
        default:left_bar,
        bar:visitor_index
      }
    },
    {
      path: '/data_export',
      name: 'data_export',
      components: {
        time:time,
        default:left_bar,
        bar:data_export
      }
    },
    {
      path: '/market_index',
      name: 'market_index',
      components: {
        time:time,
        default:left_bar,
        bar:market_index
      }
    },
    {
      path: '/action_index',
      name: 'action_index',
      components: {
        time:time,
        default:left_bar,
        bar:action_index
      }
    }
  ]
})
