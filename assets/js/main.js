$(document).ready(function(){
	$(".slider-full").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		nav:true,
		navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	});
	
	// Sticky Menu
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if(scroll){
			$('.header-top').addClass('sticky');
		}else{
			$('.header-top').removeClass('sticky');
		}
	});
	
	
	// Scroll Area
	$('.scroll-top').click(function(){
		$('html').animate({
			'scrollTop' : 0,
		},700);
		return false;
	});
	$(window).on('scroll',function(){
		var a = $(window).scrollTop();
		if(a>400){
			$('.scroll-top').slideDown(300);
		}else{
			$('.scroll-top').slideUp(200);
		}
	});
	
	//menu function
	$('.mobile-menu').click(function(){
		$('.menu ul').slideToggle();
	});
	
	
	
	
});