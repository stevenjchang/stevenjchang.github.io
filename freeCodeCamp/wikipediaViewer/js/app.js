var app = angular.module('MainModule', []);

app.controller('MainController', ['$http', function($http){
	this.results = [];
	var title = this.search_box.val();
	var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
	var cb = '&callback=JSON_CALLBACK';
	var page = 'https://en.wikipedia.org/?curid=';

	$http.get(api+title+callback).success(function(data){
		this.results.push({title: v.title, body: v.extract, page: page + v.pageid})
	});

}]);