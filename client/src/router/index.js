import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MyFriends from "../views/MyFriends.vue"
import About from "../views/About.vue"
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import { Globals } from "@/models/api";

Vue.use(Router)

function gaurd(to, from, next){

}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },  
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/MyFriends',
      name: 'my-friends',
      component: MyFriends
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next)=>{
  //console.log({ to, from });
  const publicRoutes = ['Home', 'Login'];
  if(!publicRoutes.includes( to.name ) && !Globals.user){
    Globals.redirectRoute = { name: to.name, path: to.path, params: to.params, query: to.query, hash: to.hash  }
    return next('Login');
  }
  next();
})

export default router;
