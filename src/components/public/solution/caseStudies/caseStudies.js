var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.caseStudies",{
			url: "/caseStudies",
			templateUrl: "/templates/components/public/solution/caseStudies/caseStudies.html",
			controller: "CaseStudiesController"
		})
}); 

app.controller("CaseStudiesController", function ($scope) {

});