import * as E from './social-engine.js';

const KEY = 'esil-social-demo-v1';
const START_BANNER = 'сядь кем-нибудь другим, если проверяешь краш, дружбу или статус. второму ничего не приходит, пока правила сами не скажут.';
const CHANNELS = [
  ['general', 'общий', '01'],
  ['confess', 'признания', '02'],
  ['stories', 'истории', '03'],
  ['memory', 'в этот день', '04'],
  ['birthdays', 'именины', '05'],
  ['inbox', 'личка', '06'],
];
const TOOLS = [
  ['poke', 'poke'], ['confess', 'confess'], ['crush', 'crush'], ['friend', 'friend'], ['wall', 'wall'],
  ['status', 'status'], ['vibe', 'vibecheck'], ['memory', 'memories'], ['day', 'birthday'], ['story', 'story'],
];
const PRIVACY = { all: 'открыта всем', friends: 'только друзья', none: 'закрыта' };
const MOODS = ['луна', 'тепло', 'сухо', 'тише', 'громко'];

const $ = id => document.getElementById(id);
const root = $('sd-root');
const els = { nav: $('sd-nav'), top: $('sd-top'), room: $('sd-room'), banner: $('sd-banner'), tools: $('sd-tools'), form: $('sd-form'), tabs: $('sd-tabs'), side: $('sd-side'), say: $('sd-say') };

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const btn = (act, id, label, on, cls = '') =>
  `<button type="button" class="sd-tap ${cls}" data-act="${act}" data-id="${esc(id)}" aria-pressed="${on ? 'true' : 'false'}">${label}</button>`;

/* ---------- saved state and virtual clock ---------- */
function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    const d = raw && raw.data;
    if (d && d.version === 1 && d.people && d.people.kira && d.inbox && d.inbox.kira && typeof raw.clock === 'number') return raw;
  } catch { /* private mode or broken json */ }
  return null;
}

const saved = load();
const base = saved ? saved.clock : E.SEED_AT;
const startedAt = Date.now();
const now = () => base + (Date.now() - startedAt);

const state = { data: saved ? saved.data : E.createInitial(), banner: START_BANNER };
state.data = E.tick(state.data, now());

const ui = {
  tool: 'poke',
  pane: 'room',
  pick: { poke: 'lera', crush: 'timur', friend: 'mark', status: 'lera', wall: null },
  mood: 'луна',
  reply: null,
  comment: null,
  views: null,
};

function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ clock: now(), data: state.data })); } catch { /* ignore */ }
}

function apply(fn) {
  const out = fn(state.data, now());
  state.data = out.data;
  state.banner = out.banner;
  save();
  renderAll(true);
}

function patch(partial) {
  state.data = { ...state.data, ...partial };
  save();
  renderAll(false);
}

/* ---------- helpers ---------- */
const nameOf = id => (id === 'vivian' ? 'Vivian' : state.data.people[id].name);
const others = () => E.MEMBERS.filter(id => id !== state.data.me);
function pickOf(tool) {
  const current = ui.pick[tool];
  return current && current !== state.data.me ? current : others()[0];
}
const peoplePick = (tool, includeMe) => {
  const d = state.data;
  const chosen = tool === 'wall' ? (ui.pick.wall || d.me) : pickOf(tool);
  return `<div class="sd-row" role="group" aria-label="Кого выбрать">${E.MEMBERS.filter(id => includeMe || id !== d.me)
    .map(id => btn('pick', id, esc(d.people[id].name), chosen === id, `" data-tool="${tool}`)).join('')}</div>`;
};

/* ---------- render: top, nav, tabs ---------- */
function waitingCount() {
  const d = state.data;
  return d.inbox[d.me].filter(item => (item.kind === 'friend' || item.kind === 'status') && !item.done).length;
}

