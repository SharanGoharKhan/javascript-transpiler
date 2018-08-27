var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.about.whyUs",{
			url: "/whyUs",
			templateUrl: "/templates/components/public/about/whyUs/whyUs.html",
			controller: "WhyUsController"
		})
}); 

app.controller("WhyUsController", function ($scope) {

});