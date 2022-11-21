//---PARALLAX EFFECTS FOR THE BACKGROUND IMAGES---
var homeBg = document.getElementById('home');
window.addEventListener('scroll', function() {
    homeBg.style.opacity = 1 - window.pageYOffset / 850 + ""
    homeBg.style.top = +window.pageYOffset + "px"
    homeBg.style.top = +window.pageYOffset/2 + "px"
})
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