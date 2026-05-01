/* Renders the design gallery from PROJECTS (assets/data/projects.js).
   Each card navigates to project.html?id=<id>&lang=<lang>. */

(function () {
  window.App = window.App || {};

  function renderGallery(lang) {
    const galleryEl = document.getElementById("gallery");
    if (!galleryEl) return;
    galleryEl.innerHTML = "";
    PROJECTS.forEach(p => {
      const btn = document.createElement("button");
      btn.className = "g-card";
      btn.dataset.id = p.id;
      const idx = String(p.id).padStart(2, "0");
      btn.innerHTML = `
        <div class="g-frame">
          <div class="g-index">${idx} / ${p.year}</div>
          <div class="g-art"><img src="${p.cover}" alt="${p.title[lang]}" loading="lazy" /></div>
          <div class="g-overlay"></div>
          <div class="open-icon-hover">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
          </div>
        </div>
        <div class="g-meta">
          <div>
            <div class="g-title">${p.title[lang]}</div>
            <div class="g-cat">${p.cat[lang]}</div>
          </div>
          <div class="g-year">${p.year}</div>
        </div>
      `;
      btn.addEventListener("click", () => {
        location.href = `project.html?id=${p.id}&lang=${App.getLang()}`;
      });
      galleryEl.appendChild(btn);
    });
  }

  App.renderGallery = renderGallery;
})();
