var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.privacyPolicy",{
			url: "/privacyPolicy",
			templateUrl: "/templates/components/public/privacyPolicy/privacyPolicy.html",
			controller: "PrivacyPolicyController"
		})
}); 

app.controller("PrivacyPolicyController", function ($scope) {

});