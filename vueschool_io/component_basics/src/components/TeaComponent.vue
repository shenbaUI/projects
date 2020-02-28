<template>
    <div class="tea">
        <div @click.native="select">
            <h3 >{{name}}</h3>
        </div>
    </div>
</template>
<style>
.tea{
    width: 30%;
    margin: 0 auto;
}
.tea h3{
    background: #000;
    margin: 20px 0;
    color: #fff;
    padding: 10px;
}
</style>
<script>
export default { 
    
    props:{
        name:String
    },
    data(){
        return{
            selected : false
        }
    },
    methods:{
        select:function(){
            this.selected = true;
        }
    }
   
}
</script>