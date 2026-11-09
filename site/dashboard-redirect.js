(() => {
  'use strict';
  const message = document.getElementById('redirect-status');
  try {
    const raw = window.VIVIAN_CONFIG?.apiBase;
    if (!raw) throw new Error('Set apiBase in config.js to your existing Render service URL.');
    const target = new URL(raw);
    if (target.protocol !== 'https:' || target.username || target.password || target.pathname !== '/' || target.search || target.hash) {
      throw new Error('apiBase must be an HTTPS origin without a path.');
    }
    target.pathname = '/dashboard';
    const link = document.getElementById('dashboard-link');
    link.href = target.href;
    link.hidden = false;
    message.textContent = 'Opening Discord sign-in and server settings…';
    window.location.replace(target.href);
  } catch (error) {
    message.textContent = error.message;
    message.setAttribute('role', 'status');
  }
})();
