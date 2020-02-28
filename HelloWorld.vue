



<template>
  <div id="pizza-app">
    <div class="heading">
      <span>Order</span>
      <span>Pizza</span>
    </div>
    <div class="ordertable">
      <!-- size block -->
      <div class="sizeblock">
        <div class="row classifiedpizza">
          <div class="col-md-6">
            <img src="../assets/images/pizza.svg" class="smallicon" alt="smallpizaicon">
          </div>
          <div class="col-md-2">
            <span class="text">SMALL</span>
          </div>
          <div class="col-md-1">
            <img src="../assets/images/minus-sign-in-a-disable.svg" id="disabledecrement" alt="minusicon">
            <img src="../assets/images/minus-sign-in-a-circle.svg" id="smallicon" class="decrement callclick" alt="minusicon" @click="callclick($event)">
          </div>
          <div class="col-md-1 spanvalue">
            0
          </div>
          <div class="col-md-1">
            <img src="../assets/images/add-button.svg" id="small" class="increment callclick" alt="addicon" v-on:click="callclick($event)">
          </div>          
        </div>
        <div class="row classifiedpizza">
          <div class="col-md-6">
            <img src="../assets/images/pizza.svg" class="mediumicon" alt="smallpizaicon">
          </div>
          <div class="col-md-2">
            <span class="text">MEDIUM</span>
          </div>
          <div class="col-md-1">
            <img src="../assets/images/minus-sign-in-a-circle.svg" id="mediumicon"  class="decrement callclick" alt="minusicon"  @click="callclick($event)">
          </div>
          <div class="col-md-1 spanvalue">
            1
          </div>
          <div class="col-md-1">
            <img src="../assets/images/add-button.svg" id="medium" class="increment callclick" alt="addicon"
            @click="callclick($event)">
          </div>          
        </div>
        <div class="row classifiedpizza">
          <div class="col-md-6">
            <img src="../assets/images/pizza.svg" class="largeicon" alt="smallpizaicon">
          </div>
          <div class="col-md-2">
            <span class="text">LARGE</span>
          </div>
          <div class="col-md-1">
            <img src="../assets/images/minus-sign-in-a-circle.svg" id="largeicon" class="decrement callclick" alt="minusicon" @click="callclick($event)">
          </div>
          <div class="col-md-1 spanvalue">
            0
          </div>
          <div class="col-md-1">
            <img src="../assets/images/add-button.svg" id="large" class="increment callclick" alt="addicon"
            @click="callclick($event)">
          </div>          
        </div>
      </div>
      <!-- adult blocks -->
      <div class="adultblock">
        <div class="row classifiedpizza">
          <div class="col-md-1">
            <img src="../assets/images/man-user.svg" class="adulticon" alt="adulticon">
          </div>
          <div class="col-md-7">
            <span class="text">ADULTS</span>
          </div>
          <div class="col-md-1">
            <img src="../assets/images/minus-sign-in-a-circle.svg" class="decrement callclick" alt="minusicon" @click="callclick($event)">
          </div>
          <div class="col-md-1 spanvalue" id="adultcount">
            1
          </div>
          <div class="col-md-1">
            <img src="../assets/images/add-button.svg" class="increment callclick" id="adults" alt="addicon"
            @click="callclick($event)">
          </div>          
        </div>
      </div>
      <!-- child blocks -->
      <div class="childblock">
        <div class="row classifiedpizza">
          <div class="col-md-1">
            <img src="../assets/images/man-standing-with-arms-up.svg" class="childicon" alt="childicon">
          </div>
          <div class="col-md-7">
            <span class="text">CHILDREN</span>
          </div>
          <div class="col-md-1">
            <img src="../assets/images/minus-sign-in-a-circle.svg" class="decrement callclick" alt="minusicon" @click="callclick($event)">
          </div>
          <div class="col-md-1 spanvalue" id="childrencount">
            0
          </div>
          <div class="col-md-1">
            <img src="../assets/images/add-button.svg" class="increment callclick" id="children" alt="addicon"
            @click="callclick($event)">
          </div>          
        </div>
      </div>
      <!-- order total -->
      <div class="row totalblock">
        <div class="col-md-8 offset-md-1 total">
          <span>Order</span>
          <span>Total</span>
        </div>
        <div class="col-md-1">
          200
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data(){
      return{
        
      }
    },
    methods:{
      callclick : function(event){   
      var clickonpizza = document.getElementsByClassName('callclick');
      for(let i=0;i<clickonpizza.length;i++){
        clickonpizza[i].addEventListener('click',function(){
          console.log("clickonpizza",clickonpizza);
          console.log("classlist",clickonpizza[i].classList.contains('decrement'));
          // console.log("innerhtml",clickonpizza[i].parentNode.nextElementSibling.innerHTML);
          if((clickonpizza[i].classList.contains('decrement')) && (clickonpizza[i].parentNode.nextElementSibling.innerHTML == '0')){
            console.log("hi")
          }
          else if(clickonpizza[i].classList.contains('increment')){
            
            clickonpizza[i].parentNode.previousElementSibling.innerHTML = Number(clickonpizza[i].parentNode.previousElementSibling.innerHTML)+1;
            console.log("spanvalue",clickonpizza[i].parentNode.parentElement.parentNode.querySelectorAll('.spanvalue'));
            var pizza_values_in_node = clickonpizza[i].parentNode.parentElement.parentNode.querySelectorAll('.spanvalue');
            var pizzavalueselected = [];
            for(let i=0;pizza_values_in_node.length;i++){
              pizzavalueselected.push(Number(pizza_values_in_node[i].innerHTML));
            }
            for(let i=0;i<pizzavalueselected.length-1;i++){
              if((pizzavalueselected[i]/2)>=1){
                if((pizzavalueselected[i]%2)==1){
                  pizza_values_in_node[i].innerHTML = 1;
                  pizza_values_in_node[i+1].innerHTML = pizzavalueselected[i]/2;
                }
                else{
                  pizza_values_in_node[i].innerHTML = '0';
                  pizza_values_in_node[i+1].innerHTML = Number(pizza_values_in_node[i+1].innerHTML)+(pizzavalueselected[i]/2);
                }
              }
            }
          }
          else{
            // this.clickonpizza[i] = clickonpizza[i];
            console.log("else")
          }
        })
      }    
      }
      // decrease :function (a){
      //   this.a = a;
      // },
      // increase :function (a){
      //   a.previousElementSibling.innerHTML = parseInt(a.previousElementSibling.innerHTML)+1;
      //   var pizza_values_in_node = a.closest('.classifiedpizza').querySelectorAll('.value');
      //   var pizzavalueselected = [];
      //   for(let i=0;pizza_values_in_node.length;i++){
      //     pizzavalueselected.push(parseInt(pizza_values_in_node[i].innerHTML));
      //   }
      //   for(let i=0;i<pizzavalueselected.length-1;i++){
      //     if((pizzavalueselected[i]/2)>=1){
      //       if((pizzavalueselected[i]%2)==1){
      //         pizza_values_in_node[i].innerHTML = 1;
      //         pizza_values_in_node[i+1].innerHTML = pizzavalueselected[i]/2;
      //       }
      //       else{
      //         pizza_values_in_node[i].innerHTML = '0';
      //         pizza_values_in_node[i+1].innerHTML = parseInt(pizza_values_in_node[i+1].innerHTML)+(pizzavalueselected[i]/2);
      //       }
      //     }
      //   }
      // }
    }
  }
