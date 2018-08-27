var app = angular.module('App');

app.factory('intercomService', [function() {
	var self = {};

	self.SITE_CONTACT_DETAILS_EVENT = 'site-contact-details';
	self.SITE_PROJECT_DETAILS_EVENT = 'site-project-details';

	self.trackIntercommEvent = function(event_name, more_metadata) {
		Intercom('trackEvent', event_name, more_metadata);
	};

	return self;
}]);