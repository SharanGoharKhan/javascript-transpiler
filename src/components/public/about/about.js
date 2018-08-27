var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.about",{
			url: "/about",
			templateUrl: "/templates/components/public/about/about.html",
			controller: "AboutController"
		})
}); 

app.controller("AboutController", function ($scope) {

});