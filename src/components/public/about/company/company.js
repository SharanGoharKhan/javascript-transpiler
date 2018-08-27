var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.about.company",{
			url: "/company",
			templateUrl: "/templates/components/public/about/company/company.html",
			controller: "CompanyController"
		})
}); 

app.controller("CompanyController", function ($scope) {

	$scope.chatNow = function() {
		Intercom('show');
	};
});