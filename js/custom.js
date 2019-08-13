/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely. 
    // Transition effect for navbar 
    $(window).scroll(function() { //function is called while you scrolls 
      // checks if window is scrolled more than 300px, adds/removes solid class
      if($(this).scrollTop() > 300) { 
          $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
      } else {
          $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
      }
    });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function(){
    $(document).click(function  (event) {
        var clickover =$(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened == true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    })
})

/*========== CLOSE MOBILE NAV ON CLICK ==========*/
$(document).ready(function()    {
    $("a").on('click', function(event)  {
        if (this.hash !== "")   {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate(    {
                scrollTop: $(hash).offset().top
            },  850, function() {
                window.location.hash = hash;
            });
        }
    });
});
/*========== DROP-DOWN MENU ==========*/
 
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
  });
   
  $(document).ready(function() {
          $(window).scroll(function() {
            if($(this).scrollTop() > 300) { 
                $('.dropdown-menu').addClass('solid');
            } else {
                $('.dropdown-menu').removeClass('solid');
            }
          });
  });
  
/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function() { 
    $(window).scroll(function() { 
        $(".arrow").css("opacity",1-$(window).scrollTop() / 250);
    });
});

/*======== CAROUSEL SLIDER FOR ALBUM ========== */

$(document).ready(function() {
    $("#album-slider").owlCarousel({
        items:3,
        autoplay:true,
        samrtSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive : {
            0 : {
                items: 1
            },
            576 : {
                items: 2
            },
            768 : {
                items: 3
            }
        }
    }
    );
});

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { //when document is ready
    $(window).scroll(function() { //when webpage is scrolled
      if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
        $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
      } else { //if not
        $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
      }
    });
  });