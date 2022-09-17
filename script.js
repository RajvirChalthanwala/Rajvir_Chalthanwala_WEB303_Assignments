/*
	WEB 303 Assignment 1 - jQuery
	Name: Rajvir Chalthanwala
	Student Id: 0779860
*/
$(document).ready(function(){
	$("input").change(function(){ 						// Using Change event // 
		let salary = $("#yearly-salary").val();
		let percentage = $("#percent").val();
		let netamount = ((salary*percentage)/100).toFixed(2);

		// Math Calculation //
		$("#amount").text("$" + netamount);
	});
});

