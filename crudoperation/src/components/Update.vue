<template>
    <div id="updatecomponent">
        Update component
        <input v-model="updateuser"/>
        <!-- <button v-on:click="update">update</button> -->
        {{updateuser}}
    </div>
</template>

<script>
export default{
    name : 'updatecomponent',
    props:{
        updateuser:String
    }
}
</script>