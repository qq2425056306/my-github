<template>
<div class="bg-white">
    <div class="detail-div border-bottom detail-top">
        <div class="flex-alicen ">
            <p class="item-msg active" v-if="mydata.top">置顶</p>
            <p class="font-36 flex1">{{mydata.title}}</p>
        </div>
        <ul class="datali-ul">
            <li class="datali-msg">发布于{{creattime}}</li>
            <li class="datali-msg">作者{{loginname}}</li>
            <li class="datali-msg">{{mydata.visit_count}}次浏览</li>
            <li class="datali-msg">最后一次编辑是</li>
            <li class="datali-msg">来自分享</li>
            <li class="datali-msg item-msg" :class="{active:!iscollege}" v-if="user.success" @click="collegeClick"><span v-if="iscollege">已</span>收藏</li>
        </ul>
        <div class="clear"></div>
    </div>
    <div class="detali-content font-32" v-html="mydata.content"></div>
    <div class="bg-white">
        <p class="detail-replynum bg-f5 font-28 border-top">{{replies.length}}回复</p>
        <my-item2 v-for="(item,key) in replies" :item="item" :num="key" :author="mydata.author.loginname" :key="key"></my-item2>
    </div>
    <div>
        <p class="detail-replynum bg-f5 font-28 border-top">添加回复</p>
        <my-textarea @updata:content='content=$event' :isreply="true" class="reply-text"><p class="button bg-blue2" @click="submit">回复</p></my-textarea>
    </div>
    
</div>
</template>

<script>
import myitem2 from '@/components/myItem2'
import mytextarea from '@/components/myTextarea'
export default{
    name:'my-content',
    data:function(){
        return{
            mydata:'',
            loginname:'',
            loading:true,
            iscollege:false,
            content:'',
        }
    },
    computed:{
        creattime:function(){
            return this.lasttime(this.mydata.create_at)
        },
        replies:function(){
            let value=this.mydata.replies;
            if(!value){return [];}
            for(let i=0;i<value.length;i++){
                for(let j=i;j<value.length;j++){
                    if(value[j].ups.length>value[i].ups.length){
                        value.splice(i,0,value[j])
                        value.splice(j+1,1)
                    }
                }
            }
            return value;
        },
    },
    components:{'my-item2':myitem2,'my-textarea':mytextarea},
    methods:{
        lasttime:function(mytime){
            let time=new Date().getTime()-new Date(mytime).getTime();
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
        collegeClick:function(){
            if(this.loading){
                this.loading=false;
                let vm=this;
                let url='https://cnodejs.org/api/v1/topic_collect/';
                this.axios.post(url+(vm.iscollege?'de_collect':'collect'),
                {accesstoken:vm.user.AccessToken,topic_id:vm.mydata.id})
                .then(function(respones){
                    if(respones.data.success){
                        vm.axios.get(url+vm.user.loginname)
                        .then(function(respones){
                            Vue.prototype.college = respones.data.data;
                            vm.iscollege=!vm.iscollege;
                            vm.loading=true;
                        }).catch(function(respones) {
                            console.log(respones)
                        });
                    }
                    vm.loading=true;
                }).catch(function(respones){
                    console.log(respones)
                });
            }
        },
        submit:function(){
            let vm=this;
            this.axios.post(vm.url+'topic/'+vm.mydata.id+'/replies',{
                accesstoken:vm.user.AccessToken,
                content:vm.content,
            })
            .then(function(respones){
                console.log(respones);
                if(respones.data.success){
                    location.reload();
                }
            }).catch(function(respones){
                console.log(respones)
            });
        }
    },
    created:function(){
        let vm=this;
        this.axios.get('https://cnodejs.org/api/v1/topic/'+vm.$route.params.id)
        .then(function(respones){
            vm.mydata=respones.data.data;
            vm.loginname=vm.mydata.author.loginname;
        }).catch(function(respones){
            console.log(respones)
        });
        if (this.college) {
        	for(let i in this.college){
                if (this.college[i].id===this.$route.params.id) {
                    this.iscollege= true;
                    break;
                }
            }
        }
        
        
    }
}
</script>

<style>
.detail-top{padding:.4rem .2rem 0 .2rem;}
.datali-ul{margin: .2rem 0;}
.datali-msg{color:#999;margin-left:.2rem;list-style: disc;display: inline;line-height: .36rem;}
.detali-content{padding:.5rem .3rem;line-height: .42rem;letter-spacing: .01rem;}
.detail-replynum{padding: .2rem;}
.markdown-text{overflow: hidden;}
.reply-text{padding: .2rem;}
</style>