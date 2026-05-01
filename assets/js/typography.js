/* About-section easter eggs:
   - wrapKeywords: dashed-underline tooltips on a small dictionary of phrases.
   - wrapPunct: turns the trailing punctuation into a clickable emoji toggle.
   - name font switcher (click .name to cycle Inter / serif / mono / italic).
   - email copy with terminal-scramble animation.
   - lang-toggle stagger animation on title + tagline.
   The about section uses MutationObserver to re-wrap after each language
   swap (innerHTML is replaced in i18n.js). */

(function () {
  window.App = window.App || {};

  const KW_TIPS = {
    "graphic designer":      "2019–2021 · Packaging & VI for Tencent, Joyoung",
    "China Academy of Art":  "Hangzhou · BFA Visual Communication Design",
    "AI engineering":        "LLMs · agents · the next chapter",
    "Vue.js":                "5+ production apps · v2 → v3 migration",
    "Java/Spring Boot":      "Backend services · 3 years",
    "AWS":                   "EC2 · RDS · Lambda · CloudFront",
    "LLMs":                  "Claude, GPT, local models",
    "AI agents":             "Tool-using, multi-step reasoning",
    "包装设计":               "为腾讯、九阳设计的礼盒与VI",
    "AI工程":                 "LLM · 智能体 · 下一阶段",
    "中国美术学院":           "杭州 · 视觉传达设计学士",
    "AIエンジニアリング":     "LLM · エージェント · 次の挑戦",
    "グラフィックデザイナー":  "2019–2021 · テンセント、九陽のVI"
  };

  const PUNCT_POOL = ["🎯", "✨", "🌱", "☕", "🪄", "🦊", "🌙", "⚡"];

  function wrapKeywords() {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;
    const paragraphs = aboutSection.querySelectorAll("p");
    paragraphs.forEach(p => {
      if (p.dataset.kwWrapped) return;
      const keys = Object.keys(KW_TIPS).sort((a, b) => b.length - a.length);
      const escaped = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      const re = new RegExp("(" + escaped.join("|") + ")", "g");

      const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT, {
        acceptNode: (n) => {
          if (n.parentElement.closest("a")) return NodeFilter.FILTER_REJECT;
          if (n.parentElement.classList.contains("kw")) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      const targets = [];
      let node;
      while ((node = walker.nextNode())) targets.push(node);

      targets.forEach(textNode => {
        const text = textNode.textContent;
        if (!re.test(text)) return;
        re.lastIndex = 0;
        const frag = document.createDocumentFragment();
        let last = 0;
        let m;
        while ((m = re.exec(text)) !== null) {
          const before = text.slice(last, m.index);
          if (before) frag.appendChild(document.createTextNode(before));
          const span = document.createElement("span");
          span.className = "kw";
          span.textContent = m[0];
          const tip = document.createElement("span");
          tip.className = "kw-tip";
          tip.textContent = KW_TIPS[m[0]] || "";
          span.appendChild(tip);
          frag.appendChild(span);
          last = m.index + m[0].length;
        }
        const tail = text.slice(last);
        if (tail) frag.appendChild(document.createTextNode(tail));
        textNode.parentNode.replaceChild(frag, textNode);
      });
      p.dataset.kwWrapped = "1";
    });
  }

  function wrapPunct() {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;
    aboutSection.querySelectorAll("p").forEach(p => {
      if (p.dataset.punctWrapped) return;
      const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT, null);
      let last = null, n;
      while ((n = walker.nextNode())) {
        if (n.textContent.trim()) last = n;
      }
      if (!last) return;
      const m = last.textContent.match(/([.。!?！？])(\s*)$/);
      if (!m) return;
      const punct = m[1];
      last.textContent = last.textContent.slice(0, m.index);
      const span = document.createElement("span");
      span.className = "punct";
      span.dataset.orig = punct;
      span.textContent = punct;
      if (last.nextSibling) {
        last.parentNode.insertBefore(span, last.nextSibling);
      } else {
        last.parentNode.appendChild(span);
      }
      p.dataset.punctWrapped = "1";
    });

    document.querySelectorAll(".punct").forEach(span => {
      if (span.dataset.bound) return;
      span.dataset.bound = "1";
      let pickIdx = -1;
      span.addEventListener("click", (e) => {
        e.preventDefault();
        pickIdx = (pickIdx + 1) % (PUNCT_POOL.length + 1);
        if (pickIdx === PUNCT_POOL.length) {
          span.textContent = span.dataset.orig;
        } else {
          span.textContent = PUNCT_POOL[pickIdx];
        }
        span.classList.remove("popped");
        // force reflow then re-add the class so animation restarts
        void span.offsetWidth;
        span.classList.add("popped");
      });
    });
  }

  function watchAbout() {
    const aboutEl = document.getElementById("about");
    if (!aboutEl) return;
    let mutating = false;
    const obs = new MutationObserver(() => {
      if (mutating) return;
      mutating = true;
      // Reset wrap flags so re-render after language switch picks them up again
      document.querySelectorAll("#about p").forEach(p => {
        delete p.dataset.kwWrapped;
        delete p.dataset.punctWrapped;
      });
      wrapKeywords();
      wrapPunct();
      setTimeout(() => { mutating = false; }, 0);
    });
    obs.observe(aboutEl, { childList: true, subtree: true, characterData: true });
  }

  function initNameFontSwitch() {
    const FONTS = ["default", "serif", "mono", "italic"];
    const nameEl = document.querySelector(".name");
    if (!nameEl) return;
    let fontIdx = 0;
    nameEl.addEventListener("click", () => {
      fontIdx = (fontIdx + 1) % FONTS.length;
      const f = FONTS[fontIdx];
      if (f === "default") nameEl.removeAttribute("data-font");
      else nameEl.setAttribute("data-font", f);
    });
  }

  function initEmailCopy() {
    const emailEl = document.querySelector(".contact-email");
    if (!emailEl) return;
    const textNode = [...emailEl.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
    if (textNode) {
      const span = document.createElement("span");
      span.className = "email-text";
      span.textContent = textNode.textContent.trim();
      textNode.parentNode.replaceChild(span, textNode);
    }
    const hint = document.createElement("span");
    hint.className = "copy-hint";
    hint.textContent = "click to copy";
    emailEl.appendChild(hint);

    const emailText = emailEl.querySelector(".email-text");
    const original = emailText.textContent;
    const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789@.-_";

    emailEl.addEventListener("click", (e) => {
      e.preventDefault();
      if (!navigator.clipboard) { window.location.href = emailEl.href; return; }
      navigator.clipboard.writeText(original).then(() => {
        emailEl.classList.add("scrambling");
        let frame = 0;
        const totalFrames = 18;
        const interval = setInterval(() => {
          const progress = frame / totalFrames;
          const settled = Math.floor(progress * original.length);
          let out = "";
          for (let i = 0; i < original.length; i++) {
            if (i < settled || original[i] === "@" || original[i] === ".") {
              out += original[i];
            } else {
              out += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          emailText.textContent = out;
          frame++;
          if (frame > totalFrames) {
            clearInterval(interval);
            emailText.textContent = original;
            emailEl.classList.remove("scrambling");
            emailEl.classList.add("copied");
            hint.textContent = "✓ copied";
            setTimeout(() => {
              emailEl.classList.remove("copied");
              hint.textContent = "click to copy";
            }, 2000);
          }
        }, 30);
      });
    });
  }

  function staggerSection(el) {
    const text = el.textContent;
    const isCJK = /[一-鿿぀-ゟ゠-ヿ]/.test(text);
    const tokens = isCJK ? text.split("") : text.split(/(\s+)/);
    el.classList.add("stagger-fade");
    el.innerHTML = "";
    tokens.forEach((tok, i) => {
      if (!tok) return;
      const span = document.createElement("span");
      span.textContent = tok;
      span.style.animationDelay = (i * (isCJK ? 12 : 24)) + "ms";
      el.appendChild(span);
    });
    setTimeout(() => {
      el.classList.remove("stagger-fade");
      el.innerHTML = el.textContent;
    }, 800 + tokens.length * 24);
  }

  function initLangStagger() {
    document.querySelectorAll(".lang button").forEach(btn => {
      btn.addEventListener("click", () => {
        setTimeout(() => {
          ["title", "tagline"].forEach(cls => {
            const el = document.querySelector("." + cls);
            if (el && !el.querySelector("a")) staggerSection(el);
          });
        }, 30);
      });
    });
  }

  function initTypography() {
    wrapKeywords();
    wrapPunct();
    watchAbout();
    initNameFontSwitch();
    initEmailCopy();
    initLangStagger();
  }

  App.initTypography = initTypography;
})();
