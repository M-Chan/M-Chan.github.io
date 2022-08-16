
const menuIcon = document.getElementById("menuIcon");
const closeButton = document.getElementById("close");

const menu = document.getElementById("menu");

menuIcon.addEventListener('click', toggleMenu)
closeButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    console.log("something")
    menu.classList.toggle("is--hidden")
}