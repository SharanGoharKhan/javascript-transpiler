var app = angular.module("App");

app.directive('carouselLightbox', [function() {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			  $('.testimonial-details-container, .clients-success-stories').slick({
  				 dots: true,
  				 infinite: false,
  				 speed: 800,
  				 slidesToShow: 1,
  				 slidesToScroll: 1,
  				 autoplay: true,
  				 autoplaySpeed: 2000
			});
		}
	};
}]);