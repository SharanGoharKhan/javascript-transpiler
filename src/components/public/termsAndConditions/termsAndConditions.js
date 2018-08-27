var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.termsAndConditions",{
			url: "/termsAndConditions",
			templateUrl: "/templates/components/public/termsAndConditions/termsAndConditions.html",
			controller: "TermsAndConditionsController"
		})
}); 

app.controller("TermsAndConditionsController", function ($scope) {

});