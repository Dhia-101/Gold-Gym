$(document).ready(function() {

    // sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    // scroll on buttons
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    // Navigation scroll

    $(function () {
       $("a[href*=\\#]:not([href=\\#])").click(function () {
            if(location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if( target.length ) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
       });
    });

    // animation on scroll
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '60%'
    })

    // animation on scroll
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '60%'
    })

    // animation on scroll
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '60%'
    })

    // animation on scroll
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '60%'
    });

    // mobile-nav
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon').children();
        var iconType = icon.attr('name');
        nav.slideToggle(200);
        if(iconType == 'menu-outline')
            icon.attr('name', 'close-outline');
        // change slidetoggle with your own classe
        else
            icon.attr('name','menu-outline');


        console.log(icon);


    })

    addEventListener("resize", function () {
            var nav = $('.js--main-nav');
        if(innerWidth >= 767) {
            nav.show();
        }else{
            nav.hide();
        }
    })

});