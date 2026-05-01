/* Theme switcher — light / auto / dark, three-state pill.
   Note: a tiny pre-paint snippet in <head> sets data-theme/data-theme-mode
   before this loads, so there's no flash. This module wires the buttons
   and reacts to OS scheme changes when in auto mode. */

(function () {
  window.App = window.App || {};

  function initThemeSwitch() {
    const root = document.documentElement;
    const buttons = document.querySelectorAll(".theme-switch button[data-theme-pick]");
    if (!buttons.length) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    function resolve(mode) {
      return mode === "auto" ? (mq.matches ? "dark" : "light") : mode;
    }

    function syncActive(mode) {
      buttons.forEach(b => b.classList.toggle("active", b.dataset.themePick === mode));
    }

    function applyTheme(mode, animate) {
      const resolved = resolve(mode);
      if (animate) {
        root.classList.add("theme-transitioning");
        window.setTimeout(() => root.classList.remove("theme-transitioning"), 500);
      }
      root.setAttribute("data-theme", resolved);
      root.setAttribute("data-theme-mode", mode);
      syncActive(mode);
    }

    syncActive(root.getAttribute("data-theme-mode") || "auto");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.dataset.themePick;
        localStorage.setItem("theme", mode);
        applyTheme(mode, true);
      });
    });

    // Live-react to system changes when in auto mode
    if (mq.addEventListener) {
      mq.addEventListener("change", () => {
        if ((root.getAttribute("data-theme-mode") || "auto") === "auto") {
          applyTheme("auto", true);
        }
      });
    }
  }

  App.initThemeSwitch = initThemeSwitch;
})();
