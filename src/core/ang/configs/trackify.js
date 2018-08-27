var app = angular.module('App');

app.run(function($rootScope) {

	var INTERCOM_PRODUCTION_APP_ID = 'ecouorc7';
	var INTERCOM_STAGING_APP_ID = 'xp9th96m';

	window.Intercom("boot", {
        app_id: INTERCOM_PRODUCTION_APP_ID
    });
  
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
       window.Intercom("update");
    });
});