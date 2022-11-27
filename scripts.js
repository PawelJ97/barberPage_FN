//---PARALLAX EFFECTS FOR THE BACKGROUND IMAGES---
// var homeBg = document.getElementById('home');
// window.addEventListener('scroll', function() {
//     homeBg.style.opacity = 1 - window.pageYOffset / 610 + ""
//     homeBg.style.top = +window.pageYOffset + "px"//do usunieca?
//     homeBg.style.top = +window.pageYOffset/2 + "px"
// })
// var aboutBg = document.getElementById('about-us');
// window.addEventListener('scroll', function() {
//     aboutBg.style.opacity = 3 - window.pageYOffset / 600 + ""
//     aboutBg.style.top = +window.pageYOffset + "px"
//     aboutBg.style.top = +window.pageYOffset/2 + "px"
// })
// var servicesBg = document.getElementById('services');
// window.addEventListener('scroll', function() {
//     servicesBg.style.opacity = 3 - window.pageYOffset / 1550 + ""
//     servicesBg.style.top = +window.pageYOffset + "px"
//     servicesBg.style.top = +window.pageYOffset/2 + "px"
// })


//---COUNTING SCRIPT USED IN ABOUT SECTION---
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
/* Creating a forech loop to set each retrieved 'valueDispley' to the initial value = 0
and the final value equal to that specified in 'data-value' (html), the initial value 
increments by one until it reaches the final value*/
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = startValue
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration);
})

//--- OWL-CAROUSEL SCRIPT USED IN TESTIMONIAL SECTION---
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items : 1,
            nav : false,
        },
        // breakpoint from 600 up
        600 : {
            items : 2,
            nav : false,
        },
        // breakpoint from 968 up
        968 : {
            items : 3,
            nav : false,
            loop : false
        }
    }
})