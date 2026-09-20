/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

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


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        revealObserver.unobserve(entry.target);

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


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navItems.forEach(link => {
          link.classList.remove("active");
        });

        const activeLink =
          document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );

        if (activeLink) {
          activeLink.classList.add("active");
        }

      }

    });

  },
  {
    threshold: 0.35
  }
);

sections.forEach(section => {
  sectionObserver.observe(section);
});


/* =========================
   MOUSE PARALLAX
========================= */

const profileCard = document.querySelector(".profile-card");

if (profileCard && window.innerWidth > 900) {

  document.addEventListener("mousemove", (event) => {

    const x =
      (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 10;

    profileCard.style.transform =
      `rotate(${3 + x * 0.15}deg)
       translate(${x}px, ${y}px)`;

  });

}


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.querySelector(".footer-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================
   SMOOTH BUTTON FEEDBACK
========================= */

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("mouseenter", () => {
    button.style.transition = "0.25s ease";
  });

});