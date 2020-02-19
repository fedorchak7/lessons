'use strict';
// scroll top button
$(window).scroll(function() {
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

$("#test").on('submit', function(event) {
    event.preventDefault();
    var error = false;

    var $this = $(this);

    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;

    var inputRequired = $this.find('.input-required'),
        inputEmail = $this.find('.input-email'),
        inputPhone = $this.find('.input-phone');

    $('div.input-box').removeClass('error-box');

    if (inputRequired.length > 0) {
        inputRequired.each(function() {
            if ($(this).find('input').val().trim() === '') {
                $(this).closest('.input-box').addClass('error-box');
                error = true;
            }
        })
    }

    if (inputPhone.length > 0) {
        if (inputPhone.find('input').val().trim().length < 13) {
            inputPhone.addClass('error-box');
            error = true;
        }
    }

    if (inputEmail.length > 0) {
        if (!pattern.test(inputEmail.find('input').val())) {
            inputEmail.addClass('error-box');
            error = true;
            console.log('ddd');
        }
    }

    if (!error) {
        console.log('submit done');
    }
});


$(document).on('click', '#myBtn', function() {
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

$(document).ready(function() {
    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });
});