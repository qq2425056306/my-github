<template>
<div class="content-url flex-alicen bg-f5 font-30 color-999">
    <router-link class="content-url-p color-green" to="/" tag="p">主页</router-link>
    <span class="font-36">/</span>
    <p class="content-url-p"><slot></slot></p>
</div>
</template>

<script>
export default{
    name:'my-nav'
}
</script>

<style>
.content-url{padding: .2rem;}
.content-url-p{margin: 0 .1rem;}
</style>