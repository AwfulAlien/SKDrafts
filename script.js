document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  function toggleMenu() {
    const isOpen = navMenu.classList.contains("active");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    navMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("scroll", function () {
    let parallax = document.querySelector(".home-third-screen");
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = -scrollPosition * 0.4 + "px";
  });
});
