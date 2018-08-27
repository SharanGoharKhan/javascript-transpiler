var app = angular.module("App");

app.config(function($stateProvider){
	$stateProvider
		.state("app.public.solution.caseStudies.tecademics",{
			url: "/tecademics",
			templateUrl: "/templates/components/public/solution/caseStudies/tecademics/tecademics.html",
			controller: "TecademicsController"
		})
}); 

app.controller("TecademicsController", function ($scope) {

	$scope.chatNow = function() {
		Intercom('show');
	};
});

// function greetings (name) {
// 	return 'hello ' + name
//    }
   const greetings = name => `hello ${name}`;

   const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const {
  a,
  b,
  c,
  d
} = obj1

const isGreater = (a, b) => {
	return new Promise ((resolve, reject) => {
	 if(a > b) {
	  resolve(true)
	 } else {
	  reject(false)
	 }
	})
   }
   isGreater(1, 2)
	.then(result => {
	   console.log('greater')
	})
	.catch(result => {
	   console.log('smaller')
	})
	const myModule = { x: 1, y: () => { console.log('This is ES5') }}
	export default myModule;
