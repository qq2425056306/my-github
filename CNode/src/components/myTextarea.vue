<template>
<div>
	<div class="topics-border"></div>
       <div class="topics-div mar-top10">
           <div class="flex topics-option">
               <p>B</p>
               <p>I</p>
           </div>
           <div class="topics-border"></div>
           <textarea v-model="content" class="topics-text font-30" :class="{active:isreply}" @change="textInput"></textarea>
           <div class="topics-border"></div>
       </div>
       <slot></slot>
</div>
</template>

<script>
export default{
    name:'my-textarea',
    props:['isreply'],
    data:function(){
        return {
            content:'',
        }
    },
    methods:{
        textInput:function(){
            this.$emit('updata:content',this.content);
        }
    }
}
</script>

<style>
.topics-text{resize: none;width: 100%;height: 8rem;border:none;outline: none;}
.topics-text.active{height: 3rem;}
.topics-option{height: .3rem;}
.topics-border{height:1px;display: block;background: linear-gradient(45deg,#f9f9f9,#bdc3c7,#f9f9f9);margin:.2rem 0;}    
</style>