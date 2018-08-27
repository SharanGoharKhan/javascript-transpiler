var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.about.pricing",{
			url: "/pricing",
			templateUrl: "/templates/components/public/about/pricing/pricing.html",
			controller: "PricingController"
		})
}); 

app.controller("PricingController", function ($scope) {

});