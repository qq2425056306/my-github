<template>
<div>   
    <div class="title">
        <div class="title-logo">
            <img src="../assets/img/logo.svg" />
        </div>
        <div class="title-search">
            <input class="title-search-input"/>
        </div>
        <div class="nav">
            <router-link v-for="(value,key) in user.success?myurlLogin:myurl" :to="{name:key}" class="nav-item" tag='p' :key='key'>{{value.text}}</router-link>
            <p class="nav-item" v-if="user.success" @click="exit">退出</p>
        </div>
    </div>
    <my-nav v-if="$route.name!='detail'&& $route.name!='main'">{{$route.meta.name}}</my-nav>
</div>     
</template>

<script>
import mynav from '@/components/myNav'
export default {
  name: 'my-title',
  data:function(){
      return {
          myurl:{
            main:{text:'首页'},
            basic:{text:'入门'},
            api:{text:'API'},
            about:{text:'关于'},
            register:{text:'注册'},
            login:{text:'登录'},
          },
          myurlLogin:{
            main:{text:'首页'},
            message:{text:'消息'},
            basic:{text:'入门'},
            api:{text:'API'},
            about:{text:'关于'},
            setting:{text:'设置'},
          },
      }
  },
  components:{'my-nav':mynav},
  methods:{
      exit:function(){
          this.user.success=false;
          localStorage.user=JSON.stringify(this.user);
      }
  }
}
</script>

<style>
.title{background-color: #333;padding: .5rem 0 .7rem;margin-bottom: .3rem;}
.title-logo{margin:0 auto .2rem;width: 50%;}
.title-search{text-align: center;margin-bottom: .2rem;}
.title-search-input{border-radius: 1rem;background:#888 url(../assets/img/search.png) no-repeat;border:none;outline: none;transition: .3s;width: 70%;height: .5rem;padding-left: .5rem;box-sizing: border-box;background-position: 2% center;}
.title-search-input:focus{background-color: #ddd;}
.nav{display: flex;justify-content: space-between;width: 70%;text-align: center;margin: auto;}
.nav-item{color: #ccc;flex: 1;text-align: center;font-size:.28rem;}
</style>