</script>

<style scoped>
#pizza-app{
  margin:5% 20%; 
}
.heading{
  text-align:left;
  font-size: 2em;
}
.text,.heading,.total span{
  color: blue;
}
.heading span:first-child,.total span:first-child{
  margin-right: 10px;
}
.heading span:last-child,.total span:last-child{
  font-weight:900;
}
.total{
  font-size: 1.5em;
}
.ordertable{
  border:1px solid #ccc;
  padding: 2%;
}
.sizeblock,.adultblock,.childblock{
  border-bottom: 1px solid #ccc;
  padding: 2%;
  margin-top: 20px;
}
.smallicon{
  height: 20px;
}
.decrement,.increment,.largeicon,#disabledecrement{
  height: 30px;
}
#disabledecrement{
  display: none;
}
.sizeblock .col-md-6{
  text-align: right;
}
.sizeblock .row:not(:last-child){
  margin-bottom: 20px;
}
.adulticon,.childicon,.mediumicon{
  height: 25px;
}
.adultblock .col-md-1:first-child,.childblock .col-md-1:first-child{
  padding: 0;
  text-align: left;
}
.adultblock .col-md-7,.childblock .col-md-7{
  text-align:left;
  padding-left: 0;
}
.ordertable div:last-child{
  border-bottom: 0;
}
.totalblock{
  padding: 2%;
}
.totalblock .col-md-8{
  text-align:left;
  padding-left: 0;
}
</style>