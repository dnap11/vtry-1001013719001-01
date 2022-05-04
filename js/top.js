$(document).ready(function () {
	"use strict";
    $('.slide_list').slick({
    	dots: false,
    	arrows: false,
		slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
  		cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.slide_auto').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        loop:true,
        spped: 3000,
        cssEase: 'linear'
      });
});


$(window).load(function(){
    AOS.init({
        easing: 'ease',
        once: true,
        duration: 1500,
        disable: 'mobile',
    });
});




