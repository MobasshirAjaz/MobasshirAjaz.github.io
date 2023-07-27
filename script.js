const navToggle = document.getElementsByClassName("fa-bars");
const navMenu = document.getElementsByClassName("navmenu");

navToggle[0].addEventListener("click", function () {
    navMenu[0].classList.toggle("show");
});