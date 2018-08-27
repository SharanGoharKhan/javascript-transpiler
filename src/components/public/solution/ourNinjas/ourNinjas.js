var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.ourNinjas",{
			url: "/ourNinjas",
			templateUrl: "/templates/components/public/solution/ourNinjas/ourNinjas.html",
			controller: "OurNinjasController"
		})
}); 

app.controller("OurNinjasController", function ($scope) {

});