(() => {
  'use strict';
  document.body.classList.add('enhanced');
  const tr = (key, values = {}) => {
    let text = window.VivianI18n?.t(key) ?? key;
    return text.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
  };
  const rows = [...document.querySelectorAll('.command-item')];
  const query = document.getElementById('command-query');
  const filters = [...document.querySelectorAll('[data-group]')];
  const count = document.getElementById('command-count');
  const empty = document.getElementById('empty-search');
  const input = document.getElementById('demo-input');
  let group = 'Все';
  let activeCommand = '';
  const examples = {
    '/mute': '/mute @Fulmin 10m', '/unmute': '/unmute @Fulmin',
    '/clear': '/clear 10', '/ban': '/ban @Fulmin', '/kick': '/kick @Fulmin',
    '/slowmode': '/slowmode 5s', '/play': '/play Midnight City — M83', '/rank': '/rank @Fulmin'
  };

  function filter() {
    let visible = 0;
    const term = (query?.value || '').toLocaleLowerCase().trim();
    rows.forEach(row => {
      const allowed = (group === 'Все' || row.dataset.category === group)
        && row.textContent.toLocaleLowerCase().includes(term);
      row.hidden = !allowed;
      if (allowed) visible++;
    });
    if (count) count.textContent = `${visible} / ${rows.length}`;
    if (empty) empty.hidden = visible !== 0;
  }
  query?.addEventListener('input', filter);
  filters.forEach(button => button.addEventListener('click', () => {
    group = button.dataset.group;
    filters.forEach(other => {
      const selected = other === button;
      other.classList.toggle('active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    filter();
  }));

  function runCommand(raw) {
    const value = String(raw || '').trim().slice(0, 240);
    if (!value) return;
    activeCommand = value;
    const [command, ...args] = value.split(/\s+/);
    const member = args.find(arg => arg.startsWith('@')) || '@Fulmin';
    const timedArgument = args.find(arg => /^\d+(?:s|m|h|d|с|м|ч|д)$/i.test(arg));
    const numericSeconds = args.find(arg => /^\d+$/.test(arg));
    const duration = timedArgument || (command.toLowerCase() === '/slowmode' ? (numericSeconds ? `${Math.min(21600, Number(numericSeconds))}s` : tr('5 секунд')) : tr('10 минут'));
    const parsedAmount = Number.parseInt(args[0], 10);
    const amount = Math.max(1, Math.min(100, Number.isFinite(parsedAmount) ? parsedAmount : 10));
    const track = args.join(' ') || 'Midnight City — M83';
    const replies = {
      '/help': ['Команды Vivian', 'Выбери категорию или введи команду. Доступно: /mute, /play, /rank и ещё 16 команд.'],
      '/ping': ['Задержка', 'Отклик: 42 мс · Discord API доступен.'],
      '/mute': ['Тайм-аут включён', '{member} не может отправлять сообщения: {duration}.'],
      '/unmute': ['Тайм-аут снят', '{member} снова может писать в чат.'],
      '/clear': ['Сообщения удалены', 'Удалено сообщений: {count}. Канал #general очищен.'],
      '/ban': ['Участник заблокирован', '{member} заблокирован. Причина: нарушение правил.'],
      '/kick': ['Участник исключён', '{member} исключён с сервера.'],
      '/slowmode': ['Медленный режим включён', 'Интервал между сообщениями: {duration}.'],
      '/lock': ['Канал закрыт', 'Отправка сообщений в #general ограничена.'],
      '/unlock': ['Канал открыт', 'Участники снова могут писать в #general.'],
      '/play': ['Сейчас играет', '{track} · 4:03 · добавлено в очередь.'],
      '/queue': ['Очередь воспроизведения', '1. Midnight City — M83\n2. Space Song — Beach House'],
      '/skip': ['Следующий трек', 'Переключено на Space Song — Beach House.'],
      '/pause': ['Воспроизведение приостановлено', 'Текущий трек сохранён на 1:24.'],
      '/resume': ['Воспроизведение продолжено', 'Музыка продолжается с 1:24.'],
      '/stop': ['Плеер остановлен', 'Очередь очищена. Голосовой канал отключён.'],
      '/rank': ['Ранг участника', '{member} · уровень 12 · 2 450 XP · место #4.'],
      '/activity': ['Активность сервера', 'Сегодня: 128 сообщений · 24 активных участника.'],
      '/veyr': ['Состояние Vivian', 'Все системы готовы · модерация, музыка, уровни.']
    };
    const reply = replies[command.toLowerCase()] || ['Неизвестная команда', 'Команда не найдена. Попробуй /help.'];
    const output = document.getElementById('command-result');
    if (!output) return;
    const echo = document.createElement('div');
    echo.className = 'terminal-command';
    echo.textContent = `› ${value}`;
    const result = document.createElement('div');
    result.className = 'terminal-output';
    const avatar = document.createElement('img');
    avatar.src = 'vivian-avatar.png';
    avatar.alt = '';
    const detail = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = 'Vivian ';
    const badge = document.createElement('small');
    badge.textContent = tr('БОТ');
    name.append(badge);
    const heading = document.createElement('p');
    heading.textContent = tr(reply[0]);
    const description = document.createElement('span');
    description.className = 'terminal-description';
    description.textContent = tr(reply[1], { member, duration, count: amount, track });
    detail.append(name, heading, description);
    result.append(avatar, detail);
    output.replaceChildren(echo, result);
    output.setAttribute('aria-live', 'polite');
    output.setAttribute('aria-atomic', 'true');
  }

  document.getElementById('demo-form')?.addEventListener('submit', event => {
    event.preventDefault();
    runCommand(input?.value);
  });
  document.querySelectorAll('[data-try], [data-quick]').forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.quick || button.dataset.try;
    const command = examples[selected] || selected;
    if (input) input.value = command;
    runCommand(command);
    if (button.closest('.extra-card')) {
      document.querySelector('.console')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    }
  }));

  const dialog = document.getElementById('image-dialog');
  const openImage = document.getElementById('open-image');
  let lastFocus = null;
  function updateDialogImage() {
    const target = document.getElementById('dialog-preview-image');
    const image = target?.tagName === 'IMG' ? target : target?.querySelector('img') || dialog?.querySelector('img');
    if (image) image.src = window.VivianI18n?.language === 'en' ? 'moderation-en.svg' : 'moderation-ru.svg';
  }
  openImage?.addEventListener('click', () => {
    if (!dialog) return;
    lastFocus = document.activeElement;
    updateDialogImage();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  });
  function closeImage() {
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  }
  document.getElementById('close-image')?.addEventListener('click', closeImage);
  dialog?.addEventListener('click', event => { if (event.target === dialog) closeImage(); });
  dialog?.addEventListener('close', () => { lastFocus?.focus(); });

  const compare = document.getElementById('compare-widget');
  const range = document.getElementById('compare-range');
  function setSplit(value, animate = false) {
    if (!compare || !range) return;
    const position = Math.max(0, Math.min(100, Number(value)));
    compare.classList.toggle('is-sliding', animate);
    compare.style.setProperty('--dynamic-split', `${position}%`);
    range.value = String(position);
    range.setAttribute('aria-valuetext', tr('Без Vivian: {count}%', { count: position }));
    document.querySelectorAll('[name="compare-view"]').forEach(radio => {
      radio.checked = Number(radio.value) === position;
    });
  }
  document.querySelectorAll('[name="compare-view"]').forEach(radio => radio.addEventListener('change', () => setSplit(radio.value, true)));
  range?.addEventListener('pointerdown', () => compare?.classList.remove('is-sliding'));
  range?.addEventListener('input', () => setSplit(range.value));
  setSplit(range?.value || 50);

  const preview = document.getElementById('preview-compare');
  const previewRange = document.getElementById('preview-range');
  function setPreviewSplit(value, animate = false) {
    if (!preview || !previewRange) return;
    const position = Math.max(0, Math.min(100, Number(value)));
    preview.classList.toggle('is-sliding', animate);
    preview.style.setProperty('--image-split', `${position}%`);
    previewRange.value = String(position);
    previewRange.setAttribute('aria-valuetext', tr('Русская версия: {count}%', { count: position }));
    document.querySelectorAll('[data-preview-language]').forEach(button => {
      const selected = button.dataset.previewLanguage === 'ru' ? position === 100 : position === 0;
      button.setAttribute('aria-pressed', String(selected));
    });
    const percentage = document.getElementById('preview-percentage');
    if (percentage) percentage.textContent = `RU ${position}% / EN ${100 - position}%`;
  }
  previewRange?.addEventListener('pointerdown', () => preview?.classList.remove('is-sliding'));
  previewRange?.addEventListener('input', () => setPreviewSplit(previewRange.value));
  document.querySelectorAll('[data-preview-language]').forEach(button => button.addEventListener('click', () => {
    setPreviewSplit(button.dataset.previewLanguage === 'ru' ? 100 : 0, true);
  }));
  setPreviewSplit(previewRange?.value || 50);

  const languageSwitch = document.getElementById('language-switch') || document.querySelector('.language-switch');
  if (languageSwitch) {
    let origin = null;
    let dragged = false;
    let suppressClick = false;
    languageSwitch.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      origin = event.clientX;
      dragged = false;
    });
    languageSwitch.addEventListener('pointermove', event => {
      if (origin === null || Math.abs(event.clientX - origin) < 6) return;
      dragged = true;
      if (!languageSwitch.hasPointerCapture(event.pointerId)) languageSwitch.setPointerCapture(event.pointerId);
      const bounds = languageSwitch.getBoundingClientRect();
      window.VivianI18n?.setLanguage(event.clientX - bounds.left < bounds.width / 2 ? 'ru' : 'en');
    });
    languageSwitch.addEventListener('pointerup', () => {
      if (dragged) {
        suppressClick = true;
        setTimeout(() => { suppressClick = false; }, 0);
      }
      origin = null;
      dragged = false;
    });
    languageSwitch.addEventListener('pointercancel', () => { origin = null; dragged = false; });
    languageSwitch.addEventListener('click', event => {
      if (suppressClick) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);
    window.addEventListener('pointerup', () => { origin = null; });
  }

  document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
    link.closest('details')?.removeAttribute('open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.mobile-nav[open]').forEach(menu => menu.removeAttribute('open'));
    if (dialog?.open && typeof dialog.close !== 'function') closeImage();
  });
  window.addEventListener('vivian:languagechange', () => {
    filter();
    if (activeCommand) runCommand(activeCommand);
    setSplit(range?.value || 50);
    setPreviewSplit(previewRange?.value || 50);
    updateDialogImage();
  });
  const clientId = new URLSearchParams(location.search).get('client_id');
  if (clientId && /^\d{15,25}$/.test(clientId)) {
    document.querySelectorAll('a[data-invite]').forEach(link => {
      link.href = `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(clientId)}&permissions=0&scope=bot%20applications.commands`;
    });
  }
  filter();
})();
