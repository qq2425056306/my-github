<template>
<div class="return-top" @click="returnTop">
    <img src="../assets/img/returnTop.png"/>
</div>
</template>

<script>
export default{
    name:'my-return',
    methods:{
        returnTop:function(){
            if(document.body.clientHeight>1000){
                let speed=50;
                var tim=setInterval(function(){
                    speed*=1.05;
                    document.body.scrollTop-=speed;
                    if(document.body.scrollTop===0){
                        clearInterval(tim);
                    }
                },10)
                
            }
        }
    }
}
</script>

<style>
.return-top{position: fixed;right: .5rem;bottom: .5rem;width: .8rem;height:.8rem;border-radius: 3rem;box-shadow: .1rem .1rem .1rem #ccc;}
</style>