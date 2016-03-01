So Jeff says do a project. Well, actually, EVERYONE said do a project, but
Jeff was the most convincing and on point. Maybe because I was more specific
in asking questions. But build a straight JavaScript project makes alot of
sense.

So what is the first project. The first project is a to-do list. That is my
project. What do I need to decide before doing this

1. I need a time-table. A deadline. --> my deadline will be next Wednesday 5pm.
2. I need a clear list of end functions of the project

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!	
The site needs to be able to do 4 things, by Wednesday

	#1 Input data
	#2 Delete data
	#3 Mark data as checked off (on/off switch)
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!	


Let's Psydocode this shit!

first lets figure out the environment. 

where is everything stored? 
	object or array?
obviously everything is a variable.
	is it 1 variable or many?
how does a front-side (black form) form communicate with the site?
	what's' beyond alert, confirm, and prompt?
how does a button delete data?
and how does it know which data to delete?
	is it jQuery or can i do it in pure JavaScript?
where do you store a "checklist ON/OFF" property?
	is it jQuery? '

where is everything stored?
	what does a sample list look like?
		_ buy milk
		_ throw out trash
		_ call friend
		_ clean room
		--> so what is that? thats a string.
		--> ITS AN ARRAY

so it is 1 variable: an ARRAY

how to add to the array? 

// this is what the end list will look like
// var myList = ["buy milk", "throw out trash", "call friend", "clean room"];

to start:
//var set to an empty array.
var myList= [];
//build a function to push "string" data into 
var addItem = function (todoItem) {
	myList.push(todoItem);
};
//how to delete any item from the list
//do i need a new function?
	//how do you find todoItem inside the myList array?
	//first, i can loop it
	var deleteItem = function (todoItem){
		var removedItem = "";
		for (var i=0; i<myList.length; i++){
			if (myList[i] === todoItem){
				removedItem = todoItem;
				delete myList[i];
			}
		}
		return removedItem;
	};
//can i add that to the existing function?
//fuck, actually, not actually deleting the item, am i?
//..am i just turning the switch on and off?
// lets just try, to basic code it
//ohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
// ohhh, to do that, I need to myList an Object, and ...
//no wait, i can keep the myList an Array, but each item needs to be an object instead of a string
//no wait, that's not right either, wait, i guess it is
//so do it, convert var myList = ["buy milk", "throw out trash", "call friend"] into an Array with Objects
var myList = ["buy milk", "throw out trash", "call friend"];
var myList = [
	buyMilk {item: "buy milk", onOff: true},
	throwOutTrash {item: "throw out trash", onOff: true},
	callFriend {item: "call friend"}
	];
//now i notice the problem of the object --> how does each object get named.
//it might need to be like object1, object2, etc
//but, even something so simple, i need a look to name it.
CONCLUSION ---> This cannot be an Array, it has to be an object, right?
(nope, that was a wrong conclusing)
//so convert the myList array into an object
var myList = ["buy milk", "throw out trash", "call friend"];
var myList = {
	item1: "buy milk",
	item2: "throw out trash",
	item3: "call friends"
};
------this was wrong-------
go back to the Array, this time, with an anonymous object inside the array

var myList = ["buy milk", "throw out trash", "call friend"];
var myList = [ {item: "buy milk", onOff: true}, {item: "throw out trash", onOff: false}, 
			{item: "call friend", onOff: true} ];

//next, figure out how to add item to this list
var addItem = function (todoItem){
	var temp = {};
	temp.item = todoItem;
	temp.onOff = true;
	myList.push(temp);
};

//next, how to remove an item?
//what do i use?
var deleteItem = function 
//the issue here is there is two way to approach it (of how you turn off)
//..you can enter the exact string, and then set that to off
quickly: how do you code that
var deleteItem = function(str){
	for (var i=0; i<myList.length; i++){
		if (myList[i].item === str){
			myList[i].onOff = false;
		}
	}
};
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
DAY 2
----------------------------------------------------------------------------------------------------------------------------------
1. Print - how to display from Array to the actual html 
2. Delete - Make your own Delete function onto the current site
3. myList - how to get myList to show on the html
----------------------------------------------------------------------------------------------------------------------------------

