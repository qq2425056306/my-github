<template>
<div class="border-top reply-item" :class="[{replybg:num<3}]">
    <div class="flex-alicen">
        <div class="detail-img">
            <img :src="item.author.avatar_url" style="border:1px solid #ddd"/>
        </div>
        <p class="reply-name font-28">{{item.author.loginname}}</p>
        <div class="font-26 color-blue flex1 flex-alicen">
            <p>{{num+1}}楼·{{creattime}}</p>
            <p v-if="author===item.author.loginname"  class="item-msg active">作者</p>
        </div>
        <p class="reply-up font-30 color-666" @click="addUp">{{ups}}</p>
    </div>
     <div class="reply-content font-30" v-html="item.content"></div>
</div>
</template>

<script>
export default{
    name:'my-item2',
    props:['item','num','author'],
    data:function(){
        return{
            ups:this.item.ups.length,
        }
    },
    computed:{
        creattime:function(){
            return '1个月前'
        },
    },
    methods:{
        addUp:function(){
            if(this.user.success){
                if(this.user.loginname===this.item.author.loginname){
                    alert('不能点赞自己的评论')
                    return
                }
                let vm =this;
                this.axios.post(vm.url+'reply/'+vm.item.id+'/ups',{accesstoken:vm.user.AccessToken})
                .then(function(respones){
                    if(respones.data.action==='down'){
                        vm.ups--;
                    }else{
                        vm.ups++;
                    }
                }).catch(function(respones){
                    console.log(respones)
                })
            }else{
                alert('请先登录')
            }
        }
    },
}
</script>

<style>
.reply-item{padding:.2rem;}
.detail-img{width: .6rem;height: .6rem;}
.reply-name{font-weight: 600;padding:0 .15rem;}
.reply-up{padding-left:0.4rem;background: url(../assets/img/search.png) no-repeat 0 center;}
.reply-content{margin-top: .2rem;line-height:.46rem;}
.replybg{background-color: aliceblue;}
</style>