function renderTop() {
  const d = state.data;
  const mood = E.temper(d, now());
  els.top.innerHTML = `
    <div class="sd-top-row">
      <p class="sd-label">vivian · ${esc(mood)}</p>
      <p class="sd-as">сидишь как <b>${esc(d.people[d.me].name)}</b></p>
    </div>
    <div class="sd-row" role="group" aria-label="За кого сидишь">${E.MEMBERS.map(id => btn('me', id, esc(d.people[id].name), d.me === id)).join('')}</div>
    <div class="sd-row sd-chips" role="group" aria-label="Каналы">${CHANNELS.map(([id, label]) =>
      btn('chan', id, esc(label) + (id === 'inbox' && waitingCount() ? ` ${waitingCount()}` : ''), d.channel === id && ui.pane === 'room')).join('')}</div>`;
}

function renderNav() {
  const d = state.data;
  const mood = E.temper(d, now());
  els.nav.innerHTML = `
    <p class="sd-label">сервер</p>
    <p class="sd-server">ночная</p>
    <div class="sd-col">${CHANNELS.map(([id, label, index]) =>
      btn('chan', id, `<span>${index} ${esc(label)}</span>${id === 'inbox' && waitingCount() ? `<span>${waitingCount()}</span>` : ''}`, d.channel === id, 'sd-wide')).join('')}</div>
    <div class="sd-nav-foot">
      ${btn('mod', 'mod', d.modMode ? 'журнал открыт' : 'журнал модера', d.modMode, 'sd-wide')}
      ${btn('reset', 'reset', 'сбросить стол', false, 'sd-wide')}
      <p class="sd-small">Vivian сейчас ${esc(mood)}. Уровни бесплатные, без кассы.</p>
    </div>`;
}

function renderTabs() {
  const d = state.data;
  els.tabs.innerHTML =
    btn('pane', 'room', 'комната', ui.pane === 'room') +
    btn('mod', 'mod', 'журнал', d.modMode) +
    btn('pane', 'card', 'карточка', ui.pane === 'card');
}

/* ---------- render: room ---------- */
function renderRoom(toBottom) {
  const d = state.data;
  const keep = els.room.scrollTop;
  let html = '';
  if (d.channel === 'general') html = roomGeneral(d);
  else if (d.channel === 'confess') html = roomConfess(d);
  else if (d.channel === 'stories') html = roomStories(d);
  else if (d.channel === 'memory') html = roomMemory(d);
  else if (d.channel === 'birthdays') html = roomBirthdays(d);
  else html = roomInbox(d);
  els.room.innerHTML = html;
  els.room.scrollTop = d.channel === 'general' && toBottom ? els.room.scrollHeight : keep;
}

function roomGeneral(d) {
  return d.chat.map(line => `
    <article class="${line.author === 'vivian' ? 'sd-card sd-vivian' : 'sd-line'}">
      <p class="sd-meta">${esc(nameOf(line.author))} · ${esc(E.formatWhen(line.at))}</p>
      <p class="${line.author === 'vivian' ? 'sd-serif' : 'sd-text'}">${esc(line.text)}</p>
    </article>`).join('');
}

function roomConfess(d) {
  const items = d.confessions.map(item => `
    <article class="sd-card">
      <p class="sd-meta">признание ${esc(item.n)}</p>
      <p class="sd-text">${esc(item.text)}</p>
      ${d.modMode ? `<p class="sd-accent">журнал, не канал: ${esc(d.people[item.author].name)}</p>` : ''}
      <div class="sd-thread">
        ${item.replies.map(reply => `<p class="sd-small-text"><span class="sd-muted">анонимно · </span>${esc(reply.text)}${d.modMode ? `<span class="sd-accent"> · журнал: ${esc(d.people[reply.author].name)}</span>` : ''}</p>`).join('')}
        ${ui.reply === item.id
          ? `<form class="sd-inline" data-form="reply" data-id="${esc(item.id)}"><input class="sd-field" name="text" aria-label="Ответ без имени" placeholder="ответ без имени" autocomplete="off" maxlength="300"><button class="sd-tap" aria-pressed="true" type="submit">ответить</button></form>`
          : btn('reply', item.id, 'ответить анонимно', false)}
      </div>
    </article>`).join('');
  const sealed = d.modMode ? `
    <section class="sd-card">
      <p class="sd-meta sd-accent">закрытый журнал</p>
      ${d.sealed.length === 0 ? '<p class="sd-small-text sd-muted">Попыток, которые я не пустила, пока нет.</p>' : ''}
      ${d.sealed.map(item => `<p class="sd-small-text">${esc(d.people[item.author].name)} · ${esc(item.where)}. ${esc(item.why)}</p>`).join('')}
    </section>` : '';
  return `<p class="sd-small-text sd-muted">В канале нет имён. Фильтр режет угрозы и удар по человеку до публикации. Автор остаётся только в журнале модерации.</p>${items}${sealed}`;
}

