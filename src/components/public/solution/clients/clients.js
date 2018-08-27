var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.clients",{
			url: "/clients",
			templateUrl: "/templates/components/public/solution/clients/clients.html",
			controller: "ClientsController"
		})
}); 

app.controller("ClientsController", function ($scope) {
	
	/* code for see more case studies. */
	$scope.showSeeMoreCaseStudies = true;
	$scope.showAllCaseStudies = false;
	$scope.seeAllCaseStudies = function() {
		$scope.showAllCaseStudies = true;	
		$scope.showSeeMoreCaseStudies = false;
	};

	$scope.chatNow = function() {
		Intercom('show');
	};
});