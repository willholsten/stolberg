/****************************************
  SLICK CAROUSEL
  *****************************************/

 $(document).ready(function(){
  $('.single-item').slick({
    arrows: true
    
  });
});


/****************************************
WOW INIT
*****************************************/

$(document).ready(function(){
  wow = new WOW({})
    wow.init();
});


/****************************************
NAVIGATION: HAMBURGER
*****************************************/

$(function(){
  $(".nav-button").click(function(){
    $("body").css("overflow","hidden");
    $(".nav-button").hide();
    $(".nav-close").show();
    $(".mobile-menu-container").show();
  });
});

$(function(){
  $(".nav-close, .mobile-menu-container").click(function(){
    $("body").css("overflow","visible");
    $(".nav-close").hide();
    $(".nav-button").show();
    $(".mobile-menu-container").hide();
  });
});

/****************************************
NEWSLETTER: SIGN UP
*****************************************/

$(function(){
  $(".sign-up").click(function(){
    $("body").css("overflow","hidden");
    $(".newsletter-container").fadeIn() ;
    $(".nav-bar").fadeOut();
    $(".social-contact").fadeOut();
  });
});

$(function(){
  $(".close, .button-submit").click(function(){
    $(".newsletter-container").fadeOut();
    $("body").css("overflow","visible");
    $(".nav-bar").fadeIn();
    $(".social-contact").fadeIn();
  });
});

/****************************************
BOOKING
*****************************************/

$(function(){
  $(".booking").click(function(){
  $("body").addClass("overflow-hidden");
  $(".booking-form-container").fadeIn();
  $(".nav-bar").fadeOut();
  $(".social-contact").fadeOut();
  });
});

$(function(){
  $(".close, .button-submit").click(function(){
  $(".booking-form-container").fadeOut();
  $("body").removeClass("overflow-hidden");
  $(".nav-bar").fadeIn();
  $(".social-contact").fadeIn();
  });
});


/****************************************
HOMEPAGE: SLIDER
*****************************************/

$(function() {
    $('.home-wrapper').vegas({
        slides: [
            { src: '../img/page-headers/dessert.jpg' },
            { src: '../img/page-headers/whats-on.jpg' },
            { src: '../img/page-headers/steak.jpg' },   
            { src: '../img/page-headers/the-stolberg-room.jpg' }
        ]
    });
});


/****************************************
SCROLLED ELEMENTS
*****************************************/
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar");
    var $logo = $("#logo_img");
    var $links = $(".nav-bar a");
    var $span = $(".nav-bar span");
    var $button = $(".nav-button");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $logo.toggleClass('scrolled', $(this).scrollTop() > $logo.height());
    $links.toggleClass('scrolled', $(this).scrollTop() > $links.height());
    $span.toggleClass('scrolled', $(this).scrollTop() > $span.height());
    $button.toggleClass('scrolled', $(this).scrollTop() > $button.height());
  });
});

/****************************************
SMOOTH SCROLLING WITH ANCHOR links
*****************************************/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /****************************************
  GOOGLE MAPS
  *****************************************/

  function initMap() {
  var stolberg = {
    lat: -37.7452883,
    lng: 145.0062684
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: stolberg,
    scrollwheel: false
  });
  var icon = {
    url: '../img/symbols/map-marker.png',
    scaledSize: new google.maps.Size(60, 80)
    // origin: new google.maps.Point(0,0), anchor: new google.maps.Point(50, 60)
  };
  var marker = new google.maps.Marker({
    position: stolberg,
    map: map,
    icon: icon
  });
}

