import './style.scss'
import 'bootstrap/dist/js/bootstrap.bundle'
import WOW from 'wow.js/dist/wow'

let carouselControPre = document.getElementById("2carouselControPre");
let carouselControNext = document.getElementById("2carouselControNext");


carouselControPre.addEventListener('click',function () {
    document.getElementById("HiddenBtnPre").click();
});
carouselControNext.addEventListener('click',function () {
    document.getElementById("HiddenBtnNext").click();
});

var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();