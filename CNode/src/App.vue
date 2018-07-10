<template>
  <div id="app">
    <my-title></my-title>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import mytitle from '@/components/myTitle'
export default {
  name: 'App',
  components: {'my-title': mytitle},
}
</script>

<style>
body{background-color: #e0e0e0;}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;width: 97%;margin: auto;color: #333;}
.item-msg{color: #999;background-color: #eee;border-radius: .05rem;padding: .05rem .1rem;text-align: center;margin: .1rem;}
.item-msg.active{color: #fff;background-color: #80BD01;}
.button{margin-right: .2rem;border-radius: .1rem;padding:.2rem .5rem;transition: .3s;display: inline-block;font-size: .28rem;}
.button:active{filter: brightness(90%);}
</style>

<!--模拟登录-->