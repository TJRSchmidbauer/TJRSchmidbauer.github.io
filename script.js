// ---------- Navigation: Schatten beim Scrollen ----------
const nav = document.getElementById("nav");
addEventListener("scroll", () => {
  nav.classList.toggle("nav--scrolled", scrollY > 20);
}, { passive: true });

// ---------- Mobile-Menü ----------
const burger = document.getElementById("burger");
const links = document.querySelector(".nav__links");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
});
links.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// ---------- Scroll-Reveal ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document
  .querySelectorAll(".section__title, .section__lead, .about, .timeline__item, .maker-card, .project-card")
  .forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 0.07}s`;
    io.observe(el);
  });

// ---------- Jahr im Footer ----------
document.getElementById("year").textContent = new Date().getFullYear();
