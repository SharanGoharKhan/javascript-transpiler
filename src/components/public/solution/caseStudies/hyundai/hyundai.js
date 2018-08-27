var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.caseStudies.hyundai",{
			url: "/hyundai",
			templateUrl: "/templates/components/public/solution/caseStudies/hyundai/hyundai.html",
			controller: "HyundaiController"
		})
}); 

app.controller("HyundaiController", function ($scope) {

	$scope.chatNow = function() {
		Intercom('show');
	};
});