import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routeNames } from '@/constants/routes'
// import Home from '@/views/Home.vue'
import AnimationTemplate from '@/views/todos/Template.vue'
import AnimationHome from '@/views/todos/Home.vue'
import AnimationAbout from '@/views/todos/About.vue'
import AnimationContact from '@/views/todos/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: routeNames.TODOS.HOME},
    // name: routeNames.HOME,
    // component: Home,
  },
  {
    path: '/animation',
    component: AnimationTemplate,
    redirect: { name: routeNames.TODOS.HOME},
    children: [
      {
        path: '/animation/home',
        name: routeNames.TODOS.HOME,
        component: AnimationHome,
      },
      {
        path: '/animation/about',
        name: routeNames.TODOS.ABOUT,
        component: AnimationAbout,
      },
      {
        path: '/animation/contact',
        name: routeNames.TODOS.CONTACT,
        component: AnimationContact,
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
