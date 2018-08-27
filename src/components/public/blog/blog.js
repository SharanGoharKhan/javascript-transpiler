var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.blog",{
			url: "/blog",
			templateUrl: "/templates/components/public/blog/blog.html",
			controller: "BlogController"
		})
}); 

app.controller("BlogController", function ($scope) {

});