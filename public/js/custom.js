(function ($) {
  "use strict";

  /* ..............................................
	   Loader 
	   ................................................. */
  $(window).on("load", function () {
    $(".preloader").fadeOut();
    $("#preloader").delay(550).fadeOut("slow");
    $("body").delay(450).css({
      overflow: "visible",
    });
  });

  /* ..............................................
	   Fixed Menu
	   ................................................. */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".main-header").addClass("fixed-menu");
    } else {
      $(".main-header").removeClass("fixed-menu");
    }
  });


  /* ..............................................
	   Tooltip
	   ................................................. */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /* ..............................................
	   Scroll
	   ................................................. */

  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }
    });
    $("#back-to-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });

  // close dropdown menu when clicking on an element

  $(document).on('click', function(event) {
    var $clickedOn = $(event.target),
        $collapsableItems = $('.collapse'),
        isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
        isLink = ($clickedOn.closest('a').length == 1),
        isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
    if ((!isToggleButton && isLink) || isOutsideNavbar) {
        $collapsableItems.each(function() {
            $(this).collapse('hide');
        });
    }
});
  
// <!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/601cac5aa9a34e36b973ffe9/1eto02gfm';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// <!--End of Tawk.to Script-->

})(jQuery);