//okay, how the hell do you display myList onto the html document?
//console.log?
--https://www.youtube.com/watch?v=8ogdhvxShe0
				<form id="todoForm">
					<input id="todoInput">
					<button type="button" onclick="todoList()">Click Me</button>
				</form>
				<ol id="todoList">
				<ol>
				function todoList() {
					var item = document.getElementById("todoInput").value;
					var text = document.createTextNode(item);
					var newItem = document.createElement("li");
					newItem.appendChild(text);
					document.getElementById("todoList").appendChild(newItem);
				};
--https://www.youtube.com/watch?v=8ogdhvxShe0

----DELETE----
//So now that that video has solved your problem, what is the next issue(s)?
2. Make your own Delete function onto the current site
//how do i do that?
//where does the list reside? in the <ol id="todoList">'s <li>
//oh fuck
//lets do 3 first
3. Change todoList to myList
//cant figure out how to display an array, myList, in html
//do you need a constructor function?
//does each line need to be individual?

document.write('<ol><li>'+bookList.join('</li><li>')+'</li></ol>');
--http://stackoverflow.com/questions/12607162/javascript-sort-array-into-an-ordered-list

//okay so to write to the html, you can just use document.write(myList) in the .js file
//now that brings up another issue, i cannot print an object inside an array, it just says object
document.write(JSON.stringify(myList));
--http://stackoverflow.com/questions/957537/how-can-i-display-a-javascript-object

//so now, lets just role with this basic version for 1 second
//even though it prints the objects inside the array in a super shitty format
//how do you add to the list
--Adding--using the form input to communicate with the myList array



------DOM------
--https://www.youtube.com/watch?v=4Gv81XcC8iE
var h1 = document.getElementById("topHeading");
//this is how you grab the info from the h1 topHeading element
//any element in JS has properties you can use to get that object
such as:
	id
	tagName
	innerHTML  // h1.innerHTML = "New Heading!"
	onclick


----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
DAY 3 - but its a Saturday evening
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
Now you know what a DOM looks like in relation to both html and JavaScript
--https://www.youtube.com/watch?v=4Gv81XcC8iE
//thanks to the vidoe above
//so now what? now that you understand the DOM now what? 
//so now you know how to change both the innerHTML and the actual tag
/* it's like the same as the this.name = name thingy, except it becomes:
well, first off, you retreive data by using the document.getElementById("topHeading") method. 
then you change it by... ? setting h1.innerHTML = "New Heading"? is that how you do it?

so how can i do this assignment? 
first off you have to retrieve the data inside the form input, which is "todoItem"
then you have to use that information to change the myList array.

okay so how do you retreive the information from the "todoItem", you've tried it using some patchy ass
copy and paste, now that you understand the DOM a little better, try it again.
then you have to understand how the click event relates to everything.
*/
var button = document.querySelector("#submitbutton");
button.addEventListener("click", function(event){
	addItem(document.getElementById("todoItem").value);
	console.log(document.getElementById("todoItem").value);
});
function {
	button.addEventListener("click", function(event){
		addItem(document.getElementById("todoItem").value);
		console.log(document.getElementById("todoItem").value);
	})
}

----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
DAY 4 - Monday of Week 2, time to get serious
----------------------------------------------------------------------------------------------------------------------------------
understand the DOM
understand event listener 
complete1. Change myArray to <ul><li>
2. How to delete - //I think I figured out how to add but now how do I delete?

----------------------------------------------------------------------------------------------------------------------------------

--https://www.youtube.com/watch?v=DFhXWHHD7I8

<button id="submitbutton" onclick="function()"></>
//mouse over and mouse out syntax
<img id="image" src="about.jpg" onmouseover="mouseOver()" onmouseout="mouseOut()" />
<script>
function mouseOver() {
	document.getElementById("image").src="about2.jpg"
}
function mouseOut() {
	document.getElementById("image").src="about.jpg"
}
//creating a new element (OH SHIT) such as <p> <h1> <li>
var paragraph = document.createElement("p");
//I don't understand this next part so I will just copy and paste, then watch video on .appendChild
<p>This text is outside the div</p>
<div id="text">
	<p>This text is inside the div</p>
	<p>This is a new text!
</div>
var paragraph = document.createElement("p");
var text = document.createTextNode("This is a new text!");
paragraph.appendChild(text);
var element = document.getElementById("text");
element.appendChild(paragraph);
//now google it

