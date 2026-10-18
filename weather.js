/* Esil decorative weather: optional, low-contrast, and never blocks interaction. */
(() => {
  'use strict';
  const canvas = document.getElementById('weather-canvas');
  const trigger = document.getElementById('weather-trigger');
  const panel = document.getElementById('weather-panel');
  const root = document.getElementById('weather-control');
  if (!canvas || !trigger || !panel || !root) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;
  const STORAGE_KEY = 'esil-weather-v1';
  const options = [...panel.querySelectorAll('[data-weather]')];
  const motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const motionReduced = () => !!(motionQuery && motionQuery.matches);
  let mode = 'off';
  let particles = [];
  let w = 1, h = 1;
  let frameId = 0;
  let lastTick = 0;
  let pixelRatio = 1;

  function readPreference() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored === 'snow' || stored === 'rain' ? stored : 'off';
    } catch (_) { return 'off'; }
  }
  function remember(value) {
    try { window.localStorage.setItem(STORAGE_KEY, value); } catch (_) { /* Private browsing. */ }
  }
  function closePanel() {
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  }
  function sizeCanvas() {
    w = Math.max(1, window.innerWidth);
    h = Math.max(1, window.innerHeight);
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.round(w * pixelRatio);
    canvas.height = Math.round(h * pixelRatio);
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }
  function createParticle(randomY = true) {
    const isSnow = mode === 'snow';
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -20 - Math.random() * 100,
      size: isSnow ? 0.8 + Math.random() * 1.7 : 9 + Math.random() * 11,
      speed: isSnow ? 0.22 + Math.random() * 0.55 : 3.1 + Math.random() * 3.0,
      drift: isSnow ? -0.13 + Math.random() * 0.25 : 0.4 + Math.random() * 0.5,
      alpha: isSnow ? 0.17 + Math.random() * 0.26 : 0.06 + Math.random() * 0.095,
      phase: Math.random() * Math.PI * 2
    };
  }
  function seedParticles() {
    const area = w * h;
    const target = mode === 'snow'
      ? Math.max(15, Math.min(54, Math.round(area / 29000)))
      : Math.max(19, Math.min(70, Math.round(area / 18500)));
    particles = Array.from({ length: target }, () => createParticle());
  }
  function draw(step) {
    ctx.clearRect(0, 0, w, h);
    const isSnow = mode === 'snow';
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (step > 0) {
        p.y += p.speed * step;
        p.x += (p.drift + (isSnow ? Math.sin(p.phase + p.y / 83) * 0.12 : 0)) * step;
        if (p.y > h + 25 || p.x > w + 25 || p.x < -25) particles[i] = createParticle(false);
      }
      const t = particles[i];
      if (isSnow) {
        ctx.fillStyle = `rgba(204,231,233,${t.alpha})`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.strokeStyle = `rgba(122,183,197,${t.alpha})`;
        ctx.beginPath();
        ctx.moveTo(t.x, t.y);
        ctx.lineTo(t.x - t.drift * t.size * 0.18, t.y + t.size);
        ctx.stroke();
      }
    }
  }
  function stop() {
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = 0;
    lastTick = 0;
  }
  function tick(now) {
    frameId = 0;
    if (mode === 'off' || motionReduced() || document.hidden) return;
    const step = lastTick ? Math.min(2.2, (now - lastTick) / 16.667) : 1;
    lastTick = now;
    draw(step);
    frameId = window.requestAnimationFrame(tick);
  }
  function start() {
    stop();
    if (mode === 'off') {
      canvas.hidden = true;
      ctx.clearRect(0, 0, w, h);
      return;
    }
    canvas.hidden = false;
    sizeCanvas();
    seedParticles();
    draw(0);
    if (!motionReduced() && !document.hidden) frameId = window.requestAnimationFrame(tick);
  }
  function updateDescription() {
    const description = { off: 'Эффекты фона: выключены', snow: 'Эффекты фона: снег', rain: 'Эффекты фона: дождь' };
    const tr = key => window.EsilI18n?.t(key) ?? key;
    trigger.setAttribute('aria-label', `${tr(description[mode])}. ${tr('Открыть настройки')}`);
    trigger.title = tr(description[mode]);
  }
  function selectMode(next, persist = true) {
    if (!['off', 'snow', 'rain'].includes(next)) next = 'off';
    mode = next;
    options.forEach(option => option.setAttribute('aria-pressed', String(option.dataset.weather === mode)));
    updateDescription();
    trigger.classList.toggle('is-active', mode !== 'off');
    if (persist) remember(mode);
    start();
    closePanel();
  }
  trigger.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    trigger.setAttribute('aria-expanded', String(!panel.hidden));
    if (!panel.hidden) panel.querySelector(`[data-weather="${mode}"]`)?.focus();
  });
  options.forEach(button => button.addEventListener('click', () => {
    selectMode(button.dataset.weather);
    trigger.focus();
  }));
  document.addEventListener('pointerdown', event => {
    if (!root.contains(event.target)) closePanel();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) { closePanel(); trigger.focus(); }
  });
  window.addEventListener('resize', () => {
    if (mode !== 'off') start();
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (mode !== 'off') {
      if (document.hidden) stop();
      else if (!motionReduced() && !frameId) frameId = window.requestAnimationFrame(tick);
    }
  });
  if (motionQuery) {
    const handleMotionChange = () => { if (mode !== 'off') start(); };
    if (motionQuery.addEventListener) motionQuery.addEventListener('change', handleMotionChange);
    else if (motionQuery.addListener) motionQuery.addListener(handleMotionChange);
  }
  window.addEventListener('esil:languagechange',updateDescription);
  selectMode(readPreference(), false);
  document.documentElement.classList.add('weather-ready');
})();
