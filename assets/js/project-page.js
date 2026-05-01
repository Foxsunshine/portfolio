/* Project detail page controller — reads ?id=&lang= from the URL,
   classifies each detail image by aspect ratio, pairs adjacent portraits
   into side-by-side blocks, and renders the meta + image stack. */

(function () {
  const params = new URLSearchParams(location.search);
  const projectId = parseInt(params.get("id") || "1", 10);
  let currentLang = params.get("lang") || localStorage.getItem("lang") || "en";
  if (!I18N_PROJECT[currentLang]) currentLang = "en";

  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  const projIndex = PROJECTS.indexOf(project);
  const prevProject = projIndex > 0 ? PROJECTS[projIndex - 1] : null;
  const nextProject = projIndex < PROJECTS.length - 1 ? PROJECTS[projIndex + 1] : null;

  /* Aspect-ratio thresholds (w/h):
     > 1.55  wide-landscape  → full width
     > 1.20  landscape       → wide (92%)
     > 0.95  near-square     → medium (78%)
     > 0.70  portrait        → narrow (62%) — try to pair adjacent ones
     ≤ 0.70  very tall       → narrow (62%) — single column
     Then a pairing pass collapses two consecutive verticals into a side-by-side. */
  function buildLayout(details) {
    const classified = details.map(d => {
      const ratio = d.w / d.h;
      let kind;
      if (ratio > 1.55) kind = "wide-landscape";
      else if (ratio > 1.20) kind = "landscape";
      else if (ratio > 0.95) kind = "square";
      else if (ratio > 0.70) kind = "portrait";
      else kind = "tall";
      return { ...d, ratio, kind };
    });

    const blocks = [];
    let i = 0;
    while (i < classified.length) {
      const cur = classified[i];
      const nxt = classified[i + 1];
      const isVerticalish = (x) => x && (x.kind === "portrait" || x.kind === "tall");
      if (isVerticalish(cur) && isVerticalish(nxt)) {
        blocks.push({ type: "pair", items: [cur, nxt] });
        i += 2;
      } else {
        blocks.push({ type: "single", item: cur });
        i += 1;
      }
    }
    return blocks;
  }

  function widthClass(kind) {
    return ({
      "wide-landscape": "img-full",
      "landscape":      "img-wide",
      "square":         "img-medium",
      "portrait":       "img-narrow",
      "tall":           "img-narrow"
    })[kind] || "img-medium";
  }

  function renderStack() {
    const stack = document.getElementById("stack");
    stack.innerHTML = "";
    const blocks = buildLayout(project.details);
    let n = 1;
    blocks.forEach((b) => {
      const block = document.createElement("div");
      block.dataset.reveal = "";

      if (b.type === "pair") {
        block.className = "img-pair img-medium";
        const pad = (i) => String(i).padStart(2, "0");
        block.innerHTML = `
          <div class="img-block">
            <img src="${b.items[0].src}" alt="" loading="lazy" />
            <div class="img-caption"><span class="num">${pad(n)}</span><span class="line"></span></div>
          </div>
          <div class="img-block">
            <img src="${b.items[1].src}" alt="" loading="lazy" />
            <div class="img-caption"><span class="num">${pad(n + 1)}</span><span class="line"></span></div>
          </div>
        `;
        n += 2;
      } else {
        const item = b.item;
        block.className = `img-block ${widthClass(item.kind)}`;
        const num = String(n).padStart(2, "0");
        block.innerHTML = `
          <img src="${item.src}" alt="" loading="lazy" />
          <div class="img-caption"><span class="num">${num}</span><span class="line"></span></div>
        `;
        n += 1;
      }

      stack.appendChild(block);
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
  }

  function renderMeta() {
    const l = currentLang;
    document.getElementById("hero-eyebrow").textContent = `${project.cat[l]} · ${project.year}`;
    document.getElementById("hero-title").textContent = project.title[l];
    document.getElementById("hero-desc").textContent = project.desc[l];
    document.getElementById("meta-year").textContent = project.year;
    document.getElementById("meta-role").textContent = project.role[l];
    document.getElementById("meta-client").textContent = project.client[l];
    document.getElementById("meta-cat").textContent = project.cat[l];
    document.getElementById("crumb-num").textContent = String(project.id).padStart(2, "0");
    document.title = `${project.title[l]} — Cheng Jiang`;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (I18N_PROJECT[l][k]) el.textContent = I18N_PROJECT[l][k];
    });

    const prevLink = document.getElementById("prev-link");
    const nextLink = document.getElementById("next-link");
    if (prevProject) {
      prevLink.href = `project.html?id=${prevProject.id}&lang=${l}`;
      document.getElementById("prev-name").textContent = prevProject.title[l];
      prevLink.classList.remove("disabled");
    } else {
      prevLink.classList.add("disabled");
      document.getElementById("prev-name").textContent = "—";
    }
    if (nextProject) {
      nextLink.href = `project.html?id=${nextProject.id}&lang=${l}`;
      document.getElementById("next-name").textContent = nextProject.title[l];
      nextLink.classList.remove("disabled");
    } else {
      nextLink.classList.add("disabled");
      document.getElementById("next-name").textContent = "—";
    }

    document.getElementById("back-link").href = `index.html?lang=${l}#design`;

    document.querySelectorAll(".lang-toggle button").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === l);
    });

    document.documentElement.setAttribute("lang", l);
  }

  function init() {
    document.querySelectorAll(".lang-toggle button").forEach(b => {
      b.addEventListener("click", () => {
        currentLang = b.dataset.lang;
        localStorage.setItem("lang", currentLang);
        renderMeta();
      });
    });

    renderMeta();
    renderStack();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