function roomStories(d) {
  const t = now();
  const live = d.stories.filter(story => story.expires > t);
  const cards = live.map(story => {
    const left = story.expires - t;
    const hours = Math.max(0, Math.floor(left / 3600000));
    const mins = Math.max(0, Math.floor((left % 3600000) / 60000));
    const mine = story.author === d.me;
    return `
    <article class="sd-card">
      <p class="sd-meta">${esc(d.people[story.author].name)} · ещё ${hours > 0 ? hours + ' ч ' : ''}${mins} мин</p>
      <p class="sd-serif sd-big">${esc(story.text)}</p>
      <div class="sd-row">
        ${btn('view', story.id, 'смотрел', false)}
        ${mine ? btn('views', story.id, `просмотры · ${story.views.length}`, ui.views === story.id) : ''}
      </div>
      ${mine && ui.views === story.id ? `<p class="sd-small-text sd-muted">${story.views.length ? esc(story.views.map(id => d.people[id].name).join(', ')) : 'пока никто. канал этого списка не видит.'}</p>` : ''}
    </article>`;
  }).join('');
  const ashes = d.ashes.map(ash => `<p class="sd-small-text sd-muted">история ${esc(d.people[ash.author].name)} сгорела. текст и список смотревших стёрты.</p>`).join('');
  return `
    <p class="sd-small-text sd-muted">Сутки, и текст сам пропадает. Список смотревших видит только автор.</p>
    ${live.length === 0 ? '<p class="sd-card sd-small-text sd-muted">Живых историй нет. Можно выложить свою.</p>' : ''}
    ${cards}${ashes}`;
}

function roomMemory(d) {
  return `
    <p class="sd-small-text sd-muted">Не вся лента. Только то, что в этот день в прошлые годы собрало реакции.</p>
    ${d.memories.length === 0 ? '<p class="sd-card sd-small-text sd-muted">Выпуск ещё не выложен. Кнопка memories now достанет самое залайканное.</p>' : ''}
    ${d.memories.map(item => `
      <article class="sd-card">
        <p class="sd-meta">${esc(E.formatWhen(item.originalAt))} · ${esc(d.people[item.author].name)} · ${esc(item.reactions)} реакций</p>
        <p class="sd-serif sd-big">${esc(item.text)}</p>
      </article>`).join('')}`;
}

function roomBirthdays(d) {
  const list = E.upcoming(d, now());
  return `
    ${d.parties.map(party => `
      <article class="sd-card">
        <p class="sd-serif sd-big">${esc(d.people[party.who].name)}, с днём.</p>
        <p class="sd-small-text sd-muted">Роль именинника на сутки. Потом сниму сама.</p>
      </article>`).join('')}
    ${list.length === 0 ? '<p class="sd-small-text sd-muted">Дней рождения ещё нет. Поставь свой: день и месяц.</p>' : ''}
    ${list.map(item => `<p class="sd-card sd-small-text">${esc(d.people[item.id].name)}<span class="sd-muted"> · ${esc(item.day)}.${esc(item.month)} · ${item.dist === 0 ? 'сегодня' : 'через ' + esc(item.dist) + ' дн.'}</span></p>`).join('')}`;
}

