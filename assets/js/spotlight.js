/* Cursor spotlight + 4-mote comet trail. Cards "absorb" the spotlight on
   hover (event-delegated so the dynamically rendered gallery works too).
   Trail color tracks the live --glow-* CSS variables, so light/dark
   themes get different hues. */

(function () {
  window.App = window.App || {};

  const TRAIL_CONFIG = [
    { size: 28, alpha: 0.10,  lag: 0.32 },
    { size: 22, alpha: 0.075, lag: 0.22 },
    { size: 16, alpha: 0.05,  lag: 0.14 },
    { size: 11, alpha: 0.035, lag: 0.09 }
  ];

  function initSpotlight() {
    const spot = document.getElementById("spotlight");
    if (!spot) return;
    let spotOn = false;
    let mx = -9999, my = -9999;

    function glowRgb() {
      const cs = getComputedStyle(document.documentElement);
      return [
        cs.getPropertyValue("--glow-r").trim() || "255",
        cs.getPropertyValue("--glow-g").trim() || "170",
        cs.getPropertyValue("--glow-b").trim() || "80"
      ];
    }

    const trails = TRAIL_CONFIG.map(cfg => {
      const el = document.createElement("div");
      el.className = "spot-trail";
      el.style.width = cfg.size + "px";
      el.style.height = cfg.size + "px";
      el.dataset.alpha = cfg.alpha;
      document.body.appendChild(el);
      return { el, x: -9999, y: -9999, lag: cfg.lag };
    });

    function paintTrails() {
      const [r, g, b] = glowRgb();
      trails.forEach(t => {
        const a = t.el.dataset.alpha;
        t.el.style.background =
          `radial-gradient(circle, rgba(${r}, ${g}, ${b}, ${a}) 0%, rgba(${r}, ${g}, ${b}, 0) 70%)`;
      });
    }
    paintTrails();
    window.addEventListener("themechange", paintTrails);

    let trailOn = false;
    function setTrailVisible(v) {
      if (v === trailOn) return;
      trailOn = v;
      trails.forEach(t => t.el.classList.toggle("on", v));
      // Snap to cursor on first show so motes don't fly in from origin
      if (v) trails.forEach(t => { t.x = mx; t.y = my; });
    }

    (function tick() {
      trails.forEach(t => {
        t.x += (mx - t.x) * t.lag;
        t.y += (my - t.y) * t.lag;
        t.el.style.left = t.x + "px";
        t.el.style.top  = t.y + "px";
      });
      requestAnimationFrame(tick);
    })();

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      spot.style.left = mx + "px";
      spot.style.top  = my + "px";
      if (!spotOn) {
        spot.classList.add("on");
        spotOn = true;
        setTrailVisible(true);
      }
    });
    document.addEventListener("mouseleave", () => {
      spot.classList.remove("on"); spotOn = false;
      setTrailVisible(false);
    });

    /* Cards absorb the spotlight on hover. Event-delegated to handle
       gallery cards rendered after init. */
    document.body.addEventListener("mouseover", (e) => {
      const card = e.target.closest(".g-card, .proj-card");
      if (!card || card._lit) return;
      card._lit = true;
      spot.classList.add("absorbed");
      card.classList.add("lit");
    });
    document.body.addEventListener("mouseout", (e) => {
      const card = e.target.closest(".g-card, .proj-card");
      if (!card) return;
      if (e.relatedTarget && card.contains(e.relatedTarget)) return;
      card._lit = false;
      spot.classList.remove("absorbed");
      card.classList.remove("lit");
    });
  }

  App.initSpotlight = initSpotlight;
})();
