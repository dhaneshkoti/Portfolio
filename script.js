// Sticky Navigation
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.display = "none";  // hide hamburger
};

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.display = "block"; // show hamburger again
};

document.querySelectorAll(".menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
    menuBtn.style.display = "block";
  });
});
