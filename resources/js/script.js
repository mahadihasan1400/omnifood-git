$(document).ready(function () {


    /*
    
    '.js--section-features' = indicates the part that we want to do something with it.
    
    direction = this argument means that while we are scrolling down or scrolling up.
    
    offset: '60 px' = defines that some thing should be happened while scrolling a particular section at 60px. the value can be changed 
    
    */

    /* Sticky nav */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');

        }
    }, {
        offset: '60px'
    });

    /*Scroll on buttons*/


    $('.js--scroll-to-plans').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);



    });

    $('.js--scroll-to-more-details').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);


    });

    /* Navigation Scroll*/

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });




    /*Animation on scroll*/


    $('.js--wp-1').waypoint(function (direction) {

        $('.js--wp-1').addClass('animated fadeIn');



    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {


        $('.js--wp-2').addClass('animated fadeInLeft');


    }, {

        offset: '50%'

    });

    $('.js--wp-3').waypoint(function (direction) {

        $('.js--wp-3').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function () {

        $('.js--wp-4').addClass('animated pulse')

    }, {
        offset: '50%'
    });


    /*Mobile nav*/

    $('.js--nav-icon').click(function () {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        /*.slideToggle(time)
        
        1. Display or hide the matched elements with a sliding motion.
        2. time = defines how much time take to open and close the box
        */
        
        nav.slideToggle(200)
        
        /*
        .hasClass('class name')
        
        it detects whether an elements got the particular class that has given in the argument
        
        */

        if (icon.hasClass('ion-navicon-round')) {

            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');

        } else {

            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');

        }






    });




});
