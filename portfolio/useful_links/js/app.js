$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});

(function(){

	var app = angular.module('MainModule', ['ngTagsInput', 'firebase']);

	app.controller('MainController', ["$firebaseArray", function($firebaseArray){
		var rootRef = new Firebase("https://myblogbeta.firebaseio.com/");
		this.tags = $firebaseArray(rootRef);
		
		this.onSubmit = function(){
			this.tags.$add(this.newData);
			this.newData = '';
		};

		this.tryFilter = {};

	}]);

	// app.filter('customFilter', function(){
	// 	return function(item, searchThroughArray){
	// 		var newnew = [];

	// 		for (var i = 0; i<searchThroughArray.length; i++){
	// 			if (item.tags.tagsInside == searchThroughArray[i]){
	// 				newnew.push(item.tags.tagsInside)
	// 			}
	// 		}
	// 		main.tryFilter

	// 		if (this.tags.tagsInside == search1){
	// 			newnew.push()
	// 		}

	// 		newnew.push(item.title);
	// 		return newnew;
	// 	}
	// })

	app.filter('customFilter', function(){
		return function(item){
			var newnew = "bootstrap";
			console.log(item);
			return item;
		}
	})











})();