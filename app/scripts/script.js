(function(){
	'use strict'
	
	const menuBtn = $('.main-nav__btn');
	const menu = $('.main-nav__menu');
	const prevPlan = $('.price__btn-prev');
	const nextPlan = $('.price__btn-next');
	const slideshowLength = $('.price-plan').length;
	const firstSlide = $('.price-plan').eq(0);
	const lastSlide = $('.price-plan').eq(slideshowLength - 1);
	const feedbackForm = $('.feedback__form');
	const feedbackName = $('.feedback__name');
	const feedbackEmail = $('.feedback__email');
	const feedbackMessage = $('.feedback__message');
	const modalForm = $('.modal-form');
	const modalLink = $('.modal-link');
	const subscribeForm = $('.subscribe-form__form');
	const subscribeEmail = $('.subscribe-form__input-email');
	const links404 = $('a[href="#"]');
	
	$(menuBtn).click(function(e){
		$(menu).stop().slideToggle(400);
	});
	
	$('#tabs').tabs({
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
	
	
	$(nextPlan).bind('click', function(e){
		let currentSlide = $('.price-plan:visible');
		let nextSlide = $($(currentSlide).next());
		$(currentSlide).hide();
		if($(currentSlide).index() == slideshowLength) {
			$(firstSlide).show();
		} else {
			$(nextSlide).show();
		}
	});	
	$(prevPlan).bind('click', function(e){
		let currentSlide = $('.price-plan:visible');
		let prevSlide = $($(currentSlide).prev());
		$(currentSlide).hide();
		if($(currentSlide).index() == 1) {
			$(lastSlide).show();
		} else {
			$(prevSlide).show();
		}
	});
	
	let nameValid = function () {
		let pattern = new RegExp(/^[a-zA-Zа-яА-Я]+$/);
		if (feedbackName.val() != '') {
			if (feedbackName.val().search(pattern) == 0) {
				$(feedbackName).css({'color': '#ffffff'});
				return true;
			}else{
				$(feedbackName).css({'color': 'red'});
				return false;
			}
		} else {
			return false;
		}
	};
	let emailValid = function () {
		let pattern = new RegExp(/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i);
		if (feedbackEmail.val() != '') {
			if (feedbackEmail.val().search(pattern) == 0) {
				$(feedbackEmail).css({'color': '#ffffff'});
				return true;
			} else {
				$(feedbackEmail).css({'color': 'red'});
				return false;
			}
		} else {
			return false;
		}
	};
	let messageValid = function () {
		if (feedbackMessage.val() != '') {
			return true;
		} else {
			return false;
		}
	};
	
	$(feedbackName).bind('blur', function(e){
		nameValid();
	});
	
	$(feedbackEmail).bind('blur', function(e){
		emailValid();
	});
	
	$(feedbackMessage).bind('blur', function(e){
		messageValid();
	});
	
	$(feedbackForm).submit(function () {
		event.preventDefault();
		nameValid ();
		emailValid ();
		messageValid ();
		if ( nameValid () && emailValid () && messageValid ()) {
			$(modalForm).show();
		} else {
			return false;
		}
		event.preventDefault();
		
	});
	
	$(modalForm).click(function () {
		$(this).hide();
	});
	
	$(modalLink).click(function () {
		$(this).hide();
	});

	$(document).keydown(function (e) {
		if (e.which === 27) {
			$(modalForm).hide();
			$(modalLink).hide();
		}
	});
	
	$(links404).bind('click', function(){
		event.preventDefault();
		$(modalLink).show();
	});
	
	let subscribeValid = function () {
		let pattern = new RegExp(/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i);
		if (subscribeEmail.val() != '') {
			if (subscribeEmail.val().search(pattern) == 0) {
				$(subscribeEmail).css({'color': '#ffffff'});
				return true;
			} else {
				$(subscribeEmail).css({'color': 'red'});
				return false;
			}
		} else {
			return false;
		}
	};
	
	$(subscribeEmail).bind('blur', function(e){
		subscribeValid();
	});
	
	$(subscribeForm).submit(function () {
		event.preventDefault();
		subscribeValid ();
		if ( subscribeValid ()) {
			$(modalForm).show();
		} else {
			return false;
		}
		event.preventDefault();
		
	});
	
})()