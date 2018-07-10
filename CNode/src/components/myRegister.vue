<template>
<form>
    <slot></slot>
    <div class="content bg-white font-28">
        <p>通过GitHub账号</p>
        <p class="button bg-blue1 mar-top10">注册新账号</p>
        <p class="mar-top60">或者</p>
        <div class="mar-top40">
            <div>
                <p>用户名：</p>
                <input class="content-input" type="text" maxlength="16"/>
            </div>
            <div class="mar-top40">
                <p>密码：</p>
                <input class="content-input" type="password" maxlength="16"/>
            </div>
        </div>
        <div class="flex-alicen mar-top60">
            <p class="button bg-blue2">关联旧账号</p>
        </div>
    </div>
</form>
</template>

<script>
</script>

<style>

.content{padding: 1rem .2rem;}
.content-input{border: 1px solid #ddd;border-radius: .1rem;width: 5rem;line-height: .56rem;transition:.3s;outline: none;padding:0 .1rem;font-size: .32rem;margin-top: .1rem;}
.content-input:focus{box-shadow: 0 0 .15rem #5BC0DE;border-color: transparent;}
</style>