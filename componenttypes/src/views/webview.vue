<template>
    <div id="webview">       
        <sidenavbar></sidenavbar>
        <componenttypes></componenttypes>
    </div>
</template>

<script>
import componenttypes from '@/components/TypesofComponent.vue'
import sidenavbar from '@/components/NavbarSide.vue'

export default {
    name:'webview',
    components: {
        componenttypes,
        sidenavbar
    }
}
</script>