function roomInbox(d) {
  const items = d.inbox[d.me];
  if (!items.length) return '<p class="sd-card sd-small-text sd-muted">Личка пустая. Тычки, заявки, статусы и взаимные краши падают сюда, не в общий.</p>';
  return items.map(item => {
    let body = '';
    if (item.kind === 'poke' && item.from) {
      const who = d.people[item.from];
      body = `<p class="sd-serif sd-big">Тебя ${who.she ? 'ткнула' : 'ткнул'} ${esc(who.name)}.</p>${btn('pokeback', item.from, 'ткнуть в ответ', true)}`;
    } else if (item.kind === 'friend' && item.from) {
      body = `<p class="sd-serif sd-big">${esc(d.people[item.from].name)} хочет в друзья.</p>` + (item.done
        ? `<p class="sd-small-text sd-muted">${item.done === 'yes' ? 'принято, в обе стороны.' : 'отклонено. ему отдельное письмо не ушло.'}</p>`
        : `<div class="sd-row">${btn('friendyes', item.ref || '', 'принять', true)}${btn('friendno', item.ref || '', 'отклонить', false)}</div>`);
    } else if (item.kind === 'status' && item.from) {
      body = `<p class="sd-serif sd-big">${esc(d.people[item.from].name)} предлагает отношения.</p>` + (item.done
        ? `<p class="sd-small-text sd-muted">${item.done === 'yes' ? 'да. дата стоит у обоих.' : 'нет. профили чистые.'}</p>`
        : `<div class="sd-row">${btn('statusyes', item.ref || '', 'да', true)}${btn('statusno', item.ref || '', 'нет', false)}</div>`);
    } else if (item.kind === 'match' && item.with) {
      body = `<p class="sd-serif sd-big">Взаимно с ${esc(d.people[item.with].ins)}. В общий это не попадёт.</p>`;
    } else if (item.kind === 'note') {
      body = `<p class="sd-text">${esc(item.text)}</p>`;
    }
    return `<article class="sd-card">${body}</article>`;
  }).join('');
}

/* ---------- render: dock ---------- */
function updateBanner() { els.banner.textContent = state.banner; }

