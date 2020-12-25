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

  $(document).ready(function( close ){
    var uls = close('#menu ul');
    uls.hide();
  
    close('#menu > li').click(function( e ){
      e.stopPropagation();
      uls.hide();
      close( this ).find('ul').show();
    });
    close('#menu ul').click(function( e ){
      e.stopPropagation();
    });
    close('body').click(function(){
      uls.hide();
    });
  });
  

})(jQuery);
