var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.caseStudies.supportsync",{
			url: "/supportsync",
			templateUrl: "/templates/components/public/solution/caseStudies/supportsync/supportsync.html",
			controller: "SupportsyncController"
		})
}); 

app.controller("SupportsyncController", function ($scope) {

});