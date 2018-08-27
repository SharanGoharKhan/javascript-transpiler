var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.submitProject",{
			url: "/submitProject",
			templateUrl: "/templates/components/public/submitProject/submitProject.html",
			controller: "SubmitProjectController"
		})
}); 

app.controller("SubmitProjectController", function ($scope) {

});