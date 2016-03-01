/*
var todo = document.querySelector( '#todolist' ),
    form = document.querySelector( 'form' ),
    field = document.querySelector( '#newitem' );


function todoList() {
	todo.innerHTML +=  '<li>' + todoItem.value.property <img src="img/redx.png"  class="redx"> + '</li>';
	todo.
};

    form.addEventListener( 'submit', function( ev ) {
    todo.innerHTML += '<li>' + field.value + '</li>';
*/



function removeItem() {
		var t = event.target;
		var tx = t.parentNode;
		var txx = tx.parentNode;
			t.parentNode.removeChild(t);
			tx.parentNode.removeChild(tx);
			txx.parentNode.removeChild(txx);
	};




function todoList() {
	var item = document.getElementById("todoItem").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	var newBtn = document.createElement("button");
	newItem.appendChild(text);
	newItem.appendChild(newBtn);
	var newImg = document.createElement("img");
	newBtn.setAttribute('class', 'redx');
	newBtn.setAttribute('onclick', 'removeItem()');
	newBtn.appendChild(newImg);
	newImg.setAttribute('src', "img/redx.png");
	newImg.setAttribute('class', "redximg");
	document.getElementById("todoList").appendChild(newItem);
	document.getElementById("todoItem").value = '';
}; 


/*
var redx = document.querySelector(".redx");
redx.addEventListener("click", function(){
	;
});
*/


/*
function todoList() {
	var item = document.getElementById("todoItem").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	var newCheckbox = document.createElement("input");
	newCheckbox.type = "checkbox";
	newItem.appendChild(newCheckbox);
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
}; */


/*
document.getElementById("testrun").addEventListener("click", function(){ 
	alert(this.id+" : mouse-click makes script run");
}); 
*/


/*
var button = document.querySelector("#submitbutton");
button.addEventListener("click", function(event){
	addItem(document.getElementById("todoItem").value);
	console.log(document.getElementById("todoItem").value);
});
*/
// events, 
// DOM,
// 


/*
function todoList() {
	var item = document.getElementById("todoInput").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
}; 
*/

//document.write(JSON.stringify(myList));

/*
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
*/




