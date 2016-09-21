(function(){
	var app = angular.module('taxtip',['ngRoute', 'firebase']);

	app.config(ApplicationConfig);

	function ApplicationConfig($routeProvider){
		$routeProvider.when('/', {
			controller: 'MainController as ctrl',
			templateUrl: 'about.html',
		})
	}

	app.controller('MyCtrl', MyController);

	function MyController($scope, $firebaseObject){
		var rootRef = new Firebase('https://myblogbeta.firebaseio.com/data');
		// var davidRef = rootRef.child('users').child('david');
		// this.user = $firebaseObject(davidRef);
		// this.user = $firebaseObject(rootRef);

		var syncObject = $firebaseObject(rootRef);

		syncObject.$bindTo($scope, "data");

	}

	// <body ng-controller='MainController as calc'>
	app.controller('MainController', function(){
		//as calc
		this.tabb = 0;
		this.inputAmount;
		this.inputTax;
		this.inputPeople;
		this.inputTip = 15;
		this.objectData = [
			{
				amount: "some name",
				tax: "some price",
				tip: "some name",
				people: "some name",
				taxPercent: "some name",
				taxTipPercentage: "haha",
				taxTip: "some name",
				ind_subTotal: "some name",
				ind_taxTip: "some name",
				ind_total: "some name",
				group_subTotal: "some name",
				group_taxTipTotal: "some name",
				overall_total: "some name",
			}
		];

		// toggle switch
		this.toggleResults = false;
		// this.objectData = {dat: [this.inputState, v2, v3, v4]};
		this.calculateButton = function(){
			var amount = parseFloat(this.inputAmount);
			var tax = parseFloat(this.inputTax);
			var tip = parseFloat(this.inputTip);
			var people = parseFloat(this.inputPeople);
			var taxPercent_func = function(){
				return (tax*100)/amount;
			}
			var taxTipPercentage_func = function(){
				return (taxPercent_func() + tip);
			}
			var taxTip_func = function(){
				return amount * (taxTipPercentage_func()/100);
			}
			var ind_subTotal_func = function(){
				return amount / people;
			}
			var ind_taxTip_func = function(){
				return ind_subTotal_func() * (taxTipPercentage_func()/100);
			}
			var ind_total_func = function(){
				return ind_subTotal_func() + ind_taxTip_func();
			}
			var group_subTotal_func = function(){

			}
			var overall_total_func = function(){
				return amount + taxTip_func();
			}

			this.objectData = [
				{
					amount: this.inputAmount,
					tax: this.inputTax,
					people: this.inputPeople,
					tip: this.inputTip,
					taxPercent: taxPercent_func(),
					taxTipPercentage: taxTipPercentage_func(),
					taxTip: taxTip_func(),
					ind_subTotal: ind_subTotal_func(),
					ind_taxTip: ind_taxTip_func(),
					ind_total: ind_total_func(),
					group_subTotal: this.inputAmount,
					group_taxTipTotal: taxTip_func(),
					overall_total: overall_total_func(),
				}
			];
			this.toggleResults = true;
			this.tabb = 0;
		}
	}); // end of app.controller('MainController')


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
