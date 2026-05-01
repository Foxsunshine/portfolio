/* Glue script for the resume page. Wires together the modules in the
   right order: language → gallery → reveal observer → scroll-spy → theme
   → spotlight → typography. The pre-paint theme snippet (in <head>) has
   already set data-theme by the time we run. */

(function () {
  function boot() {
    App.initLang(function onLangChange(lang) {
      // Re-render gallery when the language changes so cards pick up new strings
      App.renderGallery(lang);
    });
    App.initReveal();
    App.initScrollSpy();
    App.initThemeSwitch();
    App.initSpotlight();
    App.initTypography();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