//okay, didn't quite find the video i wanted, but i get it, I was able to understand
// how the code for appendchild works on the <ul><li> and the site is now converted
// so task #1 is done, what is task number two, and don't say delete, cuz im not sure 
// that makes sense.
/* really, the next thing you need to understand is how the list should be stored. 
Can they stay stored in the <ul><li> format or should i go back to the array?
how the hell do you delete from a ul li?
i think I need to install the click mechanism first. Because if you can click you can delete...right?
(or, you can make the constructer to add each item as a button, or a line of things, 
instead of just a <li>, that way the onclick for each event will delete that button
BUT... then do each <li> need to be named? can you loop the naming mechanism? can you do it annoymously 
with just the onclick function? */
break down those questions:
1. how to add a checkbox to the <li> on the same line
2. can clicking on the checkbox correspond to the text in that line, without an ID for that checkbox

<ul id="todoList">
					<li>buy milk</li>
					<li>throw out trash</li>
					<li>call friend</li>
				</ul>
//that's what the ul list looks like, how can you add a checkbox
<ul id="todoList">
					<li><input type="checkbox"> buy milk </li>
					<li><input type="checkbox"> throw out trash</li>
					<li><input type="checkbox"> call friend</li>
				</ul>
//so you did it. There's no functionality to it, but you did it
//ahhhhhhhhhhhhhhhhh
_ buy milk
_ throw out trash
_ call friend
try me
//now when I try to add something, the new item does not have a checkbox in front of it
//how can i fix that?
I did it!!!!!!
//okay, that was difficult and exciting, trouble shooting how to append both a checkbox and li at the same time
What's next? '
-------------
2. Connect the clicker. Connect the check on the checkbox to something different
but what? what are you connecting? well first off, how do you connect that button annoymously
it can only be imbedded into the <li> line, right?
lets test it on 1 <li> line
// so you do it with the .onlick into the thingy
can you can it to link to the annoymous line?

-----http://thewebrocks.com/publications/smashingbook3/todolist/
.removedChild
ev.target
.add 

// addEventListener video
-------https://www.youtube.com/watch?v=_Szdctv38Ow
//the second old way to do it
<script type="text/javascript">
function addListeners() {
	document.getElementById('mybtn').onclick = function(){ //function here }
}
window.onload = addListeners;
</script>
----- NEW METHOD of adding addEventListener -----
function addListeners() {
	if (window.addEventListener){
		document.getElementById("mybtn").addEventListener(type, listener, useCapture)
		//using .addEventListener instead of the onclick 

	}
}
--
type // type of event you want to listen to, such as
	onclick
	onmouseover
	onmouseout
listener // name of the function you want to fire off
	// the function that will execute when the event is triggered
useCapture  // indicates whether the user wants to initiate capture or not
	usually set to false
function addListeners() {
	if (window.addEventListener){
		document.getElementById("mybtn").addEventListener("click", btn1func, false);
		document.getElementById("mybtn2").addEventListener("click", btn2func, false);		
	} else if (window.attachEvent){  //add for IE8 or before
		document.getElementById("mybtn").attachEvent("onlick", btn1func);
	}
	//Add your functions
	function btn1func(){
		alert(this.id+" : mouse-click makes script run");
	}
}

-----https://www.youtube.com/watch?v=XGOJVfOW-bo 
// To-do List App - JavaScript Tutorial for Beginners
// by Easy Learn Tutorial

-------------------------------------------------------------------------------
tryjQuery - codeSchool Chapter 4
-------------------------------------------------------------------------------
$(document).ready(function(){
	$('confirmation').on('click', 'button', function(){
		$(this).closest('.confirmation').find('.ticket').slideDown();
	});
});
// note the .closest and the .find
// .closest take you back up to the parent, and the .find takes you back down
// and searches in the other children.
--Refactoring Handler functions--
$(document).ready(function(){
	$('.confirmation').on('click', 'button', function(){
		$(this).closest('.confirmation').find('.ticket').slideDown();
	});
		$(this).closest('.confirmation').find('.ticket').slideDown();
	});
});
//make a function
function showTicket() {
	$(this).closest('.confirmation').find('.ticket').slideDown();
}
//now combine them
function showTicket() {
	$(this).closest('.confirmation').find('.ticket').slideDown();
}
$(document).ready(function(){
	$('.confirmation').on('click', 'button', showTicket);
	$('.confirmation').on('mouseenter', 'h3', showTicket);
});
-------------------------------------------------------------------------------
Keyboard and Form Events 4.12
-------------------------------------------------------------------------------
Keyboard Events 
	- keypress
	- keydown
	- keyup
