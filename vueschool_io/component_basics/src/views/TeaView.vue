<template>
    <div>
        <Tea v-for="plan in plans" :key="plan" :name="plan"></Tea>        
    </div>
</template>


<script>
import Tea from '@/components/TeaComponent.vue'
export default {
    components:{
        Tea
    },
     data() {
        return {
            plans : ["The Single","The Curious","The Addict"]
        }
    },
}
</script>