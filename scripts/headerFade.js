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

function changeFontFunc() {
    const root = document.querySelector(":root");
    rootStyle = getComputedStyle(root);
    if (rootStyle.getPropertyValue("--main-font") == " myHandwriting"){
        root.style.setProperty("--main-font", " Verdana, sans-serif");
    } else {
        root.style.setProperty("--main-font", " myHandwriting");
    }
}


window.onload = () => {
    const burger = document.querySelector("#burgerLogo");
    const changeFont = document.querySelector("#changeFont");
    const changeFontSide = document.querySelector("#changeFontSide");
    changeFont.addEventListener("click", changeFontFunc);
    changeFontSide.addEventListener("click", changeFontFunc);
    burger.addEventListener("click", showSideHeader);
}
