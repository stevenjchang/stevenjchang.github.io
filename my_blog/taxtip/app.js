(function(){
	var app = angular.module('taxtip',[ ]);

	// <body ng-controller='MainController as calc'>
	app.controller('MainController', function(){
		//as calc
		this.inputAmount = 100;
		this.inputState = 9;
		this.inputPeople = 4;
		this.inputTip = 15;
		this.inputSpecialCaseNo = 2;
		this.sc1;
		this.sc2;
		this.arrarr = [];
		this.toggle = false;
		this.toggle1 = {
			"person": ["Person 1", "Person 2", "No fucking way", "Person 4"],
			"something": ["v1", "v2", "v3", "v4"]
		}
		

		this.genSpecial = function(num){
			for (var i=1; i<num; i++){
				// this.arrarr.push('<div class="col-xs-4 col-xs-offset-1"><label>person '+ i + '</label></div><div class="col-xs-5 col-xs-offset-1"><input type="text" class="form-control"></div></div>');
			};
			return this.arrarr;
		}
	}); // app.controller('MainController')

	// <li class='list-group-item' ng-controller='MathController as math'> 
	app.controller('MathController', function(){
		//as math
		this.subTotalPer = function(p1, p2){
			return p1 / p2;
		}
		this.tipTotal = function(p1, p2, p3){
			var tot = (p1*(p2/100)) + (p1*(p3/100));
			return tot;
		}
		this.tipPer = function(p1, p2){
			return p1 / p2;
		}
		this.overallTotal = function(p1, p2){
			return parseFloat(p1) + parseFloat(p2);
		}
		this.overallPer = function(p1, p2){
			return p1 / p2;
		}
		this.specialCase = function(s, p1, p2){
			return s * ((p1+p2)/100);
		}

	}); // app.controller('MainController')


	app.directive('testDirective', function(){
		// use it like this
		// 		Element Directives (for UI widgets)
		// 		<test-directive></test-directive>
		return {
			restrict: "E",
			templateUrl: 'test-directive.html'
		};
		// or like this
		// 		Attribute Directives (for mixin behaviors)
		// 		<h3 test-directive></h3>
		return {
			restrict: 'A',
			templateUrl: 'test-directive.html'
		}
	})

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
		},
		{
			name:'Pentagonal Gem',
			price: 5.95,
			description: ". . .",
			canPurchase: false,
		}
	];
})();