Form Events 
	- blur
	- focus
	- select
	- submit 
	- change
-------------------------------------------------------------------------------
--Writing our Event Handler 4.12 --
$(document).ready(function(){
	$('.vacation').on('keyup', '.quantity', function(){
		// Get the price for this vacation
		// Get the quantity entered
		// Set the total to price + quantity
	});
});
var price = $(this).closest('vacation').data('price'); --> '399.99'
var price = +$(this).closest('vacation').data('price'); --> 399.99
	!!!!!! //Use the + to convert the string to a number

----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
DAY 5 - Tuesday, next to last DAY. Lets try to finish by this afternoon, 2:30pm
----------------------------------------------------------------------------------------------------------------------------------
//what do I need to get done today? the final items of the project
1. 
2. Delete Image button - find "X" image, include it in the constructor
3. add a class to the line 
4. add a Listening event to the image
----------------------------------------------------------------------------------------------------------------------------------
first off what is a .querySelector?
--you can use any selector you want, it will only give you the first one it friends
if you want everything, use .querySelectorAll
//lets goto youtube

//.querySelector replaces .getElementsByClassName .getElementsByTagName .getElementById
-----https://www.youtube.com/watch?v=W3EK4MlZW4g
//Javascript Selectors - Javascript Tutorial for Beginners With Examples
//LearnCode.academy
html page --
<p><button id="btnAdd">New Item</button></p>
<ul id="todoList"><ul>
js page--
function addNewItem(){
	//does something
}
var btnNew = document.getElementById('btnAdd');
btnNew.onclick = addNewItem;

-----http://thewebrocks.com/publications/smashingbook3/todolist/
//this is how you are suppose to code it, according to a site you found
(function(){

  var todo = document.querySelector( '#todolist' ),
      form = document.querySelector( 'form' ),
      field = document.querySelector( '#newitem' );
    
  form.addEventListener( 'submit', function( ev ) {
    todo.innerHTML += '<li>' + field.value + '</li>';
    field.value = '';
    field.focus();
    ev.preventDefault();
  }, false);

  todo.addEventListener( 'click', function( ev ) {
    var t = ev.target;
    if ( t.tagName === 'LI' ) {
      if ( t.classList.contains( 'done' ) ) {
        t.parentNode.removeChild( t );
      } else {  
        t.classList.add( 'done' );
      }
    };
    ev.preventDefault();
  }, false);

})();
-----------------------

//lets quickly discuss how the line looks
<ul>
	<li>str <img></li>
----------------------------------------------------------------------------------------------------------------------------------
Now, for the afternoon, I need to do 2 things
1. DONE DONE DONE // I need to make the img clickable via the main.js file
2. I need to make give new instances of the li the <img> property
3. The new instance needs to correspond to the exact line clicked (via event.target)
3. The clickable link needs to remove / delete the <li> line
----------------------------------------------------------------------------------------------------------------------------------

-----https://www.youtube.com/watch?v=jX1bS63cxQE
-----Using .appendChild(), .createElement() and .createTextNode() - Event Tutorial #3
-----User: CASMANWHAT
// Wow my mind just blew up
// wow wow
<body>
	<button id='addLi'>Press</button>
		<ul id='uList'>
			<li>ONE</li>
			<li>TWO</li>
			<li>THREE</li>
		</ul>
</body>
<script>
	var button = document.getElementById('addLi');
	var ul = document.getElementById('uList');

	var makeLi = document.createElement('li');
	var makeText = document.createTextNode('FOUR');

	ul.appendChild(makeLi).appendChild(makeText);
		//so he used appendChild twice in one session

	button.addEventListener('click', function(){	
	}, false);
</script>


----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------
HOLY SHIT i did it. Its Tuesday night, sometime between 5:30pm and 6:30pm, 1 day ahead of schedule
Worked for 8 hours per day for 2 days straights, super tired, super strung out, and yet very focused.
and I was able to complete the basic tasks I laid out on Thursday of last week. 
Damn that was exciting when it got done. That was alot of fun in the end. But also, coding 8 hours a day. 
Thats kind of a crystal globe of things to come. Theres lots of effort to be put in everyday. 



