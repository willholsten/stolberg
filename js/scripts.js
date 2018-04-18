
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
    $(".newsletter-container").fadeIn();
    $("body").css("overflow","hidden");
    $(".nav-bar").fadeOut();
    $(".social-contact").fadeOut();
  });
});

$(function(){
  $(".close").click(function(){
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
    $(".booking-container").fadeIn();
    $("#logo_img").css("visability","hidden");
    $("body").css("overflow","hidden");
    $(".nav-bar").fadeOut();
  });
});

$(function(){
  $(".close").click(function(){
    $(".booking-container").fadeOut();
    $("#logo_img").css("visibility","visible");
    $("body").css("overflow","visible");
    $(".nav-bar").fadeIn();
  });
});


/****************************************
HOMEPAGE: SLIDER
*****************************************/

$(function($) {
    $('.home-wrapper').vegas({
        slides: [
            { src: '../img/page-headers/whats-on.jpg' },
            { src: '../img/page-headers/contact.jpg' },
            { src: '../img/page-headers/burgers.jpg' },
            { src: '../img/page-headers/the-front-bar.jpg' },
            { src: '../img/page-headers/likor-lounge.jpg' },
            { src: '../img/page-headers/eat-drink.jpg' }

        ]
    });
});


/****************************************
SCROLLED ELEMENTS
*****************************************/
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#logo_img");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar a");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-button");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
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
    var royalderbyhotel = {
      lat: -37.7452883,
      lng: 145.0062684
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: royalderbyhotel,
      scrollwheel: false
    });
    var icon = {
      url: '../img/symbols/map-marker.png',
      scaledSize: new google.maps.Size(60, 80)
      // origin: new google.maps.Point(0,0), anchor: new google.maps.Point(50, 60)
    };
    var marker = new google.maps.Marker({
      position: royalderbyhotel,
      map: map,
      icon: icon
    });
  }
