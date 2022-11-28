const iconHamburger = document.querySelector(".icon-hamburger");
const navBarMobile = document.querySelector(".nav-bar-mobile");
const iconClose = document.querySelector(".icon-close");
const mobleNavPageLink = document.querySelectorAll(".moble-nav__link");

iconHamburger.addEventListener("click", function () {
  navBarMobile.classList.add("nav-mobile-show");
});

iconClose.addEventListener("click", function () {
  navBarMobile.classList.remove("nav-mobile-show");
});
