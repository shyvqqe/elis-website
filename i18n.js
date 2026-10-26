(() => {
  'use strict';
  const english = {
  "Возможности": "Features",
  "В работе": "In action",
  "Команды": "Commands",
  "Команда Проекта Vivian": "Vivian project team",
  "Эффекты": "Effects",
  "ФОН САЙТА": "SITE BACKGROUND",
  "Выключено": "Off",
  "Снег": "Snow",
  "Дождь": "Rain",
  "Выбор сохранится на этом устройстве": "Your choice is saved on this device",
  "Поддержка ↗": "Support ↗",
  "Добавить Vivian ↗": "Add Vivian ↗",
  "Меньше рутины.": "Less routine.",
  "Больше сервера.": "More for your server.",
  "Модерация, ИИ-общение, музыка и уровни — в одном боте для Discord.": "Moderation, AI chat, music and levels — all in one Discord bot.",
  "Добавить Vivian": "Add Vivian",
  "Посмотреть в работе": "See it in action",
  "/ ИИ-помощник и модерация": "/ AI assistant and moderation",
  "01 / ЭКРАН DISCORD": "01 / DISCORD PREVIEW",
  "LOCAL PREVIEW": "LOCAL PREVIEW",
  "Есть кто сегодня в войс?": "Anyone joining voice chat today?",
  "БОТ": "BOT",
  "Всем привет. Кто хочет собрать компанию?": "Hey everyone! Who wants to hang out?",
  "ИИ в чате": "AI in chat",
  "Я зайду через пять минут.": "I'll join in five minutes.",
  "Сообщение #general": "Message #general",
  "ДЕМОНСТРАЦИЯ ИНТЕРФЕЙСА": "INTERFACE DEMO",
  "01 — ФУНКЦИИ": "01 — FEATURES",
  "По делу.": "Straight to the point.",
  "Четыре направления. Без длинных обещаний.": "Four essentials. No grand promises.",
  "Автомодерация": "Auto-moderation",
  "Фильтры, очистка, блокировки и ограничения.": "Filters, cleanup, bans and restrictions.",
  "ИИ-общение": "AI conversations",
  "Vivian может участвовать в беседе.": "Vivian can join your conversations.",
  "Музыка": "Music",
  "Очередь, плеер и управление треками.": "Queue, player and track controls.",
  "Активность": "Activity",
  "Ранги, достижения и личные голосовые.": "Ranks, achievements and personal voice channels.",
  "02 — ИЗ DISCORD": "02 — FROM DISCORD",
  "Модерация": "Moderation",
  "в три действия.": "in three steps.",
  "Увеличить ↗": "Enlarge ↗",
  "Закрыть ×": "Close ×",
  "03 — КОМАНДЫ": "03 — COMMANDS",
  "Проверь сам.": "Try it yourself.",
  "Все": "All",
  "Общее": "General",
  "Система": "System",
  "Список команд и возможностей Vivian.": "List of Vivian commands and features.",
  "Попробовать ↗": "Try ↗",
  "Задержка": "Latency",
  "Проверить отклик Discord.": "Check Discord response time.",
  "Активность чата": "Chat activity",
  "Показать активность участников сервера.": "Show member activity on the server.",
  "Ранг участника": "Member rank",
  "Открыть опыт и достижения участника.": "View a member's XP and achievements.",
  "Воспроизвести": "Play",
  "Найти трек и добавить в очередь.": "Find a track and add it to the queue.",
  "Очередь": "Queue",
  "Посмотреть текущий трек и очередь.": "View the current track and queue.",
  "Следующий трек": "Skip track",
  "Пропустить текущий трек.": "Skip the current track.",
  "Пауза": "Pause",
  "Приостановить воспроизведение.": "Pause playback.",
  "Продолжить": "Resume",
  "Возобновить музыку.": "Resume music playback.",
  "Остановить": "Stop",
  "Остановить очередь и отключить плеер.": "Clear the queue and disconnect the player.",
  "Блокировка": "Ban",
  "Заблокировать участника. Требуются права.": "Ban a member. Requires permission.",
  "Удалить участника": "Kick member",
  "Исключить участника с сервера.": "Remove a member from the server.",
  "Очистить сообщения": "Clear messages",
  "Удалить последние сообщения.": "Delete recent messages.",
  "Медленный режим": "Slow mode",
  "Установить задержку между сообщениями.": "Set a delay between messages.",
  "Закрыть канал": "Lock channel",
  "Ограничить отправку сообщений в канале.": "Restrict sending messages in the channel.",
  "Открыть канал": "Unlock channel",
  "Снять ограничение на отправку сообщений.": "Remove the message restriction.",
  "Панель VEYR": "VEYR panel",
  "Открыть панель состояния сервера.": "Open the server status panel.",
  "Ничего не найдено.": "No results found.",
  "local demo": "local demo",
  "Введи команду или выбери её слева.": "Enter a command or choose one on the left.",
  "Выбери команду, чтобы увидеть пример ответа.": "Choose a command to see an example response.",
  "Локальный предпросмотр · действия в Discord не выполняются": "Local preview · no actions are performed in Discord",
  "Неизвестная команда": "Unknown command",
  "Команда не найдена. Попробуй /help.": "Command not found. Try /help.",
  "04 — СРАВНЕНИЕ": "04 — COMPARISON",
  "Один сервер.": "One server.",
  "Два сценария.": "Two scenarios.",
  "Условный пример того, какие задачи Vivian может взять на себя.": "An illustrative example of what Vivian can handle.",
  "Без Vivian": "Without Vivian",
  "С Vivian": "With Vivian",
  "БЕЗ VIVIAN": "WITHOUT VIVIAN",
  "Нет ответа": "No response",
  "14:20 · чат ждёт модератора": "14:20 · chat awaits a moderator",
  "Ожидание проверки": "Awaiting review",
  "14:42 · ручная модерация": "14:42 · manual moderation",
  "С VIVIAN": "WITH VIVIAN",
  "Vivian отвечает": "Vivian responds",
  "14:20 · разговор продолжается": "14:20 · conversation continues",
  "Нарушение обработано": "Violation handled",
  "14:42 · уведомление отправлено": "14:42 · notification sent",
  "ДО": "BEFORE",
  "ПОСЛЕ": "AFTER",
  "05 — ВОПРОСЫ": "05 — QUESTIONS",
  "Коротко.": "In brief.",
  "Где узнать все команды?": "Where can I find all commands?",
  "В Discord используй": "Use",
  "Демо управляет сервером?": "Does the demo control the server?",
  "Нет. Команды на сайте — локальная демонстрация. Они не выполняют действия в Discord.": "No. These commands are a local demo and do not execute actions in Discord.",
  "Как подключить Vivian?": "How do I add Vivian?",
  "06 — КОМАНДА": "06 — TEAM",
  "Команда Проекта Vivian.": "The Vivian team.",
  "Создатель Vivian": "Vivian creator",
  "Разработка": "Development",
  "тестирование": "testing",
  "развитие проекта": "project development",
  "Discord профиль": "Discord profile",
  "Связаться ↗": "Contact ↗",
  "Участник команды Vivian": "Vivian team member",
  "Поддержка": "Support",
  "участие в развитии": "contributions",
  "команда": "team",
  "Добавить бота": "Add the bot",
  "на свой сервер.": "to your server.",
  "Создано для Discord": "Made for Discord",
  "Наверх ↑": "Back to top ↑",
  "© 2026 год | Все права защищены Создателем сайта": "© 2026 | All rights reserved. Site created by",
  "Мы не являемся аффилированным лицом Discord Inc.": "We are not affiliated with Discord Inc.",
  "Разделы": "Sections",
  "Фоновые эффекты": "Background effects",
  "Настройки фоновых эффектов": "Background effect settings",
  "Открыть меню": "Open menu",
  "Аватар Vivian": "Vivian avatar",
  "Увеличить скриншот модерации": "Enlarge moderation screenshot",
  "Скриншот модерации Vivian": "Vivian moderation screenshot",
  "Найти команду…": "Find a command…",
  "Поиск команд Vivian": "Search Vivian commands",
  "Категории команд": "Command categories",
  "Ввести демонстрационную команду": "Enter demo command",
  "Выполнить команду": "Run command",
  "Передвинуть границу сравнения": "Move comparison slider",
  "Аватар zev1x": "zev1x avatar",
  "Профиль zev1x в Discord": "zev1x Discord profile",
  "Аватар lumi": "lumi avatar",
  "Профиль lumi в Discord": "lumi Discord profile",
  "Vivian — Discord-бот": "Vivian — Discord bot",
  "Vivian: ИИ-общение, модерация, музыка, активность и команды.": "Vivian: AI conversations, moderation, music, activity and commands.",
  "Эффекты фона: выключены": "Background effects: off",
  "Эффекты фона: снег": "Background effects: snow",
  "Эффекты фона: дождь": "Background effects: rain",
  "Открыть настройки": "Open settings",
  "Язык сайта": "Site language",
  "Русский": "Russian",
  "English": "English",
  "Язык": "Language",
  "Переключить язык": "Switch language",
  "Выбрать язык": "Choose language",
  "Язык интерфейса": "Interface language",
  "Команда Vivian": "Vivian team",
  "Команда Vivian.": "The Vivian team.",
  "ДЕМО": "DEMO",
  "Демо": "Demo",
  "Пример": "Example",
  "Управление сервером": "Server management",
  "Мут": "Mute",
  "Снять мут": "Unmute",
  "Тайм-аут": "Timeout",
  "Предупреждение": "Warning",
  "Предупредить участника": "Warn a member",
  "Временно отключить участнику возможность писать и говорить.": "Temporarily prevent a member from sending messages and speaking.",
  "Снять ограничение с участника.": "Remove the member’s timeout.",
  "Выдать предупреждение участнику.": "Issue a warning to a member.",
  "Показать предупреждения участника.": "Show a member’s warnings.",
  "Участник": "Member",
  "Причина": "Reason",
  "Время": "Duration",
  "Нарушение правил": "Rule violation",
  "Нарушение правил сервера": "Server rule violation",
  "10 минут": "10 minutes",
  "Модератор": "Moderator",
  "Статус": "Status",
  "Успешно": "Success",
  "Готово": "Done",
  "Приветствие": "Welcome",
  "Новые участники": "New members",
  "Добро пожаловать": "Welcome",
  "Профиль": "Profile",
  "Уровень": "Level",
  "Опыт": "Experience",
  "Достижения": "Achievements",
  "Сейчас играет": "Now playing",
  "Музыка на сервере": "Music on your server",
  "Модерация без лишнего шума.": "Moderation without the noise.",
  "Русская версия": "Russian version",
  "Английская версия": "English version",
  "Команды Vivian": "Vivian commands",
  "Тайм-аут включён": "Timeout enabled",
  "Тайм-аут снят": "Timeout removed",
  "Сообщения удалены": "Messages deleted",
  "Участник заблокирован": "Member banned",
  "Участник исключён": "Member kicked",
  "Медленный режим включён": "Slowmode enabled",
  "Канал закрыт": "Channel locked",
  "Канал открыт": "Channel unlocked",
  "Очередь воспроизведения": "Playback queue",
  "Воспроизведение приостановлено": "Playback paused",
  "Воспроизведение продолжено": "Playback resumed",
  "Плеер остановлен": "Player stopped",
  "Активность сервера": "Server activity",
  "Состояние Vivian": "Vivian status",
  "Отклик: 42 мс · Discord API доступен.": "Latency: 42 ms · Discord API is available.",
  "{member} не может отправлять сообщения: {duration}.": "{member} cannot send messages for {duration}.",
  "{member} снова может писать в чат.": "{member} can send messages again.",
  "Удалено сообщений: {count}. Канал #general очищен.": "{count} messages deleted. Channel #general cleared.",
  "{member} заблокирован. Причина: нарушение правил.": "{member} has been banned. Reason: rule violation.",
  "{member} исключён с сервера.": "{member} has been kicked from the server.",
  "Интервал между сообщениями: {duration}.": "Message interval: {duration}.",
  "Отправка сообщений в #general ограничена.": "Sending messages in #general is restricted.",
  "Участники снова могут писать в #general.": "Members can send messages in #general again.",
  "{track} · 4:03 · добавлено в очередь.": "{track} · 4:03 · added to the queue.",
  "Переключено на Space Song — Beach House.": "Switched to Space Song — Beach House.",
  "Текущий трек сохранён на 1:24.": "Current track paused at 1:24.",
  "Музыка продолжается с 1:24.": "Playback resumes at 1:24.",
  "Очередь очищена. Голосовой канал отключён.": "Queue cleared. Disconnected from the voice channel.",
  "{member} · уровень 12 · 2 450 XP · место #4.": "{member} · level 12 · 2,450 XP · rank #4.",
  "Сегодня: 128 сообщений · 24 активных участника.": "Today: 128 messages · 24 active members.",
  "Все системы готовы · модерация, музыка, уровни.": "All systems ready · moderation, music, levels.",
  "5 секунд": "5 seconds",
  "Слева русский, справа английский": "Russian on the left, English on the right",
  "Русская версия: {count}%": "Russian version: {count}%",
  "Без Vivian: {count}%": "Without Vivian: {count}%",
  "Модерация. Музыка. Твой сервер.": "Moderation. Music. Your server.",
  "Всё начинается с одной команды.": "It starts with a single command.",
  "01 / МУЗЫКА": "01 / MUSIC",
  "Настроение в один клик.": "Set the mood in one click.",
  "Собери очередь и управляй музыкой прямо в Discord.": "Build a queue and control your music directly in Discord.",
  "ВОСПРОИЗВОДИТСЯ": "NOW PLAYING",
  "Очередь готова": "Queue ready",
  "Попробовать /play ↗": "Try /play ↗",
  "02 / АКТИВНОСТЬ": "02 / ACTIVITY",
  "У каждого свой прогресс.": "Everyone has their own journey.",
  "Опыт, уровни и достижения участников — в одном профиле.": "Member XP, levels and achievements in one profile.",
  "УРОВЕНЬ 12": "LEVEL 12",
  "До следующего уровня": "Until the next level",
  "Посмотреть /rank ↗": "View /rank ↗",
  "Два языка. Один сценарий.": "Two languages. One scenario.",
  "Передвинь ползунок и сравни русский и английский примеры модерации Vivian.": "Drag the slider to compare Vivian’s Russian and English moderation examples.",
  "Потяни, чтобы сравнить": "Drag to compare",
  "Сравнение примеров на русском и английском": "Compare Russian and English examples",
  "Пример модерации Vivian на русском": "Vivian moderation example in Russian",
  "Пример модерации Vivian на английском": "Vivian moderation example in English",
  "Увеличить пример модерации": "Enlarge the moderation example",
  "Закрыть": "Close",
  "Полноэкранный пример модерации Vivian": "Full-screen Vivian moderation example",
  "Демонстрация модерации · RU / EN": "Moderation demo · RU / EN",
  "Попробуй команды Vivian прямо здесь. Ответы демонстрационные; Discord-сервер не затрагивается.": "Try Vivian’s commands right here. These are sample responses; your Discord server is unaffected.",
  "Быстрый запуск": "Quick start",
  "Мут на 10 минут": "Mute for 10 minutes",
  "Включить музыку": "Play music",
  "Мой ранг": "My rank",
  "Мут участника": "Mute member",
  "Ограничить участника на заданное время.": "Timeout a member for a set duration.",
  "Вернуть участнику возможность писать.": "Allow a member to send messages again.",
  "Демонстрационный профиль": "Demo profile",
  "Список команд Vivian доступен в Discord через": "Vivian’s command list is available in Discord through",
  "Как работают два языка?": "How do the two languages work?",
  "Переключатель RU / EN переводит весь сайт. Ползунок в блоке модерации позволяет сравнить оба примера.": "The RU / EN switch translates the whole site. The slider in the moderation section lets you compare both examples.",
  "Два языка.": "Two languages.",
  "Один сценарий.": "One scenario.",
  ". На этой странице есть поиск по командам.": ". You can search commands on this page.",
  "Перейди по кнопке «Добавить Vivian». Выбери сервер и подтверди добавление в Discord.": "Click “Add Vivian”. Choose a server and confirm the invitation in Discord.",
  "/CARD — ПРОФИЛЬ": "/CARD — PROFILE",
  "Твоя активность — в одной карточке.": "Your activity, all in one card.",
  "Сообщения, уровень и прогресс опыта. Используй /card, чтобы увидеть свою карточку в Discord.": "Messages, level and XP progress. Use /card to view your card in Discord.",
  "Попробовать /card ↗": "Try /card ↗",
  "Увеличить карточку Vivian": "Enlarge Vivian’s card",
  "Карточка Vivian: сообщения, уровень и опыт": "Vivian’s card: messages, level and XP",
  "Пример карточки Vivian": "Vivian’s sample card",
  "Пример карточки Vivian.": "Vivian’s sample card.",
  "Нажми, чтобы увеличить ↗": "Click to enlarge ↗",
  "Карточка профиля Vivian": "Vivian’s profile card",
  "Карточка профиля": "Profile card",
  "Показать карточку с сообщениями, уровнем и опытом.": "Show a card with messages, level and XP.",
  "Выбери категорию или введи команду. Доступно: /card, /mute, /play, /rank и другие команды.": "Choose a category or enter a command. Try /card, /mute, /play, /rank and more."
};
  const reverse = new Map(Object.entries(english).map(([ru, en]) => [en, ru]));
  const strings = [];
  const attributes = [];
  const knownNodes = new WeakSet();
  const knownAttributes = new WeakMap();
  const buttons = [...document.querySelectorAll('.language-switch [data-lang], #language-control [data-lang]')];
  const switches = [...document.querySelectorAll('.language-switch')];
  const supported = ['ru', 'en'];
  const storageKey = 'vivian-language-v1';
  const title = document.title;
  const description = document.querySelector('meta[name="description"]');
  const descriptionText = description?.content || '';
  let language = 'ru';
  let animationFrame = 0;

  function canonical(value) {
    const trimmed = value.trim();
    if (Object.hasOwn(english, trimmed)) return trimmed;
    return reverse.get(trimmed) || null;
  }

  function capture() {
    for (let i = strings.length - 1; i >= 0; i--) if (!strings[i].node.isConnected) strings.splice(i, 1);
    for (let i = attributes.length - 1; i >= 0; i--) if (!attributes[i].element.isConnected) attributes.splice(i, 1);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (knownNodes.has(node) || !node.parentElement || node.parentElement.closest('script, style, svg, code, [data-no-translate]')) continue;
      const key = canonical(node.nodeValue);
      if (!key) continue;
      knownNodes.add(node);
      const leading = node.nodeValue.match(/^\s*/)[0];
      const trailing = node.nodeValue.match(/\s*$/)[0];
      strings.push({ node, key, leading, trailing });
    }
    document.querySelectorAll('[placeholder], [aria-label], [title], [alt]').forEach(element => {
      let names = knownAttributes.get(element);
      if (!names) { names = new Set(); knownAttributes.set(element, names); }
      for (const name of ['placeholder', 'aria-label', 'title', 'alt']) {
        if (names.has(name)) continue;
        const value = element.getAttribute(name);
        const key = value && canonical(value);
        if (!key) continue;
        names.add(name);
        attributes.push({ element, name, key });
      }
    });
  }

  function t(value) {
    if (language === 'ru') return value;
    return english[value] || value;
  }

  function readStored() {
    try { return localStorage.getItem(storageKey); } catch { return null; }
  }

  function apply(next, persist = true) {
    const selected = supported.includes(next) ? next : 'ru';
    const changed = selected !== language;
    capture();
    language = selected;
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    document.title = t(title);
    if (description) description.content = t(descriptionText);
    for (const { node, key, leading, trailing } of strings) {
      if (node.isConnected) node.nodeValue = leading + t(key) + trailing;
    }
    for (const { element, name, key } of attributes) {
      if (element.isConnected) element.setAttribute(name, t(key));
    }
    for (const button of buttons) {
      const active = button.dataset.lang === language;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('active', active);
    }
    for (const control of switches) {
      control.dataset.language = language;
      control.style.setProperty('--language-position', language === 'en' ? '1' : '0');
    }
    if (persist) {
      try { localStorage.setItem(storageKey, language); } catch {}
    }
    if (changed && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.remove('language-changing');
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        document.body.classList.add('language-changing');
        window.setTimeout(() => document.body.classList.remove('language-changing'), 360);
      });
    }
    window.dispatchEvent(new CustomEvent('vivian:languagechange', { detail: { language } }));
  }

  window.VivianI18n = { t, get language() { return language; }, setLanguage: apply };
  for (const button of buttons) button.addEventListener('click', () => apply(button.dataset.lang));
  for (const control of switches) control.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'ArrowLeft' || event.key === 'Home' ? 'ru' : 'en';
    apply(next);
    control.querySelector('[data-lang="' + next + '"]')?.focus();
  });
  const requested = new URLSearchParams(location.search).get('lang');
  apply(supported.includes(requested) ? requested : readStored() || 'ru', false);
})();
