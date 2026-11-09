window.VIVIAN_CONFIG = Object.freeze({
  apiBase: 'https://nekery-bot.onrender.com',
  publicSiteUrl: 'https://vivian.lat'
});

if (window.location.hostname === 'esil.life') {
  const canonical = new URL(window.VIVIAN_CONFIG.publicSiteUrl);
  canonical.pathname = window.location.pathname;
  canonical.search = window.location.search;
  canonical.hash = window.location.hash;
  window.location.replace(canonical.href);
}
