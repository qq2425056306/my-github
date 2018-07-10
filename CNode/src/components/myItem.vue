<template>
<div class="list-item flex" >
    <div class="item-img over-hide">
        <img :src="item.author.avatar_url"/>
    </div>
    <p :class="['item-msg',{active:highLight}]">{{tab}}</p>
    <div class="item-text flex1">
        <p class="font-28 ellipsis1">{{item.title}}</p>
        <p class="font-26 mar-top10">{{item.reply_count}}/<span class="color-999">{{item.visit_count}}</span></p>
    </div>
    <div class="item-lasttime text-center">{{lastTime}}</div>
</div>
</template>

<script>
export default{
    name:'my-item',
    props:['item'],
    computed:{
        highLight:function(){
            return this.item.top===true||this.item.good===true
        },
        tab:function(){
            if(this.item.top){
                return '置顶';
            }else if(this.item.good){
                return '精华';
            }else{
                switch (this.item.tab){
                    case 'share':
                       return '分享';
                        break;
                    case 'ask':
                       return '问答';
                        break;
                    case 'job':
                       return '招聘';
                    case 'dev':
                       return '测试';
                    default:
                        return this.item.tab;
                }
            }
        },
        lastTime:function(){
            let time=new Date().getTime()-new Date(this.item.last_reply_at).getTime();
            let day =Math.floor(time/(24*3600*1000));
            if(day===0){
                let hours=Math.floor(time/(3600*1000));
                if(hours===0){
                    let minutes=Math.floor(time/(60*1000))
                    if(minutes===0){
                        return '刚刚';
                    }else{
                        return minutes+'分钟前';
                    }
                }else{
                    return hours+'小时前';
                }
            }else{
                return day+'天前';
            }
            
        },
    }
}
</script>

<style>
.list-item{align-items: center;border-bottom:1px solid #ddd;padding: .15rem;}
.list-item:active{background: #eee;}
.item-img{width: .6rem;height: .6rem;}
.item-text{width: 1rem;letter-spacing: .01rem;}
.item-lasttime{width:1rem;text-align: right;align-self: flex-end;}
</style>