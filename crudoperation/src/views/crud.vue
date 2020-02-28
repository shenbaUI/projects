<template>
    <div id="crudview">
       <createcomponent componentName="create component"></createcomponent>
    </div>
</template>

<script>
import createcomponent from '@/components/Create.vue'

export default{
    name : 'crud',
    components:{
        createcomponent
    }
}
</script>


