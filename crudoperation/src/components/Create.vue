<template>
    <div id="createcomponent">
        <h1>{{componentName}}</h1>
        <ul v-for="list in userlist" v-bind:key="list.id">
            <li v-on:click="edituser(list.first_name)">{{list.first_name}}</li>
        </ul>
        <!-- <h2>{{output}}</h2> -->
       
        <updatecomponent :updateuser="username"></updatecomponent>
    </div>
</template>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script>
    
import axios from 'axios'
import updatecomponent from '@/components/Update.vue'
export default{
    name : 'createcomponent',
    props : {
        componentName : String,
        
    },
    components:{
        updatecomponent
    },
    data(){
        return{
            userlist:[],
            username : '',
            // output:''
        }
    },
    mounted:function(){
        axios
        .get("https://reqres.in/api/users?page=2")
        .then(response=>{
            console.log(response.data.data);
            this.userlist = response.data.data;
            console.log(this.userlist)
        })
        .catch(error=>console.log(error))
    },
    methods:{
        edituser:function(user){
            this.username = user;
            let test=$('h1').text();
            alert(test)
            // alert(this.username);
            // this.$router.push('/update');
            
            // axios
            // .post("http://demo7818519.mockable.io/edituser",{
            //     edituser : this.username
            // })
            // .then(response=>(this.output=response))
        }
    }
}
</script>

<style scoped>
li{
    list-style:none;
}
</style>