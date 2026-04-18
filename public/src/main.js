// ============================================================
// Crontinel — main.js
// All the interactivity: heartbeat feed, scroll reveal, nav,
// pricing toggle, tweaks panel, copy buttons, cursor reactivity.
// ============================================================
(() => {
  'use strict';

  // ---------- Tweaks & token reflection ----------
  const DEFAULTS = window.__TWEAKS || {};
  const state = Object.assign({}, DEFAULTS);

  function applyState() {
    const body = document.body;
    body.dataset.accent = state.accent || 'green';
    body.dataset.density = state.density || 'airy';
    body.dataset.theme = state.theme || 'dark';
    body.dataset.hero = state.heroVariant || 'heartbeat';

    const h = document.getElementById('headline');
    if (h && state.headline) {
      // Highlight "lying" or the last distinctive word in accent if present,
      // otherwise fallback: whole headline plain.
      const raw = String(state.headline);
      const parts = raw.split('\n');
      const withAccent = parts.map(line => {
        return line.replace(/\b(lying|silent|failing|broken|failure|paged|missed|dead|down)\b/i,
          '<span class="accent">$1</span>');
      });
      h.innerHTML = withAccent.join('<br/>') + '<span class="cursor"></span>';
    }
    const s = document.getElementById('sub');
    if (s && state.sub) s.textContent = state.sub;

    // section visibility
    const mapping = {
      showMetrics:      '#sec-metrics',
      showProblem:      '#sec-problem',
      showFeatures:     '#features',
      showHowItWorks:   '#how',
      showDashboard:    '#dashboard',
      showIntegrations: '#sec-integrations',
      showPricing:      '#pricing',
      showOssVsSaas:    '#sec-oss',
      showInstall:      '#sec-install',
      showFinalCta:     '#signup'
    };
    Object.keys(mapping).forEach(k => {
      const el = document.querySelector(mapping[k]);
      if (!el) return;
      el.style.display = state[k] === false ? 'none' : '';
    });
  }

  function persist(patch) {
    Object.assign(state, patch);
    applyState();
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*'); } catch (_) {}
  }

  // ---------- Tweaks UI ----------
  const panel = document.getElementById('tweaks');
  function openPanel()  { panel.hidden = false; syncPanel(); }
  function closePanel() { panel.hidden = true; }

  function syncPanel() {
    panel.querySelectorAll('#tw-accent .swatch').forEach(el => {
      el.classList.toggle('on', el.dataset.accent === state.accent);
    });
    panel.querySelectorAll('#tw-theme button').forEach(el => {
      el.classList.toggle('on', el.dataset.theme === (state.theme || 'dark'));
    });
    panel.querySelectorAll('#tw-density button').forEach(el => {
      el.classList.toggle('on', el.dataset.density === (state.density || 'airy'));
    });
    panel.querySelectorAll('#tw-hero button').forEach(el => {
      el.classList.toggle('on', el.dataset.hero === (state.heroVariant || 'heartbeat'));
    });
    const ta = document.getElementById('tw-headline');
    if (ta) ta.value = state.headline || '';
    panel.querySelectorAll('#tw-sections input').forEach(el => {
      el.checked = state[el.dataset.show] !== false;
    });
  }

  // Wire tweak controls
  panel.addEventListener('click', (e) => {
    const t = e.target.closest('button, input');
    if (!t) return;
    if (t.matches('.swatch'))     persist({ accent: t.dataset.accent });
    else if (t.dataset.theme)     persist({ theme: t.dataset.theme });
    else if (t.dataset.density)   persist({ density: t.dataset.density });
    else if (t.dataset.hero)      persist({ heroVariant: t.dataset.hero });
    else if (t.id === 'tweaks-close') closePanel();
    syncPanel();
  });
  panel.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches('#tw-sections input[type=checkbox]')) {
      persist({ [t.dataset.show]: t.checked });
    }
  });
  const ta = document.getElementById('tw-headline');
  if (ta) ta.addEventListener('input', () => persist({ headline: ta.value }));

  // Host bridge
  window.addEventListener('message', (e) => {
    const d = e && e.data;
    if (!d || typeof d !== 'object') return;
    if (d.type === '__activate_edit_mode')   openPanel();
    if (d.type === '__deactivate_edit_mode') closePanel();
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (_) {}

  // Initial apply
  applyState();

  // ---------- Nav shadow on scroll ----------
  const nav = document.getElementById('nav');
  const updateNav = () => {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('menu-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // Close when a link is clicked
    nav.querySelectorAll('.links a').forEach(a => a.addEventListener('click', closeMenu));
    // Close on resize up to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMenu();
    });
    // Close on escape
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  // ---------- Scroll reveal ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ---------- Hero: heartbeat graph ----------
  const POINTS = 120;          // graph samples
  const history = [];
  const TICK = 90;             // ms
  const line = document.getElementById('hb-line');
  const fill = document.getElementById('hb-fill');
  const dot  = document.getElementById('hb-dot');

  // Seed noise
  for (let i = 0; i < POINTS; i++) history.push(baseline(i));

  function baseline(i) {
    // Gentle breathing + occasional ECG-style spikes
    const b = 110 + Math.sin(i * 0.18) * 8 + Math.sin(i * 0.07) * 4;
    return b;
  }

  let tickCount = 0;
  function advance() {
    tickCount++;
    let v = baseline(tickCount) + (Math.random() - 0.5) * 4;

    // ECG spike every ~14 ticks
    const phase = tickCount % 14;
    if (phase === 0) v = 110 - 26;           // small downtick (Q)
    if (phase === 1) v = 110 - 78;           // big spike up (R)  (SVG y-down)
    if (phase === 2) v = 110 + 34;           // downtick (S)
    if (phase === 3) v = 110 - 4;

    // Failure blip every 140 ticks
    if (tickCount % 140 === 0) v = 110 + 70;

    history.push(v);
    if (history.length > POINTS) history.shift();
    drawGraph();
  }

  function drawGraph() {
    const w = 600, h = 220;
    const step = w / (POINTS - 1);
    let d = '';
    history.forEach((y, i) => {
      const x = i * step;
      d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1);
    });
    line.setAttribute('d', d);
    fill.setAttribute('d', d + ' L ' + w + ' ' + h + ' L 0 ' + h + ' Z');
    const lastY = history[history.length - 1];
    dot.setAttribute('cx', w - 1);
    dot.setAttribute('cy', lastY);
  }
  drawGraph();
  setInterval(advance, TICK);

  // ---------- Hero: streaming feed ----------
  const feed = document.getElementById('feed');
  const FEED_MAX = 8;
  const apps = [
    'customer-portal', 'invoice-processor', 'notifications',
    'analytics-etl',   'billing-webhooks',  'mailer-worker'
  ];
  const tasks = [
    'generate:daily-invoices', 'sync:stripe-webhooks', 'dunning:send-reminders',
    'export:accounting-feed',  'cleanup:stale-sessions', 'telemetry:roll-up',
    'horizon.supervisor-1',    'queue.invoices',         'queue.emails'
  ];
  function rndTime() {
    const d = new Date(Date.now() - Math.floor(Math.random() * 2) * 1000);
    return d.toTimeString().slice(0, 8);
  }
  function rndRow() {
    const roll = Math.random();
    let kind = 'ok';
    if (roll > 0.92) kind = 'fail';
    else if (roll > 0.78) kind = 'warn';

    const task = tasks[Math.floor(Math.random() * tasks.length)];
    const app  = apps[Math.floor(Math.random() * apps.length)];
    const ms   = (80 + Math.floor(Math.random() * 2400));
    let icon, msg, tag;
    if (kind === 'ok') {
      icon = '✓';
      msg  = '<b>' + task + '</b> · ' + ms + 'ms';
      tag  = app;
    } else if (kind === 'warn') {
      icon = '⚠';
      msg  = '<b>' + task + '</b> · slow ' + (ms + 2000) + 'ms';
      tag  = app;
    } else {
      icon = '✕';
      msg  = '<b>' + task + '</b> · <span style="color:#fca5a5">exit 1</span>';
      tag  = app;
    }
    const row = document.createElement('div');
    row.className = 'feed-row ' + kind;
    row.innerHTML =
      '<span class="t">' + rndTime() + '</span>' +
      '<span class="icon">' + icon + '</span>' +
      '<span class="msg">' + msg + '</span>' +
      '<span class="tag">' + tag + '</span>';
    return row;
  }

  function pushFeed() {
    if (!feed) return;
    feed.insertBefore(rndRow(), feed.firstChild);
    while (feed.childElementCount > FEED_MAX) feed.removeChild(feed.lastChild);
  }
  for (let i = 0; i < FEED_MAX; i++) pushFeed();
  setInterval(pushFeed, 1800);

  // Stats ticker
  const statJobs = document.getElementById('stat-jobs');
  const statLat  = document.getElementById('stat-lat');
  setInterval(() => {
    if (!statJobs) return;
    const n = parseInt(statJobs.textContent.replace(/,/g, ''), 10) + Math.floor(Math.random() * 3) + 1;
    statJobs.textContent = n.toLocaleString();
  }, 2000);
  setInterval(() => {
    if (!statLat) return;
    statLat.textContent = (30 + Math.floor(Math.random() * 28)) + 'ms';
  }, 1400);

  // ---------- Metric count-up ----------
  const metricsSec = document.getElementById('sec-metrics');
  if (metricsSec) {
    const mio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.metric .val').forEach(el => {
          const target = parseFloat(el.parentElement.dataset.count || el.dataset.count || el.textContent);
          if (!target) return;
          const start = performance.now();
          const dur = 900;
          const from = 0;
          const step = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(from + (target - from) * eased).toLocaleString();
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = Math.round(target).toLocaleString();
          };
          requestAnimationFrame(step);
        });
        mio.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    mio.observe(metricsSec);
  }

  // ---------- Worker supervisor bento grid ----------
  const hg = document.getElementById('workers-grid') || document.getElementById('horizon-grid');
  if (hg) {
    const CELLS = 120;
    for (let i = 0; i < CELLS; i++) {
      const c = document.createElement('div');
      c.className = 'cell';
      const r = Math.random();
      if (r > 0.97) c.classList.add('fail');
      else if (r > 0.75) c.classList.add('l4');
      else if (r > 0.55) c.classList.add('l3');
      else if (r > 0.35) c.classList.add('l2');
      else if (r > 0.2)  c.classList.add('l1');
      hg.appendChild(c);
    }
    // occasional blink
    setInterval(() => {
      const cells = hg.querySelectorAll('.cell');
      const idx = Math.floor(Math.random() * cells.length);
      const old = cells[idx].className;
      cells[idx].className = 'cell l4';
      setTimeout(() => { cells[idx].className = old; }, 200);
    }, 350);
  }

  // ---------- Pricing toggle ----------
  const toggle = document.querySelector('.billing-toggle');
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-bill]');
      if (!btn) return;
      const period = btn.dataset.bill;
      toggle.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === btn));
      document.querySelectorAll('.price .amt').forEach(amt => {
        const m = amt.dataset.monthly, y = amt.dataset.yearly;
        if (!m) return;
        amt.textContent = '$' + (period === 'yearly' ? y : m);
      });
    });
  }

  // ---------- SDK tab switcher ----------
  const sdkTabs = document.getElementById('sdk-tabs');
  if (sdkTabs) {
    sdkTabs.addEventListener('click', (e) => {
      const b = e.target.closest('.sdk-tab');
      if (!b) return;
      const key = b.dataset.sdk;
      sdkTabs.querySelectorAll('.sdk-tab').forEach(t => t.classList.toggle('on', t === b));
      sdkTabs.querySelectorAll('.sdk-panel').forEach(p => {
        p.hidden = p.dataset.for !== key;
      });
    });
  }

  // ---------- Copy buttons ----------
  document.querySelectorAll('button.copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const txt = btn.dataset.copy || '';
      try {
        navigator.clipboard.writeText(txt);
        const old = btn.textContent;
        btn.textContent = 'COPIED';
        btn.classList.add('on');
        setTimeout(() => { btn.textContent = old; btn.classList.remove('on'); }, 1200);
      } catch (_) {}
    });
  });

  // ---------- Cursor-reactive hero glow (tracks across hero + metrics) ----------
  const heroBg = document.querySelector('.hero-bg .glow');
  const hero = document.querySelector('.hero');
  const metrics = document.getElementById('sec-metrics');
  if (hero && heroBg) {
    const onMove = (e) => {
      const heroRect = hero.getBoundingClientRect();
      // Combined region: hero top → metrics bottom (if present)
      const metricsRect = metrics ? metrics.getBoundingClientRect() : null;
      const top = heroRect.top;
      const bottom = metricsRect ? metricsRect.bottom : heroRect.bottom;
      const height = bottom - top;
      const x = ((e.clientX - heroRect.left) / heroRect.width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      heroBg.style.left = Math.max(-10, Math.min(110, x)) + '%';
      heroBg.style.top  = Math.max(-10, Math.min(110, y)) + '%';
    };
    hero.addEventListener('pointermove', onMove);
    if (metrics) metrics.addEventListener('pointermove', onMove);
  }

  // ---------- Smooth anchor handling ----------
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length < 2) return;
      const t = document.querySelector(href);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
