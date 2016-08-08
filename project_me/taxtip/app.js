(function(){
	var app = angular.module('taxtip',[ ]);

	app.controller('TipCalcController', function(){
		this.inputAmount = 101;
		this.inputState = 9;
		this.inputPeople = 2;
		this.inputTip = 0;
		this.tipTotal;
		this.tipTotalPer = 0;
		this.overallTotal;
		this.overallTotalPer;

		this.calc_tipTotal2 = function(p1, p2){
			return p1 * (p2/100);
		}
		// this.calc_tipTotalPer = function(p1, p2){
		// 	return 
		// }

		this.calc_tipTotal = function(){
			this.tipTotal = this.inputAmount * (this.inputTip/100);
			this.tipTotalPer = (this.tipTotal / this.inputPeople);
			return this.tipTotal;
		};
		this.calc_overallTotal = function(){
			this.overallTotal = parseFloat(this.inputAmount) + parseFloat(this.tipTotal);
			this.overallTotalPer = parseFloat(this.overallTotal) / this.inputPeople;
			return this.overallTotal;
		};

		

		// myVariable = parseFloat(myVariable.toFixed(2))

	});

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



