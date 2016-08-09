(function(){
	var app = angular.module('taxtip',[ ]);

	// <body ng-controller='MainController as calc'>
	app.controller('MainController', function(){
		//as calc
		this.inputAmount = 100;
		this.inputState = 9;
		this.inputPeople = 4;
		this.inputTip = 15;
	}); // app.controller('MainController')

	// <li class='list-group-item' ng-controller='MathController as math'> 
	app.controller('MathController', function(){
		//as math
		this.subTotal = function(p1, p2){
			return p1 / p2;
		}
		this.tipTotal = function(p1, p2, p3){
			var tot = (p1*(p2/100)) + (p1*(p3/100));
			return tot;
		}
		this.tipPer = function(p1, p2){
			// console.log("wtf is going on?");
			return p1 / p2;
		}
		this.overallTotal = function(p1, p2){
			return parseFloat(p1) + parseFloat(p2);
		}
		this.overallPer = function(p1, p2){
			return p1 / p2;
		}
	});

	// 	// this.tipTotal;
	// 	// this.tipTotalPer = 0;
	// 	// this.overallTotal;
	// 	// this.overallTotalPer;

	// 	this.calc_tipTotal2 = function(p1, p2){
	// 		return p1 * (p2/100);
	// 	}
	// 	// this.calc_tipTotalPer = function(p1, p2){
	// 	// 	return 
	// 	// }

	// 	this.calc_tipTotal = function(){
	// 		this.tipTotal = this.inputAmount * (this.inputTip/100);
	// 		this.tipTotalPer = (this.tipTotal / this.inputPeople);
	// 		return this.tipTotal;
	// 	};
	// 	this.calc_overallTotal = function(){
	// 		this.overallTotal = parseFloat(this.inputAmount) + parseFloat(this.tipTotal);
	// 		this.overallTotalPer = parseFloat(this.overallTotal) / this.inputPeople;
	// 		return this.overallTotal;
	// 	}

	// });  // app.controller('MainController')



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



