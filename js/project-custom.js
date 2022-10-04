jQuery(document).ready(function() {
/*====================================== Sticky Header ===================================== */
		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop() > 200) {
				jQuery('.main-header').addClass('sticky');
			}
			else {
				jQuery('.main-header').removeClass('sticky');
			}
		});

/*====================================== END Sticky Header ===================================== */



/*====================================== Nav Up and Down ===================================== */

//  scroll-top header reagain size
    jQuery(document).ready(function($) {
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.main-header').outerHeight();
      $(window).scroll(function(event){
      didScroll = true;
      });

      setInterval(function() {
      if (didScroll) {
      hasScrolled();
      didScroll = false;
      }
      }, 50);


      function hasScrolled() {

      var st = $(this).scrollTop();
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
      return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('.main-header').removeClass('nav-down').addClass('nav-up');
      } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
      $('.main-header').removeClass('nav-up').addClass('nav-down');
      }
      }
      lastScrollTop = st;
  	}
	});

});
   
   
		   