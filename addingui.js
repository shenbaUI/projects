var addingUI = angular.module("addingUI",["addservice"])
.controller("addingUIcontroller",["convertCurrency",function addingUIcontroller(convertCurrency){
	this.quantity = 2;
	this.price = 10;
	this.currency = 'IND';
	this.foreigncurrency = convertCurrency.foreigncurrency;
	
	this.total = function total(outputcurrency){
		return convertCurrency.convert(this.quantity * this.price,this.currency,outputcurrency);
	};
	
	this.submit = function submit(){
		alert("Thank You..!");
	};
}]);