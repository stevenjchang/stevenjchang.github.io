var new_num = 0;
var current = 0;
var equals = function(){
	return operation(current, new_num);
}

// when user clicks number button, add it to the screen, or to the variable

$(function(){
	$('#no1').on('click', function(){
		console.log(event);
		if (current == 0){
			current += 1;
		} else {
			current += 10;
		};
		$('#top-box').val(current);
	})
});




console.log(equals());









/* BASIC MATH FUNCTIONS */

var add = function (num1, num2){
	return num1 + num2;
}
var subtract = function(num1,num2){
	return num1 - num2;
}
var multiply = function(num1,num2){
	return num1 * num2;
}
var divide = function(num1,num2){
	return num1 / num2;
}
var clear = function(){
	current = 0;
}