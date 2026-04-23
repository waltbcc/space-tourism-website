console.log ("started js");


let menuHamburger = document.getElementById("btn-icon-hamburger");

let mobileMenu = document.getElementById("mobile-menu-id");
mobileMenu.classList.add("sr-only");

let iconClose = document.getElementById("btn-icon-close");
iconClose.classList.add("sr-only");

function activeMobileMenu() {
    menuHamburger.classList.add("sr-only");
    mobileMenu.classList.remove("sr-only");
    iconClose.classList.remove("sr-only");
}

        
function desactiveMobileMenu() {
    menuHamburger.classList.remove("sr-only");
    mobileMenu.classList.add("sr-only");
    iconClose.classList.add("sr-only");
}
