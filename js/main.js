// Portfolio 2026 — base script (skeleton)
// TODO: add real interactivity as needed (mobile nav, filters, animations, etc.)

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav ul");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
  }
});
