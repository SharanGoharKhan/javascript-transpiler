var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.startAProject",{
			url: "/startAProject",
			templateUrl: "/templates/components/public/startAProject/startAProject.html",
			controller: "StartAProjectController"
		})
}); 

app.controller("StartAProjectController", ['$scope', 'intercomService', '$http', 'utils', '$state', function ($scope, intercomService, $http, utils, $state) {

	$scope.canShowOptionalFieldSection = false;

	$scope.name = "";
	$scope.email = "";
	$scope.contactNumber = "";
	$scope.skypeID = "";
	$scope.companyName = "";
	$scope.companyWebsiteUrl = "";
	$scope.projectName = "";
	$scope.projectDetails = "";

	$scope.fileSelectInput = document.getElementById('file-select');
	
	$scope.toggleShowOptionalFieldSection = function() {
		$scope.canShowOptionalFieldSection = !$scope.canShowOptionalFieldSection;
	};

	var contactForm = document.forms["projectForm"];

	$scope.sendProjectDetails = function() {

		if ($scope.name === "" || $scope.email === "" || $scope.contactNumber === "" || $scope.skypeID === "" ||
			contactForm["name"].value.match(/[0-9]/g) || !contactForm["email"].value.match(utils.getEmailRegExp()) 
			|| !contactForm["number"].value.match(/[0-9]/g)) {
			return;
		}

		var metaDetails = {
			'name': $scope.name,
			'email': $scope.email,
			'contact-number': $scope.contactNumber,
			'skype-id': $scope.skypeID
		};

		if ($scope.canShowOptionalFieldSection) {
			metaDetails['company-name'] = $scope.companyName;
			metaDetails['company-website-url'] = $scope.companyWebsiteUrl;
			metaDetails['project-name'] = $scope.projectname;
			metaDetails['project-details'] = $scope.projectDetails;
		}
		
		intercomService.trackIntercommEvent(intercomService.SITE_PROJECT_DETAILS_EVENT, metaDetails);

		$scope.name = "";
		$scope.email = "";
		$scope.contactNumber = "";
		$scope.skypeID = "";
		$scope.companyName = "";
		$scope.companyWebsiteUrl = "";
		$scope.projectName = "";
		$scope.projectDetails = "";

		$state.go('app.public.submitProject');
	};

	$scope.chatNow = function() {
		Intercom('show');
	};

	// $scope.uploadFile = function() {
	// 	$scope.fileSelectInput.click();
	// };

	// $scope.fileSelectInput.onchange = function(event) {
	// 	// Get the selected files from the input.
	// 	var files = $scope.fileSelectInput.files;
	// 	var formData = new FormData();

	// 	for (var file = 0; file < files.length; file++) {
	// 		formData.append('file', files[file], files[file].name);
	// 	}

	// 	$http({
 // 	 		method: 'POST',
 //  			url: 'https://api.hireninja.com/utility/sign',
 //  			data: {'bucket': 'anhance-dev', 'content': files[0].type, 'filename': files[0].name}
	// 	}).then(function successCallback(response) {
 //    		console.log(response);
 //  		}, function errorCallback(response) {
 //    		console.log(response);
 //  		});
	// };
}]);