'use strict';
//initialization AOS
AOS.init();
// scroll top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {

        $('#header').addClass('header-scroll');
        $('#myBtn').fadeIn();
    } else {
        $('#myBtn').fadeOut();
        $('#header').removeClass('header-scroll');

    }
});

//countdown
var countDownDate = new Date("Feb 27, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d : " + hours + "h : " +
        minutes + "m : " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



//maskphone
function addPrefFixToPhone() {
    var $this = $(this),
        value = $this.val();
    if (value.length < 4 || !/^\+380/.test(value)) {
        $this.val('+380');
    }
    if (value.slice(0, 4)) {
        $this.val('+380' + (Number(value.slice(4)) || ''))
    }


    if (value.length > 13) {
        $this.val($this.val().slice(0, 13))
    }
}
$(document).on('keyup focus', '.input-phone input', addPrefFixToPhone);
//validate
$("form").on('submit', function(event) {
    event.preventDefault();
    var error = false;

    var $this = $(this);

    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;

    var inputRequired = $this.find('.input-required'),
        inputMsg = $this.find('.input-msg'),
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

    if (inputMsg.length > 0) {
        if (inputMsg.find('textarea').val().trim().length < 4) {
            inputMsg.addClass('error-box');
            error = true;
            console.log('ddd');
        } else {
            inputMsg.removeClass('error-box');
        }
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

        }
    }

    if (!error) {
        console.log('submit done');
    }
});



$(document).on('click', '.ac-heading', function() {
    if ($(this).next().hasClass('non-active') === true) {
        $(this).next().removeClass('non-active').slideDown();
    } else {
        $(this).next().addClass('non-active').slideUp("slow");
    }
    return false;
});

$(document).on('click', '#myBtn', function() {
    $('body, html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});

$(document).on('click', '.anchor', function(e) {
    e.preventDefault();
    var hrefLink = $(this).attr('href');
    var scroll = $(hrefLink).offset().top;
    $('body, html').animate({
        scrollTop: 0
    }, 'slow');
});

$(document).ready(function() {
    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });
});


$('[data-fancybox="gallery"]').fancybox({
    // Options will go here



});