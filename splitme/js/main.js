/* 
billTotal
people
tipPercent
submit
*/

//var calcSplit = function(total, people, percent){
//	return total * (1+percent) / people
//}

var calcSplit = function(){
	var total = document.getElementById("billTotal").value;
	var percent = document.getElementById("tipPercent").value;
	var people = document.getElementById("people").value;
	var totalDisplay = document.getElementById('totalDisplay');
	var tipOnlyDisplay = document.getElementById('tipOnlyDisplay');
	totalDisplay.setAttribute('class', 'show');
	/*tipOnlyDisplay.setAttribute('class', 'show');*/
	var newTotal = total * (1+percent) / people;
	return document.getElementById('payAmount').innerHTML = Math.round(newTotal * 100)/100;
}

document.getElementById('totalDisplay').setAttribute('class', 'dontshow');
/*document.getElementById('tipOnlyDisplay').setAttribute('class', 'dontshow');*/
document.getElementById('submit').onclick = function() { calcSplit(); };
