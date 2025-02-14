document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay); // Add overlay dynamically to the body

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
});

// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector(".hamburger");
//   const navMenu = document.querySelector("nav ul");
//   const overlay = document.querySelector(".menu-overlay");
//   const body = document.body;

//   function openMenu() {
//     navMenu.classList.add("active");
//     overlay.classList.add("active");
//     body.classList.add("menu-open");
//   }

//   function closeMenu() {
//     navMenu.classList.remove("active");
//     overlay.classList.remove("active");
//     body.classList.remove("menu-open");
//   }

//   // Toggle menu when clicking the hamburger
//   hamburger.addEventListener("click", function (event) {
//     event.stopPropagation();
//     if (navMenu.classList.contains("active")) {
//       closeMenu();
//     } else {
//       openMenu();
//     }
//   });

//   // Close menu when clicking outside
//   overlay.addEventListener("click", closeMenu);

//   document.addEventListener("click", function (event) {
//     if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
//       closeMenu();
//     }
//   });
// });
