var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.faqs",{
			url: "/faqs",
			templateUrl: "/templates/components/public/faqs/faqs.html",
			controller: "FaqsController"
		})
}); 

app.controller("FaqsController", function ($scope) {

	$scope.ninjasFaqs = [
		{
			'Q': 'What is the Ninja hiring process?',
			'A': 'Once you sign up and upload your resume, our HR personnel will get in touch with you if you seem like a good fit for HireNinja. You will then be tested for your algorithm and development skills. Once you clear the test, you will be called for a technical interview on Skype or an on-site visit. Selected candidates will then be called for a final interview.',
			'isExpanded': false
		},
		{
			'Q': 'What languages and development platforms will I be expected to code in?',
			'A': 'You will be coding in languages that are in your own skillset. We usually develop in languages like PHP, AngularJS, Laravel and Swift.',
			'isExpanded': false
		},
		{
			'Q': 'Can I work for HireNinja part time?',
			'A': 'Yes, you can.',
			'isExpanded': false
		},
		{
			'Q': 'Does it cost me to join as a Ninja?',
			'A': 'No, signing up with us is free of cost.',
			'isExpanded': false
		},
		{
			'Q': 'How much time does it take to get assigned the first project after my hiring?',
			'A': 'It takes an average of 2 weeks to get your first project.',
			'isExpanded': false
		},
		{
			'Q': 'Where will I be working from?',
			'A': 'You will be working remotely from your own location.',
			'isExpanded': false
		},
		{
			'Q': 'Do I have to give test every time I apply for a job?',
			'A': 'No, you don’t. If you’ve passed the test once, you don’t need to give a test every time you start a project with us.',
			'isExpanded': false
		},
		{
			'Q': 'How will I get paid?',
			'A': 'We pay through Online wire transfer or Paypal.',
			'isExpanded': false
		}
	];

	$scope.companiesFaqs = [
		{
			'Q': 'Why should I award my project to HireNinja?',
			'A': 'HireNinja is an exclusive network of pre-screened and tested Coding Ninjas that are looking to work with great companies like yours. We save you tons of time and energy by helping you break through the clutter.',
			'isExpanded': false
		},
		{
			'Q': 'Where are your Ninjas located?',
			'A': 'Our Ninjas develop projects in our office space as well as remotely  with constant communication with product managers and clients.',
			'isExpanded': false
		},
		{
			'Q': 'How long does it take to complete a project?',
			'A': 'That really depends on the nature of your project. Nonetheless, we always strive for rolling out quality work in the least possible time.',
			'isExpanded': false
		},
		{
			'Q': 'What sort of tasks can be done by your Ninjas?',
			'A': 'We have Ninja coders who are experts in software development for web and mobile, Quality Assurance, and both Front and Back end development.',
			'isExpanded': false
		},
		{
			'Q': 'How often will your Project Managers communicate with us?',
			'A': 'Our project managers are qualified professionals and send project updates every 2-3 days.',
			'isExpanded': false
		},
		{
			'Q': 'What happens if I am not satisfied with the service provided?',
			'A': 'We never let it get there!',
			'isExpanded': false
		},
		{
			'Q': 'How do you ensure work or product confidentiality?',
			'A': 'Our company as a whole, employees and Ninjas sign an NDA with your company. We respect the value of your work.',
			'isExpanded': false
		},
		{
			'Q': 'How can I join HireNinja?',
			'A': 'It won"t take more than a minute to start your first project with us. <a ui-sref="app.public.startAProject">Get started here.</a> Or <a href="" ng-click="chatNow();">chat</a> with our project manager now.',
			'isExpanded': false
		}
	];

	$scope.toggleExpandCollapse = function(faq) {
		faq.isExpanded = !faq.isExpanded;
	};

	$scope.chatNow = function() {
		Intercom('show');
	};
});