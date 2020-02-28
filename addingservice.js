angular.module("addservice",[])
.service('convertCurrency',function(){
	var foreigncurrency = ['IND','USD','EUR'];
	var indToOther = {
		IND : 10,
		USD : 5,
		EUR : 1
	};
	var convert = function(amount , currency , outputcurrency){
		return amount * indToOther[outputcurrency] / indToOther[currency];
	};
	return{
		foreigncurrency:foreigncurrency,
		convert:convert
	};
});	