function renderTools() {
  els.tools.innerHTML = TOOLS.map(([id, label]) => btn('tool', id, '/' + esc(label), ui.tool === id)).join('');
  const d = state.data;
  let html = '';
  if (ui.tool === 'poke') {
    html = `${peoplePick('poke')}<div class="sd-row">${btn('poke', 'go', 'ткнуть', true)}${btn('pokestats', 'go', 'кого я тыкаю', false)}</div>`;
  } else if (ui.tool === 'confess') {
    html = `<form class="sd-stack" data-form="confess"><label class="sd-labelled"><span class="sd-meta">текст</span><textarea class="sd-field" name="text" rows="3" maxlength="500" placeholder="без имени. угрозы не пройдут"></textarea></label><button class="sd-tap sd-self" aria-pressed="true" type="submit">в канал признаний</button></form>`;
  } else if (ui.tool === 'crush') {
    html = `<p class="sd-small-text sd-muted">Ему ничего не придёт. Лимит — три в неделю. Взаимность только в личку.</p>${peoplePick('crush')}<div class="sd-row">${btn('crush', 'go', 'сохранить краш', true)}</div>`;
  } else if (ui.tool === 'friend') {
    const who = pickOf('friend');
    const mine = E.friendIds(d, d.me).map(id => d.people[id].name);
    const both = E.mutuals(d, d.me, who).map(id => d.people[id].name);
    html = `${peoplePick('friend')}<div class="sd-row">${btn('friendadd', 'go', 'заявка', true)}${btn('friendrm', 'go', 'убрать тихо', false)}</div>
      <p class="sd-small-text sd-muted">твои: ${mine.length ? esc(mine.join(', ')) : 'пока пусто'}. общие с ${esc(d.people[who].ins)}: ${both.length ? esc(both.join(', ')) : 'нет'}.</p>`;
  } else if (ui.tool === 'wall') {
    html = `${peoplePick('wall', true)}<form class="sd-stack" data-form="wall"><label class="sd-labelled"><span class="sd-meta">пост</span><input class="sd-field" name="text" maxlength="300" autocomplete="off" placeholder="на стену, если вы друзья или она открыта"></label>
      <div class="sd-row"><button class="sd-tap" aria-pressed="true" type="submit">записать</button>${btn('privacy', 'all', 'всем', d.people[d.me].wallPrivacy === 'all')}${btn('privacy', 'friends', 'друзьям', d.people[d.me].wallPrivacy === 'friends')}${btn('privacy', 'none', 'никому', d.people[d.me].wallPrivacy === 'none')}</div></form>`;
  } else if (ui.tool === 'status') {
    html = `${peoplePick('status')}<div class="sd-row">${btn('statuspropose', 'go', 'предложить отношения', true)}${btn('statussingle', 'go', 'снять статус', false)}</div>
      <form class="sd-inline" data-form="statustext"><input class="sd-field" name="text" maxlength="80" autocomplete="off" aria-label="Строка профиля" placeholder="короткий статус"><button class="sd-tap" aria-pressed="false" type="submit">поставить строку</button></form>
      <div class="sd-row">${MOODS.map(m => btn('mood', m, esc(m), ui.mood === m)).join('')}${btn('setmood', 'go', 'настроение', true)}</div>`;
  } else if (ui.tool === 'vibe') {
    html = `<div class="sd-row">${btn('vibe', 'go', 'снять мой вайб', true)}</div><p class="sd-small-text sd-muted">Только по сообщениям того, кто вызвал. Чужие без согласия не читаю.</p>`;
  } else if (ui.tool === 'memory') {
    html = `<div class="sd-row">${btn('memories', 'go', 'memories now', true)}</div>`;
  } else if (ui.tool === 'day') {
    html = `<form class="sd-inline sd-end" data-form="birthday"><label class="sd-narrow"><span class="sd-meta">день</span><input class="sd-field" name="day" inputmode="numeric" value="28"></label><label class="sd-narrow"><span class="sd-meta">месяц</span><input class="sd-field" name="month" inputmode="numeric" value="10"></label><button class="sd-tap" aria-pressed="true" type="submit">запомнить</button></form>`;
  } else if (ui.tool === 'story') {
    html = `<form class="sd-stack" data-form="story"><label class="sd-labelled"><span class="sd-meta">на сутки</span><textarea class="sd-field" name="text" rows="2" maxlength="300" placeholder="завтра этого текста не будет"></textarea></label><button class="sd-tap sd-self" aria-pressed="true" type="submit">выложить</button></form>`;
  }
  els.form.innerHTML = html;
  els.say.querySelector('input').placeholder = `сообщение или /poke ${d.people.lera.name}`;
}

/* ---------- render: card ---------- */
function pokeLine(title, rows, d) {
  return `<p class="sd-small-text"><span class="sd-muted">${title} </span>${rows.length ? esc(rows.slice(0, 3).map(([id, count]) => `${d.people[id].name} ${count}`).join(' · ')) : 'пока никто'}</p>`;
}

