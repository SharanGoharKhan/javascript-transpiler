var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.about.careers",{
			url: "/careers",
			templateUrl: "/templates/components/public/about/careers/careers.html",
			controller: "CareersController"
		})
}); 

app.controller("CareersController", function ($scope) {

});