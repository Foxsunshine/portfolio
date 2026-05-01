/* Index-page i18n. Reads I18N (from assets/data/i18n.js), applies it to
   [data-i18n] (textContent) and [data-i18n-html] (innerHTML) nodes,
   and lets the gallery re-render in the new language via a hook. */

(function () {
  window.App = window.App || {};

  let currentLang = "en";

  function applyLang(lang, onAfter) {
    currentLang = lang;
    const dict = I18N[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll(".lang button").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    if (typeof onAfter === "function") onAfter(lang);
  }

  function initLang(onAfter) {
    document.querySelectorAll(".lang button").forEach(btn => {
      btn.addEventListener("click", () => {
        applyLang(btn.dataset.lang, onAfter);
        localStorage.setItem("lang", btn.dataset.lang);
      });
    });

    const urlLang = new URLSearchParams(location.search).get("lang");
    const savedLang = localStorage.getItem("lang");
    applyLang(urlLang || savedLang || "en", onAfter);
  }

  App.initLang = initLang;
  App.getLang = () => currentLang;
})();
