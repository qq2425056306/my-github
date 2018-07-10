<template>
<form>
    <div class="topics bg-white">
       <div class="flex-alicen">
           	<p class="font-28">选择板块：</p>
            <select v-model="mydata.tab" class="topics-select font-28">
                <option style="display: none;">请选择</option>
                <option v-for='(item,key) in tab' :value="key">{{item}}</option>
            </select>
       </div>
       <input v-model="mydata.title" class="topics-title mar-top20 font-28" type="text" maxlength="20" placeholder="标题字数10字以上"/>
       <my-textarea @updata:content='mydata.content=$event'><p class="button bg-blue2" @click="submit">提交</p></my-textarea>
    </div>
</form>
</template>

<script>
import mytextarea from '@/components/myTextarea'
export default{
    name:'my-topics',
    data:function(){
        return {
            tab:{
                ask:'问答',
                share:'分享',
                job:'招聘',
                dev:'客户端测试',
            },
            mydata:{
                accesstoken:this.user.AccessToken,
                tab:'请选择',
                title:'',
                content:'',
            }
        }
    },
    components:{'my-textarea':mytextarea},
    methods:{
        submit:function(){
            let vm=this;
            if (vm.mydata.tab=='请选择') {
                alert('请选择要发布的板块 ')
                return
            }
            if (vm.mydata.title.length<10) {
                alert('标题字数不得少于10个')
            	return
            }
            console.log(vm.mydata);
            this.axios.post(vm.url+'topics',vm.mydata)
            .then(function(respones){
                console.log(respones);
                if(respones.data.success){
                    alert('发布成功');
                    setTimeout(function(){
                        vm.$router.go(-1)
                    },1000)
                }
            }).catch(function(respones){
                console.log(respones)
            });
        }
    }
}
</script>

<style>
.topics{padding: .2rem;}
.topics-select{width: 50%;border-radius: .1rem;border: 1px solid #ccc;outline: none;height: .6rem;margin-left: .2rem;}
.topics-title{width: 100%;line-height: .6rem;border-radius: .05rem;border: 1px solid #ccc;box-sizing: border-box;outline: none;padding-left: .1rem;}
</style>