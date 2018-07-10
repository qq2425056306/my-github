<template>
<form>
    <slot></slot>
    <div class="content bg-white font-28">
        <div v-show="msg" class="content-msg bg-red">信息不正确</div>
        <div class="mar-top60">
            <div>
                <p>用户名：</p>
                <input v-model="username" class="content-input" type="text" maxlength="16" placeholder="账号：123"/>
            </div>
            <div class="mar-top40">
                <p>密码：</p>
                <input v-model="password" class="content-input" type="password" maxlength="16" placeholder="密码：123"/>
            </div>
        </div>
        <div class="flex-alicen mar-top60">
            <p class="button bg-blue2" @click="login">登录</p>
            <p class="button bg-blue1">通过GitHub登录</p>
            <p><a href="javascript:;" class="color-999">忘记密码了？</a></p>
        </div>
    </div>
</form>
</template>

<script>
export default{
    name:'my-login',
    data:function(){
        return{
            username:'',
            password:'',
            msg:false,
            myuser:'',
        }
    },
    methods:{
        login:function(){
            
            if(this.username==='123'&&this.password==='123'){
                let vm=this;
                this.axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:vm.user.AccessToken})
                .then(function(respones){
                    if (respones.data.success) {
                        vm.user.avatar_url=respones.data.avatar_url;
                        vm.user.loginname=respones.data.loginname;
                        vm.user.userID=respones.data.id;
                        vm.user.success=true;
                        localStorage.user=JSON.stringify(respones.data);
                    }else{
                        vm.msg=true;
                    }
                }).catch(function(respones){
                    console.log(respones)
                });
            }else{
                this.msg=true;
            }
        }
    }
}
</script>

<style scoped>
.content{padding:0.5rem .2rem 1rem .2rem;}
.content-msg{line-height:.6rem;font-size: .3rem;text-align: center;border-radius:.1rem;transition: .3s;}
.content-input{border: 1px solid #ddd;border-radius: .1rem;width: 5rem;line-height: .56rem;transition:.3s;outline: none;padding:0 .1rem;font-size: .32rem;margin-top: .1rem;}
.content-input:focus{box-shadow: 0 0 .15rem #5BC0DE;border-color: transparent;}
</style>