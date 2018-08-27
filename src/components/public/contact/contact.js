var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.contact",{
			url: "/contact",
			templateUrl: "/templates/components/public/contact/contact.html",
			controller: "ContactController"
		})
}); 

app.controller("ContactController", function ($scope) {

});