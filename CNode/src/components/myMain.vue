<template>
<div>
    <div class="flex-jusbet main-tab">
        <div :class="['main-tab-title',{active:key===currentTab}]" v-for="(item,key) in tabtitle" @click="myhttp(key)">{{item.name}}</div>
    </div>
    <div class="over-hide bg-white">
        <router-link tag="div" :to="{name:'detail',params:{id:item.id,content:item.content}}" v-for="item in mydata[currentTab]" :key="item.id"><my-item :item='item'></my-item></router-link>
    </div>
    <router-link class="creat-topics bg-f5 font-28 color-999" tag="div" to='topics' v-if="user.success">发布话题</router-link>
    <my-return></my-return>
</div>
</template>

<script>
import axios from 'axios'
import myitem from '@/components/myItem'
import myreturn from '@/components/myReturn'
export default{
    name:'my-main',
    data: function(){
        return {
            currentTab:'all',
            tabtitle:{
                all:{name:'全部',page:1},
                good:{name:'精华',page:1},
                share:{name:'分享',page:1},
                ask:{name:'问答',page:1},
                job:{name:'招聘',page:1},
                dev:{name:'客户端测试',page:1},
            },
            mydata:{all:'',good:'',share:'',ask:'',job:'',dev:''},
        }
    },
    components:{'my-item':myitem,'my-return':myreturn},
    created:function(){
        let vm=this;
        axios.get('https://cnodejs.org/api/v1/topics')
        .then(function(respones){
            vm.mydata.all=respones.data.data;
        }).catch(function(respones){
            console.log(respones)
        });
        //滑动底部加载
        window.onscroll=function(){
            if ((window.screen.height + document.body.scrollTop) == (document.body.clientHeight)){
                let tab=vm.tabtitle[vm.currentTab];
                tab.page++;
axios.get('https://cnodejs.org/api/v1/topics?tab='+vm.currentTab+'&page='+tab.page)
                .then(function(respones){
                    vm.mydata[vm.currentTab]=vm.mydata[vm.currentTab].concat(respones.data.data);
                }).catch(function(respones){
                    tab.page--;
                    console.log(respones)
                }); 
            }
        }
    },
    methods:{
        myhttp:function(key){
            this.currentTab=key;
            if(!this.mydata[key]){
                let vm=this;
                axios.get('https://cnodejs.org/api/v1/topics?tab='+key)
                .then(function(respones){
                    vm.mydata[key]=respones.data.data;
                }).catch(function(respones){
                    console.log(respones)
                })
            }
        }
    }
}
</script>

<style>
.main-tab{padding: .15rem .2rem;background-color: #f5f5f5;}
.main-tab-title{color: #80bd01;font-size: .28rem;padding: .1rem .15rem;border-radius: .1rem;}
.main-tab-title.active{color: #fff;background-color: #80BD01;}
.main-tab-title:active{color: #fff;background-color: #80BD01;}
.creat-topics{position: fixed;right: 0;top: 40%;writing-mode:vertical-lr;padding: .25rem .15rem .1rem;letter-spacing: .15rem;border-radius:.3rem 0 0 .3rem;border:1px solid #ddd;border-right: none;}
</style>