
/****************************************
NAVIGATION: HAMBURGER
*****************************************/

$(document).ready(function(){
  $(".nav-button").click(function(){
    $(".mobile-menu").toggleClass('mobile-menu-hide');
  });
});

/****************************************
NEWSLETTER: SIGN UP
*****************************************/

$(document).ready(function(){
  $(".sign-up").click(function(){
    $(".newsletter").fadeIn();
    $(".nav-bar").fadeOut();
  });
});

$(document).ready(function(){
  $(".sign-up-close").click(function(){
    $(".newsletter").fadeOut();
    $(".nav-bar").fadeIn();
  });
});


/****************************************
HOMEPAGE: SLIDER
*****************************************/

jQuery(function($) {
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
NAVIGATION: FADE IN WHEN SCROLL
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
