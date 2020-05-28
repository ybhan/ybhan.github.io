(function($) {
  "use strict";  // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Highlight current navbar item on scroll
  $('body').scrollspy({
    target: '#sideNav',
    offset: 50
  });

  function isTouchDevice() {
    return true === ("ontouchstart" in window ||
      window.DocumentTouch && document instanceof DocumentTouch);
  }

  $(function() {
    if (!isTouchDevice()) {
      $('[data-toggle="tooltip"]').tooltip();
    }
  });

})(jQuery);  // End of use strict
