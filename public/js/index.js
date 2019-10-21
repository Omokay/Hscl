$(document).ready(function() {
    // Hide Collapse pane on link click
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    $('#team1').appendTo("body").modal('show');

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease-in', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });


    var smoothscroll = new SmoothScroll('a[href*="#"]', {
        speed: 1300,
        easing: 'easeOutQuad',
        clip: true,
        speedAsDuration: true
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            400: {
                items: 3,
                nav: false
            },
            600: {
                items: 4,
                nav: false
            },
            900: {
                items: 5,
                nav: true,
                loop: false
            },
            990: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });

    //Projects Show Tab Pane
    $('#myTab a').on('click', function(e) {
        e.preventDefault()
        $(this).tab('show')
    })

});

// Sticky Header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
        $(".fa fa-bar").add("lightup");
    } else {
        $(".top-nav").removeClass("light-header");
        $(".fa fa-bar").removeClass("lightup");
    }
});

//Clear input fields onclick submit
function submitForm() {
    $('form[name="contact-form"]').submit();
    $('input, textarea').val('');
}