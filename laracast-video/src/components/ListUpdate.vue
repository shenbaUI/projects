<template>
    <div id="main">
        <ul>
            <li v-for="name in names" v-bind:key="name" v-text="name"></li>
        </ul>
        <input v-model="newname">
        <button @click="addname">addname</button>
      
    </div>

</template>

<script>
  export default {
      name:'listupdate',
      data () {
          return {
              newname : '',
              names : ['shenba', 'sudar'],
              
          }
      },methods: {
                  addname : function(){
                     this.names.push(this.newname);
                     this.newname = ''
                  }
              },

  }
</script>