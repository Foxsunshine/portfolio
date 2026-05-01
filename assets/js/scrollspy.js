/* Reveal-on-scroll observer + active nav indicator (scroll-spy). */

(function () {
  window.App = window.App || {};

  function initReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
  }

  function initScrollSpy() {
    const sections = ["about", "experience", "projects", "design", "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean);
    const navLinks = document.querySelectorAll(".nav a");
    if (!sections.length || !navLinks.length) return;

    function updateActiveNav() {
      const y = window.scrollY + window.innerHeight * 0.35;
      let active = sections[0].id;
      sections.forEach(s => { if (s.offsetTop <= y) active = s.id; });
      navLinks.forEach(a => a.classList.toggle("active", a.dataset.section === active));
    }

    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();
  }

  App.initReveal = initReveal;
  App.initScrollSpy = initScrollSpy;
})();
