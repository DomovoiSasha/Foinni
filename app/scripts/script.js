(function(){
	'use strict'
	
	const menuBtn = $('.main-nav__btn');
	const menu = $('.main-nav__menu');
	
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
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	
})()