var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.howItWorks",{
			url: "/howItWorks",
			templateUrl: "/templates/components/public/solution/howItWorks/howItWorks.html",
			controller: "HowItWorksController"
		})
}); 

app.controller("HowItWorksController", function ($scope) {

	$scope.saasProducts = "ssprds";
	$scope.socialNetworking = "snet";
	$scope.health = "hlth";

	$scope.completeLow = "compltLow";
	$scope.completeMedium = "compltMedium";
	$scope.completeHigh = "compltHigh";

	$scope.speedLow = "spdLow";
	$scope.speedMedium = "spdMedium";
	$scope.speedHigh = "spdHigh";

	$scope.partsLow = "prtsLow";
	$scope.partsMedium = "prtsMedium";
	$scope.partsHigh = "prtsHigh";

	$scope.currentSelectedCompleteFactor = "compltLow";
	$scope.currentSelectedSpeedFactor = "spdLow";
	$scope.currentSelectedPartsFactor = "prtsLow";

	$scope.currentSelectedCompleteSpeedPartsFactors = $scope.currentSelectedCompleteFactor + "-" + $scope.currentSelectedSpeedFactor + "-" + $scope.currentSelectedPartsFactor;
	$scope.currentSelectedEstFactor = $scope.saasProducts;

	$scope.estFactorValues = {
		"ssprds" : {
			"compltLow-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],

			"compltMedium-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdLow-prtsHigh" : ["$43", "$43", "$43", "$43", "$43", "$43", "$43", "$43", "$43"],
			"compltMedium-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],

			"compltHigh-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"]
		},
		"snet" : {
			"compltLow-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],

			"compltMedium-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],

			"compltHigh-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"]
		},
		"hlth" : {
			"compltLow-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltLow-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],

			"compltMedium-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltMedium-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],

			"compltHigh-spdLow-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdLow-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdLow-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdMedium-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsLow" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsMedium" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"],
			"compltHigh-spdHigh-prtsHigh" : ["$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44", "$44"]	
		}
	};

	$scope.selectEstFactor = function(estFactor) {

		if ($scope.currentSelectedEstFactor != estFactor) {
			$scope.currentSelectedEstFactor = estFactor;
		}
	};

	$scope.selectCompleteFactor = function(compltFactor) {

		if ($scope.currentSelectedCompleteFactor != compltFactor) {
			$scope.currentSelectedCompleteFactor = compltFactor;
			$scope.currentSelectedCompleteSpeedPartsFactors = $scope.currentSelectedCompleteFactor + "-" + $scope.currentSelectedSpeedFactor + "-" + $scope.currentSelectedPartsFactor;
		}
	};

	$scope.selectSpeedFactor = function(spdFactor) {

		if ($scope.currentSelectedSpeedFactor != spdFactor) {
			$scope.currentSelectedSpeedFactor = spdFactor;
			$scope.currentSelectedCompleteSpeedPartsFactors = $scope.currentSelectedCompleteFactor + "-" + $scope.currentSelectedSpeedFactor + "-" + $scope.currentSelectedPartsFactor;
		}
	};

	$scope.selectPartsFactor = function(prtsFactor) {

		if ($scope.currentSelectedPartsFactor != prtsFactor) {
			$scope.currentSelectedPartsFactor = prtsFactor;
			$scope.currentSelectedCompleteSpeedPartsFactors = $scope.currentSelectedCompleteFactor + "-" + $scope.currentSelectedSpeedFactor + "-" + $scope.currentSelectedPartsFactor;
		}
	};
});

