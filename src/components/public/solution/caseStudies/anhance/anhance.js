var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.caseStudies.anhance",{
			url: "/anhance",
			templateUrl: "/templates/components/public/solution/caseStudies/anhance/anhance.html",
			controller: "AnhanceController"
		})
}); 

app.controller("AnhanceController", function ($scope) {

});