/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

    } else {

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });


  /* Close menu after clicking a link */

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      const icon = menuBtn.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    });

  });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });


  navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});


/* =========================================================
   MOUSE PARALLAX
========================================================= */

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual && window.innerWidth > 900) {

  heroVisual.addEventListener("mousemove", (event) => {

    const rect = heroVisual.getBoundingClientRect();

    const x =
      (event.clientX - rect.left - rect.width / 2) / 30;

    const y =
      (event.clientY - rect.top - rect.height / 2) / 30;

    heroVisual.style.transform =
      `translate(${x}px, ${y}px)`;

  });


  heroVisual.addEventListener("mouseleave", () => {

    heroVisual.style.transform = "translate(0, 0)";

  });

}


/* =========================================================
   BUTTON HOVER
========================================================= */

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transition = "0.3s ease";

  });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}