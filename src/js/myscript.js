//navbar
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });
  });

//carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        lazyLoad:false
    });
  });