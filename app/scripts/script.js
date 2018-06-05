(function(){
	'use strict'
	
	const menuBtn = $('.main-nav__btn');
	const menu = $('.main-nav__menu');
	const prevPlan = $('.price__btn-prev');
	const nextPlan = $('.price__btn-next');
	const slideshowLength = $('.price-plan').length;
	const firstSlide = $('.price-plan').eq(0);
	const lastSlide = $('.price-plan').eq(slideshowLength - 1);
	
	$(menuBtn).click(function(e){
		$(menu).stop().slideToggle(400);
	});
	
	$( "#tabs" ).tabs({
		event: "mouseover"
	});
	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	
	
	$(nextPlan).bind("click", function(e){
		let currentSlide = $('.price-plan:visible');
		let nextSlide = $($(currentSlide).next());
		$(currentSlide).hide();
		if($(currentSlide).index() == slideshowLength) {
			$(firstSlide).show();
		} else {
			$(nextSlide).show();
		}
	});
	
	$(prevPlan).bind("click", function(e){
		let currentSlide = $('.price-plan:visible');
		let prevSlide = $($(currentSlide).prev());
		$(currentSlide).hide();
		if($(currentSlide).index() == 1) {
			$(lastSlide).show();
		} else {
			$(prevSlide).show();
		}
	});
	
	
})()