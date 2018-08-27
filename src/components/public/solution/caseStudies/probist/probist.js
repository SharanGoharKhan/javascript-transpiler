var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.caseStudies.probist",{
			url: "/probist",
			templateUrl: "/templates/components/public/solution/caseStudies/probist/probist.html",
			controller: "UndolusController"
		})
}); 

app.controller("UndolusController", function ($scope) {

});