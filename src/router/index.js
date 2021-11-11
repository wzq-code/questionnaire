/*
 * @Author: your name
 * @Date: 2021-11-09 08:06:56
 * @LastEditTime: 2021-11-11 14:53:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue小项目\question\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Home from '../pages/home/Home.vue'
import Item from '../pages/item/Item.vue'
import Score from '../pages/score/Score.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path:'/item',
    component:Item
  },
  {
    path:'/score',
    component:Score
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
