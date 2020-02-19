




'use strict';
 // scroll top button
// $(window).scroll(function(){
// 	if ($(this).scrollTop() > 200){
// 		$('#myBtn').fadeIn();
// 	}else{
//      $('#myBtn').fadeOut();
// 	}
// });

// $(document).on('click', $('#myBtn'), function(){
// 	$('body, html').animate({
// 		scrollTop: 0
// 	}, 1500);
// 	return false;
// })

// $(document).on('click', $('.anchor'), function(e){
// 	e.preventDefault();
// 	var hrefLink = $(this).attr('href');
// 	var scroll = $(hrefLink).offset().top;
// 	$('body, html').animate({
// 		scrollTop: 0
// 	}, 'slow');
// });

$(document).ready(function(){
  $('.slider-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
});