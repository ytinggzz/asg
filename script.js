const bar = document.getElementById("bar")
const navbar = document.getElementsByClassName("nav_bar")

if (bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}