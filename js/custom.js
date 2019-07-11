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