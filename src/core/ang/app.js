require("@babel/polyfill");
var app = angular.module('App',['ui.router']);

app.config(function($urlRouterProvider, $locationProvider, $stateProvider){
	$locationProvider.html5Mode({ enabled: true, requireBase: true });

	$stateProvider
		.state('app',{
			abstract: true,
			controller: 'AppController',
			template: '<ui-view></ui-view>'
		})

	$urlRouterProvider.otherwise('/home');
});

app.run(function($rootScope){

});

app.controller('AppController',function($scope, $rootScope){

	$rootScope.$on('$locationChangeSuccess', function(e) {
		/* To set the page scroll Top to 0, to show the start of page. */
		window.scrollTo(0,0);
    });
});