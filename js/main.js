const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

const nav = document.querySelector(".nav");

let showMenu = false;

const toggleMenu = function () {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
