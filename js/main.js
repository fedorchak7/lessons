'use strict';
// scroll top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#myBtn').fadeIn();
    } else {
        $('#myBtn').fadeOut();
    }
});

// $('#myBtn').click(function() {
//     $('body, html').animate({
//         scrollTop: 0
//     }, 1500);
//     return false;
// })


$("#test").on('submit', function (event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
});


$(document).on('click', '#myBtn', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});

// $(document).on('click', $('.anchor'), function(e){
// 	e.preventDefault();
// 	var hrefLink = $(this).attr('href');
// 	var scroll = $(hrefLink).offset().top;
// 	$('body, html').animate({
// 		scrollTop: 0
// 	}, 'slow');
// });

$(document).ready(function () {
    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });
});