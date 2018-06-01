(function(){
	'use strict'
	
	const menuBtn = $('.main-nav__btn');
	const menu = $('.main-nav__menu');
	
	$(menuBtn).click(function(e){
		$(menu).stop().slideToggle(400);
	});
	
})()