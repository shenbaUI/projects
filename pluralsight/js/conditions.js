/*var value=6;
if(value==6){
	document.getElementById("conditions").innerHTML=value;
}
*/


/*var value=6;
if(value){
	document.getElementById("conditions").innerHTML=value;
}*/



/*var value=10;
if(value === true){
	document.getElementById("conditions").innerHTML=value;
}
*/



/*
var value=0;
if(value){
	document.getElementById("conditions").innerHTML=value;
}*/



/*var value=5;
if(value==6){
	document.getElementById("conditions").innerHTML=value;
}
else{
	document.getElementById("conditions").innerHTML="This is Not Expected output";
}*/


 
/*var value1=8;
var value2=6;
if(value1>value2){
	document.getElementById("conditions").innerHTML=value1 +" is greater than " +value2;
}
else if(value2>value1){
	document.getElementById("conditions").innerHTML=value2 +" is greater than " +value1;
}
else
document.getElementById("conditions").innerHTML="Both conditions are false";*/

					
									/*Conditions block End*/


/*
var value=2;
switch(value){
	case 0:
	document.getElementById("switch").innerHTML="Value is 0";
	break;
	case 1:
	document.getElementById("switch").innerHTML="Value is 1";
	break;
	case 2:
	document.getElementById("switch").innerHTML="Value is 2";
}*/



/*
var value=8;
switch(value){
	case 0:
	document.getElementById("switch").innerHTML="Value is 0";
	break;
	case 1:
	document.getElementById("switch").innerHTML="Value is 1";
	break;
	case 2:
	document.getElementById("switch").innerHTML="Value is 2";
	break;
	default:
	document.getElementById("switch").innerHTML="Matching Not Found";
	break;
}*/




/*var value="shenba";
switch(value){
	case "shenba":
	document.getElementById("switch").innerHTML=value;
	break;
}
*/



/*var value=1.1;
switch(value){
	case 1.1:
	document.getElementById("switch").innerHTML=value;
	break;
}*/




/*var value=[1,2,3];
var x=1;
switch(value[x]){
	case value[0]:
	document.getElementById("switch").innerHTML="First Element";
	break;
	case value[1]:
	document.getElementById("switch").innerHTML="Second Element";
}
*/

							/*Switch Block End*/




/*var value="";
for (var i = 0; i < 10; i++) {
	value+=i;
	console.log(value);
	document.getElementById("forloop").innerHTML=value;	
}*/


/*var value="";
var x;
var detail={"name":"shenba","department":"UI"};
for (x in detail) {
	value+=detail[x]+" ";
	document.getElementById("forloop").innerHTML=value;	
}
*/

							/*For Loop Block End*/

/*

var value=4;
var x="";
for(var i=0;i<10;i++){
	if(value==i){
	break;
	}
	x+=i+" ";
	document.getElementById("break").innerHTML=x;
}
*/




/*var value=4;
var x="";
for(var i=0;i<10;i++){
	if(value==i){
	continue;
	}
	x+=i+" ";
	document.getElementById("continue").innerHTML=x;
}
*/



/*function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
        
        if(x < 5)    throw "too low";
        if(x > 10)   throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}
*/


