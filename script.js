// Ham Menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Date
const dateEl = document.querySelector(".date");
const date = new Date();

dateEl.textContent = date.getFullYear();
