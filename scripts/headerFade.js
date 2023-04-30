// Global Variables
var transitionTimer;

// header scrolling effect
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('hideHeader');
        disableSideFade();
        transitionTimer = setTimeout(disableSideDisplay, 600)
    }
    else{
        $("header").removeClass("hideHeader");
    }    
})

function showSideHeader() {
    const sideHeader = document.querySelector(".sideHeader");
        clearTimeout(transitionTimer);
        if ((sideHeader.classList.contains("showSideHeader")) || (sideHeader.classList.contains("sideHeaderTransition"))){
            disableSideFade();
            transitionTime = setTimeout(disableSideDisplay,600);
        } else {
            enableSideDisplay();
            transitionTimer = setTimeout(enableSideFade);
        }  
}

function enableSideFade() {
    const sideHeader = document.querySelector(".sideHeader");
    sideHeader.classList.add("sideHeaderTransition");
}
function enableSideDisplay() {
    const sideHeader = document.querySelector(".sideHeader");
    sideHeader.classList.add("showSideHeader");
}
function disableSideFade() {
    const sideHeader = document.querySelector(".sideHeader");
    sideHeader.classList.remove("sideHeaderTransition");
}
function disableSideDisplay() {
    const sideHeader = document.querySelector(".sideHeader");
    sideHeader.classList.remove("showSideHeader");
}




window.onload = () => {
    const burger = document.querySelector("#burgerLogo");
    burger.addEventListener("click", showSideHeader);
}