function renderCard() {
  const d = state.data;
  const t = now();
  const f = d.people[d.focus];
  const board = E.pokeBoard(d, f.id);
  const friends = E.friendIds(d, f.id);
  const posts = d.posts.filter(post => post.wall === f.id);
  const vibe = d.vibe[f.id];
  const rel = f.relationship;
  const mutual = d.me !== f.id && E.crushRevealed(d, d.me, f.id);
  els.side.innerHTML = `
    <div class="sd-row" role="group" aria-label="Чью карточку смотреть">${Object.values(d.people).map(p => btn('focus', p.id, esc(p.name), d.focus === p.id)).join('')}</div>
    <section class="sd-card">
      <p class="sd-meta">${esc(f.mood)}</p>
      <h2 class="sd-name">${esc(f.name)}</h2>
      <p class="sd-small-text">${esc(f.statusText)}</p>
      <p class="sd-small-text sd-muted">${esc(f.line)}</p>
      <p class="sd-small-text">${rel ? `в отношениях с ${esc(d.people[rel.with].ins)} · с ${esc(E.formatWhen(rel.since))}` : (f.she ? 'свободна' : 'свободен')}</p>
      ${mutual ? '<p class="sd-small-text sd-accent">краш взаимный. кроме вас двоих и лички этого нет.</p>' : ''}
      ${f.birthdayRoleUntil && f.birthdayRoleUntil > t ? '<p class="sd-small-text sd-accent">роль именинника ещё держится.</p>' : ''}
      <p class="sd-small-text sd-muted">друзья ${friends.length} · стена ${PRIVACY[f.wallPrivacy]}${f.birthday ? ` · день ${esc(f.birthday.day)}.${esc(f.birthday.month)}` : ''}</p>
    </section>
    ${vibe && f.id === d.me ? `
    <section class="sd-card">
      <p class="sd-meta">вайб · ${esc(vibe.score)}/100</p>
      <p class="sd-serif sd-big">${esc(vibe.archetype)}</p>
      <p class="sd-small-text">${esc(vibe.joke)}</p>
      <p class="sd-small-text sd-muted">ночь ${esc(vibe.night)}% · длина ${esc(vibe.talk)} · соль ${esc(vibe.salt)}%</p>
    </section>` : ''}
    <section class="sd-card">
      <p class="sd-meta">я помню</p>
      <ul class="sd-notes">${f.notes.map(note => `<li class="sd-small-text">${esc(note)}</li>`).join('')}</ul>
    </section>
    <section class="sd-card">
      <p class="sd-meta">тычки</p>
      ${pokeLine('тыкает', board.out, d)}
      ${pokeLine('тыкают', board.inn, d)}
    </section>
    <section class="sd-stack">
      <p class="sd-meta">стена</p>
      ${posts.length === 0 ? '<p class="sd-small-text sd-muted">Пока пусто. Друзья пишут, если стена их пускает.</p>' : ''}
      ${posts.map(post => `
        <article class="sd-card">
          <p class="sd-meta">${esc(d.people[post.author].name)} · ${esc(E.formatWhen(post.at))}</p>
          <p class="sd-small-text">${esc(post.text)}</p>
          <div class="sd-row">
            ${btn('like', post.id, `лайк ${post.likes.length}`, false)}
            ${btn('commenttoggle', post.id, 'коммент', ui.comment === post.id)}
            ${d.me === post.wall || d.me === post.author ? btn('del', post.id, 'снять', false) : ''}
          </div>
          ${post.comments.map(c => `<p class="sd-small-text sd-muted">${esc(d.people[c.author].name)}: <span class="sd-ink">${esc(c.text)}</span></p>`).join('')}
          ${ui.comment === post.id ? `<form class="sd-inline" data-form="comment" data-id="${esc(post.id)}"><input class="sd-field" name="text" aria-label="Комментарий" placeholder="коротко" autocomplete="off" maxlength="200"><button class="sd-tap" aria-pressed="true" type="submit">ок</button></form>` : ''}
        </article>`).join('')}
    </section>
    ${friends.length ? `<p class="sd-small-text sd-muted">друзья ${esc(f.name)}: ${esc(friends.map(id => d.people[id].name).join(', '))}</p>` : ''}`;
}

/* ---------- render all ---------- */
function renderAll(toBottom) {
  root.dataset.pane = ui.pane;
  renderTop();
  renderNav();
  renderTabs();
  renderRoom(toBottom);
  renderTools();
  renderCard();
  updateBanner();
}

