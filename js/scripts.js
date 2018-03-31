
/****************************************
NAVIGATION: HAMBURGER
*****************************************/

$(document).ready(function(){
  $(".nav-button").click(function(){
    $(".nav-menu-wrapper").toggleClass('menu-hide');
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
    var $nav = $(".nav-bar span");
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

jQuery(document).ready(function(){
jQuery('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
|| location.hostname == this.hostname) {
var target = jQuery(this.hash);
target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
if (target.length) {
jQuery('html, body').animate({
scrollTop: target.offset().top }, 1000);
return false;
}
}
});
});
jQuery(window).load(function(){
function goToByScroll(id){
jQuery("html, body").animate({scrollTop: jQuery("#"+id).offset().top }, 1000);
}
if(window.location.hash != '') {
goToByScroll(window.location.hash.substr(1));
}
});
