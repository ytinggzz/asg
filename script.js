const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav_bar");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
})