/* ---------- events ---------- */
root.addEventListener('click', event => {
  const el = event.target.closest('[data-act]');
  if (!el || !root.contains(el)) return;
  const act = el.dataset.act;
  const id = el.dataset.id;
  const d = state.data;

  switch (act) {
    case 'me':
      ui.reply = null; ui.comment = null; ui.views = null; ui.pick.wall = null;
      patch({ me: id, focus: id });
      break;
    case 'chan':
      ui.pane = 'room'; ui.reply = null; ui.views = null;
      patch({ channel: id });
      break;
    case 'focus': ui.comment = null; patch({ focus: id }); break;
    case 'pane': ui.pane = id; renderAll(false); break;
    case 'mod': patch({ modMode: !d.modMode }); break;
    case 'reset': {
      state.data = E.createInitial();
      state.banner = 'сервер чистый, как после перезапуска. память людей я тоже стёрла.';
      Object.assign(ui, { reply: null, comment: null, views: null });
      ui.pick.wall = null;
      save();
      renderAll(true);
      break;
    }
    case 'tool': ui.tool = ui.tool === id ? null : id; renderTools(); break;
    case 'pick': {
      const tool = el.dataset.tool;
      ui.pick[tool] = id;
      renderTools();
      break;
    }
    case 'mood': ui.mood = id; renderTools(); break;
    case 'poke': apply((data, t) => E.poke(data, data.me, pickOf('poke'), t)); break;
    case 'pokestats': apply((data, t) => E.speak(data, '/poke stats', t)); break;
    case 'crush': apply((data, t) => E.crush(data, data.me, pickOf('crush'), t)); break;
    case 'friendadd': apply((data, t) => E.friendAdd(data, data.me, pickOf('friend'), t)); break;
    case 'friendrm': apply(data => E.friendRemove(data, data.me, pickOf('friend'))); break;
    case 'privacy': apply(data => E.wallPrivacy(data, data.me, id)); break;
    case 'statuspropose': apply((data, t) => E.statusPropose(data, data.me, pickOf('status'), t)); break;
    case 'statussingle': apply((data, t) => E.statusSingle(data, data.me, t)); break;
    case 'setmood': apply(data => E.statusMood(data, data.me, ui.mood)); break;
    case 'vibe': apply((data, t) => E.vibecheck(data, data.me, t)); break;
    case 'memories': apply((data, t) => E.memoriesNow(data, t)); break;
    case 'reply': ui.reply = id; renderRoom(false); break;
    case 'view': apply(data => E.storyView(data, data.me, id)); break;
    case 'views': ui.views = ui.views === id ? null : id; renderRoom(false); break;
    case 'pokeback': apply((data, t) => E.poke(data, data.me, id, t)); break;
    case 'friendyes': apply((data, t) => E.friendAnswer(data, data.me, id, true, t)); break;
    case 'friendno': apply((data, t) => E.friendAnswer(data, data.me, id, false, t)); break;
    case 'statusyes': apply((data, t) => E.statusAnswer(data, data.me, id, true, t)); break;
    case 'statusno': apply((data, t) => E.statusAnswer(data, data.me, id, false, t)); break;
    case 'like': apply(data => E.wallLike(data, data.me, id)); break;
    case 'commenttoggle': ui.comment = ui.comment === id ? null : id; renderCard(); break;
    case 'del': apply(data => E.wallDelete(data, data.me, id)); break;
    default: break;
  }
});

root.addEventListener('submit', event => {
  const form = event.target.closest('form[data-form]');
  if (!form) return;
  event.preventDefault();
  const kind = form.dataset.form;
  const text = String(new FormData(form).get('text') ?? '');
  const id = form.dataset.id;

  switch (kind) {
    case 'say': apply((data, t) => E.speak(data, text, t)); form.reset(); break;
    case 'confess': apply((data, t) => E.confess(data, data.me, text, t)); break;
    case 'reply': ui.reply = null; apply((data, t) => E.replyConfess(data, id, data.me, text, t)); break;
    case 'wall': apply((data, t) => E.wallPost(data, data.me, ui.pick.wall || data.me, text, t)); break;
    case 'statustext': apply(data => E.statusText(data, data.me, text)); break;
    case 'story': apply((data, t) => E.storyPost(data, data.me, text, t)); break;
    case 'comment': ui.comment = null; apply((data, t) => E.wallComment(data, data.me, id, text, t)); break;
    case 'birthday': {
      const fd = new FormData(form);
      apply((data, t) => E.birthdaySet(data, data.me, Number(fd.get('day')), Number(fd.get('month')), undefined, t));
      break;
    }
    default: break;
  }
});

/* ---------- clock: stories expire, birthdays fire ---------- */
window.setInterval(() => {
  const next = E.tick(state.data, now());
  if (next !== state.data) {
    state.data = next;
    save();
    renderAll(false);
  } else if (state.data.channel === 'stories') {
    renderRoom(false);
  }
}, 15000);

renderAll(true);
