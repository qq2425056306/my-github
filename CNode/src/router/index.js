import Vue from 'vue'
import Router from 'vue-router'
import mymain from '@/components/myMain'
import mycontent from '@/components/myDetail'
import mylogin from '@/components/myLogin'
import myregister from '@/components/myRegister'
import mytopics from '@/components/myTopics'
import mymessage from '@/components/myMessage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      alias:'/',
      name: 'main',
      component:mymain,
      meta:{
          name:'首页',
          keepAlive:true,
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component:mycontent,
      meta:{
          name:'详情',
          keepAlive:false,
      }
    },
    {
      path: '/topics',
      name: 'topics',
      component:mytopics,
      meta:{
          name:'发布话题',
          keepAlive:false,
      }
    },
    {
      path: '/message',
      name: 'message',
      component:mymessage,
      meta:{
          name:'新消息',
          keepAlive:true,
      }
    },
    {
      path: '/basic',
      name: 'basic',
      component: {
          template:'<div>basic</div>'
      },
      meta:{
          name:'入门',
          keepAlive:true,
      }
    },
    {
      path: '/api',
      name: 'api',
      component: {
          template:'<div>api</div>'
      },
      meta:{
          name:'API',
          keepAlive:true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: {
          template:'<div>about</div>'
      },
      meta:{
          name:'关于',
          keepAlive:true,
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: {
          template:'<div>setting</div>'
      },
      meta:{
          name:'设置',
          keepAlive:true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component:myregister,
      meta:{
          name:'注册',
          keepAlive:true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component:mylogin,
      meta:{
          name:'登录',
          keepAlive:true,
      }
    }
  ]
})
