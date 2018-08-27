var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution",{
			abstract: true,
			templateUrl: "/templates/components/public/solution/solution.html",
			controller: "SolutionController"
		})
}); 

app.controller("SolutionController", function ($scope) {

});