export const MEMBERS = ["kira", "mark", "lera", "timur", "sofa", "nika", "artem"];
export const SEED_AT = Date.UTC(2026, 9, 28, 18, 30, 0);
const POKE_MS = 60000;
const CRUSH_WINDOW = 7 * 24 * 60 * 60 * 1000;
const CRUSH_LIMIT = 3;
const VIBE_MS = 60 * 60 * 1000;
const STORY_MS = 24 * 60 * 60 * 1000;
const ROLE_MS = 24 * 60 * 60 * 1000;
const CONFESS_MS = 30000;
const THREAT = /(убью|убить\s+тебя|сдохни|kys|вычисл\w+|твой\s+адрес|докси|найду\s+тебя|расправ\w+|самоубий|повесься)/i;
const INSULT = /(дебил\w*|идиот\w*|урод\w*|мразь|тварь|еблан\w*|тупиц\w*|нигер\w*|пидор\w*|хохол\w*|шлюх\w*)/i;
const LAUGH = /(ахах|хаха|шутк|кек|лол|ржу)/i;
let seq = 100;
function uid(prefix) {
    seq += 1;
    return `${prefix}-${seq.toString(36)}`;
}
export function rigaParts(now) {
    const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Riga",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        hourCycle: "h23",
        minute: "2-digit",
    });
    const bag = Object.fromEntries(fmt.formatToParts(now).map((part) => [part.type, part.value]));
    return {
        day: Number(bag.day),
        month: Number(bag.month),
        year: Number(bag.year),
        hour: Number(bag.hour),
        minute: Number(bag.minute),
    };
}
export function formatWhen(at) {
    return new Intl.DateTimeFormat("ru-RU", {
        timeZone: "Europe/Riga",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    }).format(at);
}
function person(partial) {
    return partial;
}
function emptyInbox() {
    return { kira: [], mark: [], lera: [], timur: [], sofa: [], nika: [], artem: [] };
}
export function createInitial() {
    const people = {
        kira: person({
            id: "kira",
            name: "Кира",
            acc: "Киру",
            ins: "Кирой",
            she: true,
            line: "пишет коротко и почти всегда ночью",
            statusText: "не обещаю ответить до утра",
            mood: "луна",
            wallPrivacy: "friends",
            birthday: null,
            birthdayRoleUntil: null,
            celebratedYear: null,
            relationship: null,
            notes: ["кота зовут Граф, орёт под утро", "работа съедает день, остаётся ночь"],
            lines: [
                { text: "не сплю, граф орёт как будто ему платят", at: Date.UTC(2026, 9, 27, 21, 15, 0), reactions: 3 },
                { text: "если ещё один голосовой, я уйду в текст", at: Date.UTC(2026, 9, 27, 22, 40, 0), reactions: 2 },
                { text: "лера, ты нормальная. остальные — шум", at: Date.UTC(2026, 9, 28, 1, 5, 0), reactions: 4 },
                { text: "спасибо, что не спрашиваешь как дела каждые пять минут", at: Date.UTC(2026, 9, 28, 18, 10, 0), reactions: 1 },
                { text: "работа опять сожрала день. осталась ночь и кот", at: Date.UTC(2026, 9, 28, 18, 22, 0), reactions: 5 },
            ],
        }),
        mark: person({
            id: "mark",
            name: "Марк",
            acc: "Марка",
            ins: "Марком",
            she: false,
            line: "спорит с мебелью и с правилами",
            statusText: "если я молчу, я всё равно читаю",
            mood: "сухо",
            wallPrivacy: "none",
            birthday: { day: 30, month: 10 },
            birthdayRoleUntil: null,
            celebratedYear: null,
            relationship: null,
            notes: ["любит спорить, но извиняется первым"],
            lines: [
                { text: "кто поставил чайник и ушёл, я вас найду юридически", at: SEED_AT - 80 * 60000, reactions: 6 },
                { text: "это не драма, это регламент", at: SEED_AT - 20 * 60000, reactions: 1 },
            ],
        }),
        lera: person({
            id: "lera",
            name: "Лера",
            acc: "Леру",
            ins: "Лерой",
            she: true,
            line: "держит кухню и чужие нервы",
            statusText: "на кухне, если кто живой",
            mood: "тепло",
            wallPrivacy: "all",
            birthday: { day: 3, month: 11 },
            birthdayRoleUntil: null,
            celebratedYear: null,
            relationship: null,
            notes: ["помнит, кто ел и кто молчал"],
            lines: [
                { text: "я на кухне. если кто живой — приходите текстом", at: SEED_AT - 70 * 60000, reactions: 4 },
                { text: "марк опять спорит с мебелью, я ставлю ему чай", at: SEED_AT - 22 * 60000, reactions: 3 },
                { text: "спасибо, что досидели. это уже почти забота", at: SEED_AT - 6 * 60000, reactions: 2 },
            ],
        }),
        timur: person({
            id: "timur",
            name: "Тимур",
            acc: "Тимура",
            ins: "Тимуром",
            she: false,
            line: "заходит молча и остаётся",
            statusText: "я просто мимо",
            mood: "тихо",
            wallPrivacy: "friends",
            birthday: { day: 14, month: 12 },
            birthdayRoleUntil: null,
            celebratedYear: null,
            relationship: null,
            notes: ["не любит, когда его зовут громко"],
            lines: [
                { text: "кира, ты тут? можно не отвечать", at: SEED_AT - 90 * 60000, reactions: 1 },
                { text: "я не навязываюсь. просто свет в чате приятный", at: SEED_AT - 30 * 60000, reactions: 2 },
                { text: "спокойной, если услышишь", at: SEED_AT - 4 * 60000, reactions: 1 },
            ],
        }),
        sofa: person({
            id: "sofa",
            name: "Софа",
            acc: "Софу",
            ins: "Софой",
            she: true,
            line: "собирает плейлисты и чужие истории",
            statusText: "плейлист на смену, не трогать",
            mood: "громко",
            wallPrivacy: "all",
            birthday: { day: 19, month: 1 },
            birthdayRoleUntil: null,
            celebratedYear: null,
            relationship: null,
            notes: ["ставит музыку, когда в чате тяжело"],
            lines: [
                { text: "вот трек, после которого нельзя писать злые сообщения", at: SEED_AT - 100 * 60000, reactions: 8 },
                { text: "ахах марк, регламент не пьёт чай, пей сам", at: SEED_AT - 18 * 60000, reactions: 5 },
            ],
        }),
        nika: person({
            id: "nika",
            name: "Ника",
            acc: "Нику",
            ins: "Никой",
            she: true,
            line: "может молчать так, что это слышно",
            statusText: "сегодня мало слов",
            mood: "тише",
            wallPrivacy: "friends",
            birthday: { day: 2, month: 11 },
            birthdayRoleUntil: null,
            celebratedYear: null,
            relationship: null,
            notes: ["молчит не потому что злится"],
            lines: [
                { text: "я тут. просто без текста", at: SEED_AT - 120 * 60000, reactions: 2 },
                { text: "если никто не пишет, это тоже вечер, не авария", at: SEED_AT - 12 * 60000, reactions: 3 },
            ],
        }),
        artem: person({
            id: "artem",
            name: "Артём",
            acc: "Артёма",
            ins: "Артёмом",
            she: false,
            line: "включает войс и сразу выключает",
            statusText: "голос потом",
            mood: "сбоку",
            wallPrivacy: "friends",
            birthday: { day: 8, month: 8 },
            birthdayRoleUntil: null,
            celebratedYear: null,
            relationship: null,
            notes: ["боится, что голос смешной"],
            lines: [
                { text: "зайду в войс на минуту и выйду, не встречайте", at: SEED_AT - 200 * 60000, reactions: 2 },
                { text: "я лучше текстом. так я хотя бы похож на себя", at: SEED_AT - 60 * 60000, reactions: 4 },
            ],
        }),
    };
    const inbox = emptyInbox();
    inbox.kira = [
        { id: "in-poke-lera", kind: "poke", from: "lera", at: SEED_AT - 15 * 60000 },
        { id: "in-friend-mark", kind: "friend", from: "mark", ref: "fr-mark", at: SEED_AT - 3 * 60 * 60000 },
    ];
    return {
        version: 1,
        me: "kira",
        focus: "kira",
        channel: "general",
        modMode: false,
        people,
        friends: [
            { id: "fr-lera", from: "lera", to: "kira", at: SEED_AT - 20 * 86400000, status: "accepted" },
            { id: "fr-mark", from: "mark", to: "kira", at: SEED_AT - 3 * 60 * 60000, status: "pending" },
            { id: "fr-sofa-lera", from: "sofa", to: "lera", at: SEED_AT - 12 * 86400000, status: "accepted" },
            { id: "fr-nika-sofa", from: "nika", to: "sofa", at: SEED_AT - 9 * 86400000, status: "accepted" },
            { id: "fr-artem", from: "artem", to: "timur", at: SEED_AT - 4 * 86400000, status: "accepted" },
            { id: "fr-tim-lera", from: "timur", to: "lera", at: SEED_AT - 6 * 86400000, status: "accepted" },
        ],
        pokes: [
            { id: "pk1", from: "lera", to: "kira", at: SEED_AT - 15 * 60000 },
            { id: "pk2", from: "kira", to: "lera", at: SEED_AT - 2 * 86400000 },
            { id: "pk3", from: "kira", to: "lera", at: SEED_AT - 3 * 86400000 },
            { id: "pk4", from: "mark", to: "kira", at: SEED_AT - 5 * 86400000 },
        ],
        crushes: [{ from: "timur", to: "kira", at: SEED_AT - 2 * 86400000, revealed: false }],
        posts: [
            {
                id: "post-lera",
                wall: "kira",
                author: "lera",
                text: "ты опять пропала красиво. граф передаёт, что ты врёшь про сон.",
                at: SEED_AT - 5 * 60 * 60000,
                likes: ["sofa", "nika"],
                comments: [
                    { id: "cm1", author: "kira", text: "граф стучит. я честная хотя бы с ним.", at: SEED_AT - 4 * 60 * 60000 },
                ],
            },
            {
                id: "post-self",
                wall: "kira",
                author: "kira",
                text: "стена для своих. чужим сюда не надо.",
                at: SEED_AT - 9 * 86400000,
                likes: ["lera"],
                comments: [],
            },
            {
                id: "post-sofa",
                wall: "sofa",
                author: "mark",
                text: "твой плейлист вчера спас смену. регламент это признаёт.",
                at: SEED_AT - 86400000,
                likes: ["sofa", "lera", "artem"],
                comments: [],
            },
        ],
        confessions: [
            {
                id: "cf45",
                n: 45,
                author: "artem",
                text: "я включаю войс и сразу выключаю. боюсь, что голос смешной.",
                at: SEED_AT - 2 * 86400000,
                replies: [
                    { id: "cfr1", author: "lera", text: "текст у тебя теплее, чем ты думаешь. голос подождёт.", at: SEED_AT - 86400000 },
                ],
            },
            {
                id: "cf46",
                n: 46,
                author: "nika",
                text: "мне нравится, как здесь можно молчать, и это не считается смертью.",
                at: SEED_AT - 6 * 60 * 60000,
                replies: [],
            },
        ],
        stories: [
            {
                id: "story-sofa",
                author: "sofa",
                text: "смена кончилась, город мокрый, трек на повторе. завтра сотру.",
                at: SEED_AT - 2 * 60 * 60000,
                expires: SEED_AT + 20 * 60 * 60000,
                views: ["lera", "mark"],
            },
            {
                id: "story-short",
                author: "nika",
                text: "эта сгорит при вас. так видно, что сутки — не декорация.",
                at: SEED_AT,
                expires: 0,
                views: [],
            },
        ],
        chat: [
            {
                id: "c0",
                author: "vivian",
                text: "я тут. не тамагочи и не касса за уровни. тыкаете — считаю. травлите анонимно — не пускаю. краш молчит, пока он не взаимный.",
                at: SEED_AT - 3 * 60 * 60000,
            },
            {
                id: "c1",
                author: "lera",
                text: "я на кухне. если кто живой — приходите текстом.",
                at: SEED_AT - 70 * 60000,
            },
            {
                id: "c2",
                author: "kira",
                text: "не сплю, граф орёт как будто ему платят.",
                at: SEED_AT - 50 * 60000,
            },
            {
                id: "c3",
                author: "vivian",
                text: "граф опять на посту. кира, в прошлый раз ты говорила, что он начинает в четыре. я не забыла.",
                at: SEED_AT - 49 * 60000,
            },
            {
                id: "c4",
                author: "sofa",
                text: "ахах марк, регламент не пьёт чай, пей сам.",
                at: SEED_AT - 18 * 60000,
            },
        ],
        archive: [
            {
                author: "lera",
                text: "мы тогда впервые досидели до утра, и никто не поругался. даже марк.",
                at: Date.UTC(2025, 9, 28, 20, 10, 0),
                reactions: 12,
            },
            {
                author: "mark",
                text: "кто съел торт прямо в голосовом. я видел крошки на уставе.",
                at: Date.UTC(2025, 9, 28, 21, 40, 0),
                reactions: 7,
            },
            {
                author: "artem",
                text: "первый день сервера. все пишут привет, как в лифте.",
                at: Date.UTC(2024, 9, 28, 16, 0, 0),
                reactions: 4,
            },
            {
                author: "nika",
                text: "вчера было тихо, и это было лучшее сообщение года.",
                at: Date.UTC(2025, 9, 27, 19, 0, 0),
                reactions: 3,
            },
        ],
        memories: [],
        inbox,
        vibe: {},
        confessN: 46,
        lastConfess: {},
        armedShort: false,
        pendingStatus: [],
        sealed: [],
        ashes: [],
        parties: [],
    };
}
export function areFriends(data, a, b) {
    return data.friends.some((edge) => edge.status === "accepted" &&
        ((edge.from === a && edge.to === b) || (edge.from === b && edge.to === a)));
}
export function friendIds(data, id) {
    const set = new Set();
    for (const edge of data.friends) {
        if (edge.status !== "accepted")
            continue;
        if (edge.from === id)
            set.add(edge.to);
        if (edge.to === id)
            set.add(edge.from);
    }
    return [...set];
}
export function mutuals(data, a, b) {
    const other = new Set(friendIds(data, b));
    return friendIds(data, a).filter((id) => other.has(id));
}
export function crushRevealed(data, a, b) {
    return (data.crushes.some((c) => c.from === a && c.to === b && c.revealed) &&
        data.crushes.some((c) => c.from === b && c.to === a && c.revealed));
}
export function pokeBoard(data, id) {
    const out = new Map();
    const inn = new Map();
    for (const poke of data.pokes) {
        if (poke.from === id)
            out.set(poke.to, (out.get(poke.to) ?? 0) + 1);
        if (poke.to === id)
            inn.set(poke.from, (inn.get(poke.from) ?? 0) + 1);
    }
    const sort = (map) => [...map.entries()].sort((a, b) => b[1] - a[1]);
    return { out: sort(out), inn: sort(inn) };
}
function doy(month, day) {
    const md = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let n = day;
    for (let m = 1; m < month; m += 1)
        n += md[m] ?? 0;
    return n;
}
export function upcoming(data, now) {
    const today = rigaParts(now);
    return MEMBERS.flatMap((id) => {
        const birthday = data.people[id].birthday;
        if (!birthday)
            return [];
        const start = doy(today.month, today.day);
        let end = doy(birthday.month, birthday.day);
        if (end < start)
            end += 365;
        return [{ id, ...birthday, dist: end - start }];
    }).sort((a, b) => a.dist - b.dist);
}
function namesOf(data) {
    return MEMBERS.map((id) => data.people[id].name);
}
function aimedAtSomeone(data, text) {
    const lower = text.toLowerCase();
    if (/(^|[\s,])(ты|вы|тебя|вас)([\s,!?.]|$)/i.test(text))
        return true;
    return namesOf(data).some((name) => lower.includes(name.toLowerCase()));
}
function mentionedFriends(data, author, text) {
    const lower = text.toLowerCase();
    return namesOf(data).some((name) => {
        if (!lower.includes(name.toLowerCase()))
            return false;
        const id = MEMBERS.find((item) => data.people[item].name === name);
        return id !== undefined && id !== author && areFriends(data, author, id);
    });
}
export function screenPublic(text, data) {
    const clean = text.trim();
    if (clean.length < 2)
        return { ok: false, why: "пустое я не вешаю." };
    if (clean.length > 500)
        return { ok: false, why: "слишком длинно. скажи короче, я не архив." };
    if (THREAT.test(clean)) {
        return { ok: false, why: "угрозы я не публикую. попытка легла в закрытый журнал, в канал — нет." };
    }
    if (INSULT.test(clean) && aimedAtSomeone(data, clean)) {
        return {
            ok: false,
            why: "это удар, не признание. шутки между своими живут в общем чате, не в анонимной витрине.",
        };
    }
    return { ok: true };
}
export function screenChat(data, author, text) {
    const clean = text.trim();
    if (!clean)
        return { ok: false, why: "пусто." };
    if (clean.length > 500)
        return { ok: false, why: "слишком длинно для одной реплики." };
    if (THREAT.test(clean)) {
        return { ok: false, why: "угрозу в чат не кладу. это не остроумие, и в журнале модерации она уже есть." };
    }
    if (INSULT.test(clean) && aimedAtSomeone(data, clean)) {
        if (LAUGH.test(clean) && mentionedFriends(data, author, clean))
            return { ok: true };
        return {
            ok: false,
            why: "похоже на травлю, не на шум. если это шутка со своим — пусть в тексте будет видно, что шутка. чужим так нельзя.",
        };
    }
    return { ok: true };
}
function seal(data, author, text, at, why, where) {
    return {
        ...data,
        sealed: [{ id: uid("seal"), author, text: text.slice(0, 500), at, why, where }, ...data.sealed].slice(0, 40),
    };
}
function say(data, text, at, author = "vivian") {
    return {
        ...data,
        chat: [...data.chat, { id: uid("c"), author, text, at }].slice(-120),
    };
}
function pushInbox(data, who, item) {
    return {
        ...data,
        inbox: { ...data.inbox, [who]: [item, ...data.inbox[who]].slice(0, 60) },
    };
}
function remember(personRow, text) {
    const notes = [...personRow.notes];
    const cat = text.match(/кота?\s+зовут\s+([а-яёa-z-]{2,20})/i);
    if (cat?.[1])
        notes.unshift(`кота зовут ${cat[1]}`);
    if (/работ/.test(text.toLowerCase()))
        notes.unshift("снова про работу");
    if (/не сплю|бессон|ночью/.test(text.toLowerCase()))
        notes.unshift("опять не спит");
    const unique = [...new Set(notes)].slice(0, 8);
    return { ...personRow, notes: unique, lines: [...personRow.lines, { text, at: Date.now(), reactions: 0 }].slice(-50) };
}
function withPerson(data, id, personRow) {
    return { ...data, people: { ...data.people, [id]: personRow } };
}
export function findMember(data, raw) {
    const q = raw.trim().replace(/^@/, "").toLowerCase();
    if (!q)
        return null;
    return (MEMBERS.find((id) => data.people[id].name.toLowerCase() === q || id === q) ??
        MEMBERS.find((id) => data.people[id].name.toLowerCase().startsWith(q)) ??
        null);
}
export function poke(data, from, to, now) {
    if (from === to)
        return { data, banner: "себя не тыкаю. это зеркало, не игра." };
    const recent = data.pokes.find((item) => item.from === from && item.to === to && now - item.at < POKE_MS);
    if (recent) {
        const left = Math.max(1, Math.ceil((POKE_MS - (now - recent.at)) / 1000));
        return { data, banner: `минута на одного человека. ещё ${left} с. я не кнопка.` };
    }
    const who = data.people[from];
    let next = {
        ...data,
        pokes: [{ id: uid("poke"), from, to, at: now }, ...data.pokes].slice(0, 400),
    };
    next = pushInbox(next, to, { id: uid("in"), kind: "poke", from, at: now });
    next = say(next, `${who.name} ${who.she ? "ткнула" : "ткнул"} ${data.people[to].acc}. ответ лежит в личке, не в общий крик.`, now);
    next = { ...next, channel: "inbox" };
    return { data: next, banner: `тычок ушёл ${data.people[to].name}. в счётчик пары +1.` };
}
export function confess(data, author, text, now) {
    const verdict = screenPublic(text, data);
    if (!verdict.ok) {
        return { data: seal(data, author, text, now, verdict.why, "признание"), banner: verdict.why };
    }
    const last = data.lastConfess[author] ?? 0;
    if (now - last < CONFESS_MS) {
        return { data, banner: "подожди полминуты. анонимность не любит очередь из одного человека." };
    }
    const n = data.confessN + 1;
    const item = {
        id: uid("cf"),
        n,
        author,
        text: text.trim(),
        at: now,
        replies: [],
    };
    return {
        data: {
            ...data,
            confessN: n,
            lastConfess: { ...data.lastConfess, [author]: now },
            confessions: [item, ...data.confessions],
            channel: "confess",
        },
        banner: `признание ${n} в канале. тебя там нет. в журнале — есть, на случай травли.`,
    };
}
export function replyConfess(data, id, author, text, now) {
    const verdict = screenPublic(text, data);
    if (!verdict.ok)
        return { data: seal(data, author, text, now, verdict.why, "ответ"), banner: verdict.why };
    const index = data.confessions.findIndex((item) => item.id === id);
    if (index < 0)
        return { data, banner: "этого признания уже нет." };
    const current = data.confessions[index];
    if (!current)
        return { data, banner: "этого признания уже нет." };
    const replies = [...current.replies, { id: uid("r"), author, text: text.trim(), at: now }];
    const confessions = data.confessions.slice();
    confessions[index] = { ...current, replies };
    return {
        data: { ...data, confessions, channel: "confess" },
        banner: "ответ лёг в ветку. снова без имени.",
    };
}
export function crush(data, from, to, now) {
    if (from === to)
        return { data, banner: "на себя краш не ставится. я не буду это хранить." };
    if (data.crushes.some((item) => item.from === from && item.to === to)) {
        return { data, banner: "этот краш уже лежит. тихо, как и должен." };
    }
    const used = data.crushes.filter((item) => item.from === from && now - item.at < CRUSH_WINDOW).length;
    if (used >= CRUSH_LIMIT) {
        return { data, banner: "три краша в неделю. я не доска объявлений." };
    }
    const nextCrushes = [...data.crushes, { from, to, at: now, revealed: false }];
    const back = nextCrushes.find((item) => item.from === to && item.to === from);
    if (!back) {
        return {
            data: { ...data, crushes: nextCrushes },
            banner: `${data.people[to].name} ничего не получит. если ответит тем же — напишу вам обоим. если нет, этого не было.`,
        };
    }
    const crushes = nextCrushes.map((item) => (item.from === from && item.to === to) || (item.from === to && item.to === from)
        ? { ...item, revealed: true }
        : item);
    let next = { ...data, crushes, channel: "inbox" };
    next = pushInbox(next, from, { id: uid("in"), kind: "match", with: to, at: now });
    next = pushInbox(next, to, { id: uid("in"), kind: "match", with: from, at: now });
    return { data: next, banner: "взаимно. написала обоим в личку и в общий не вынесла." };
}
export function friendAdd(data, from, to, now) {
    if (from === to)
        return { data, banner: "с собой дружить не надо, я и так тебя помню." };
    if (areFriends(data, from, to))
        return { data, banner: "вы уже друзья. вторая заявка ничего не добавит." };
    const pending = data.friends.find((edge) => edge.status === "pending" &&
        ((edge.from === from && edge.to === to) || (edge.from === to && edge.to === from)));
    if (pending) {
        return { data, banner: "заявка уже висит. пусть второй нажмёт сам." };
    }
    const id = uid("fr");
    let next = {
        ...data,
        friends: [...data.friends, { id, from, to, at: now, status: "pending" }],
    };
    next = pushInbox(next, to, { id: uid("in"), kind: "friend", from, ref: id, at: now });
    return { data: next, banner: `заявку отправила ${data.people[to].name}. я за него дружить не буду.` };
}
export function friendAnswer(data, actor, reqId, yes, now) {
    const edge = data.friends.find((item) => item.id === reqId);
    if (!edge || edge.status !== "pending")
        return { data, banner: "заявка уже закрыта." };
    if (edge.to !== actor)
        return { data, banner: "это не твоя кнопка." };
    const friends = data.friends.map((item) => item.id === reqId ? { ...item, status: yes ? "accepted" : "declined" } : item);
    const inbox = { ...data.inbox };
    inbox[actor] = inbox[actor].map((item) => item.ref === reqId && item.kind === "friend" ? { ...item, done: yes ? "yes" : "no" } : item);
    const banner = yes
        ? `записала дружбу в обе стороны: ${data.people[edge.from].name} и ${data.people[actor].name}.`
        : "отклонила тихо. отправителю отдельную драму не шлю.";
    return { data: { ...data, friends, inbox }, banner };
}
export function friendRemove(data, actor, other) {
    if (!areFriends(data, actor, other))
        return { data, banner: "вас и так нет в друзьях." };
    return {
        data: {
            ...data,
            friends: data.friends.filter((edge) => !(edge.status === "accepted" &&
                ((edge.from === actor && edge.to === other) || (edge.from === other && edge.to === actor)))),
        },
        banner: `убрала ${data.people[other].acc} из друзей. второй ничего не получит.`,
    };
}
export function canPost(data, author, wall) {
    if (author === wall)
        return true;
    const privacy = data.people[wall].wallPrivacy;
    if (privacy === "all")
        return true;
    if (privacy === "friends")
        return areFriends(data, author, wall);
    return false;
}
export function wallPost(data, author, wall, text, now) {
    const verdict = screenPublic(text, data);
    if (!verdict.ok)
        return { data: seal(data, author, text, now, verdict.why, "стена"), banner: verdict.why };
    if (!canPost(data, author, wall)) {
        const privacy = data.people[wall].wallPrivacy;
        const why = privacy === "none"
            ? "стена закрыта совсем. даже друзьям сюда нельзя."
            : "стена только для друзей. сначала заявка, потом граффити.";
        return { data, banner: why };
    }
    const post = {
        id: uid("post"),
        wall,
        author,
        text: text.trim(),
        at: now,
        likes: [],
        comments: [],
    };
    return {
        data: { ...data, posts: [post, ...data.posts], focus: wall },
        banner: wall === author ? "записала тебе на стену." : `пост лёг на стену ${data.people[wall].name}.`,
    };
}
export function wallLike(data, actor, postId) {
    const posts = data.posts.map((post) => {
        if (post.id !== postId)
            return post;
        const likes = post.likes.includes(actor) ? post.likes.filter((id) => id !== actor) : [...post.likes, actor];
        return { ...post, likes };
    });
    return { data: { ...data, posts }, banner: "лайк щёлкнул. без уведомления на весь сервер." };
}
export function wallComment(data, actor, postId, text, now) {
    const verdict = screenPublic(text, data);
    if (!verdict.ok)
        return { data: seal(data, actor, text, now, verdict.why, "комментарий"), banner: verdict.why };
    const posts = data.posts.map((post) => post.id === postId
        ? { ...post, comments: [...post.comments, { id: uid("cm"), author: actor, text: text.trim(), at: now }] }
        : post);
    return { data: { ...data, posts }, banner: "комментарий на стене." };
}
export function wallDelete(data, actor, postId) {
    const post = data.posts.find((item) => item.id === postId);
    if (!post)
        return { data, banner: "поста уже нет." };
    if (actor !== post.wall && actor !== post.author) {
        return { data, banner: "чужую стену чистит хозяин. свой пост можешь снять сам." };
    }
    return { data: { ...data, posts: data.posts.filter((item) => item.id !== postId) }, banner: "сняла." };
}
export function wallPrivacy(data, actor, privacy) {
    const labels = {
        all: "стена открыта всем",
        friends: "стена только для друзей",
        none: "стена закрыта",
    };
    return {
        data: withPerson(data, actor, { ...data.people[actor], wallPrivacy: privacy }),
        banner: labels[privacy] + ". я так и запишу.",
    };
}
export function statusPropose(data, from, to, now) {
    if (from === to)
        return { data, banner: "отношения с собой — это уже дневник." };
    if (data.people[from].relationship)
        return { data, banner: "сначала сними свой статус. треугольники я не архивирую." };
    if (data.people[to].relationship) {
        const row = data.people[to];
        return { data, banner: `${row.name} уже ${row.she ? "не свободна" : "не свободен"} для этой записи.` };
    }
    if (data.pendingStatus.some((ask) => ask.from === from && ask.to === to)) {
        return { data, banner: "предложение уже висит у него. не дублирую." };
    }
    const id = uid("st");
    let next = { ...data, pendingStatus: [...data.pendingStatus, { id, from, to, at: now }] };
    next = pushInbox(next, to, { id: uid("in"), kind: "status", from, ref: id, at: now });
    return { data: next, banner: `спросила ${data.people[to].acc}. в профиле пусто, пока не скажет да.` };
}
export function statusAnswer(data, actor, reqId, yes, now) {
    const ask = data.pendingStatus.find((item) => item.id === reqId);
    if (!ask)
        return { data, banner: "предложения уже нет." };
    if (ask.to !== actor)
        return { data, banner: "отвечает только тот, кого спросили." };
    const pendingStatus = data.pendingStatus.filter((item) => item.id !== reqId);
    const inbox = { ...data.inbox };
    inbox[actor] = inbox[actor].map((item) => item.ref === reqId && item.kind === "status" ? { ...item, done: yes ? "yes" : "no" } : item);
    if (!yes)
        return { data: { ...data, pendingStatus, inbox }, banner: "отказала. в профилях по-прежнему пусто." };
    if (data.people[ask.from].relationship || data.people[actor].relationship) {
        return { data: { ...data, pendingStatus, inbox }, banner: "кто-то уже занял статус. я не переписываю чужое молча." };
    }
    const people = { ...data.people };
    people[ask.from] = { ...people[ask.from], relationship: { with: actor, since: now } };
    people[actor] = { ...people[actor], relationship: { with: ask.from, since: now } };
    let next = { ...data, people, pendingStatus, inbox };
    next = say(next, `${people[ask.from].name} и ${people[actor].name} теперь в отношениях. дата стоит у обоих, не у одного.`, now);
    return { data: next, banner: "записала у обоих. дата та же." };
}
export function statusSingle(data, actor, now) {
    const rel = data.people[actor].relationship;
    if (!rel)
        return { data, banner: "снимать нечего. ты и так без пары в профиле." };
    const who = data.people[actor];
    const people = { ...data.people };
    people[actor] = { ...people[actor], relationship: null };
    people[rel.with] = { ...people[rel.with], relationship: null };
    return {
        data: say({ ...data, people }, `${who.name} ${who.she ? "сняла" : "снял"} статус. у второго тоже пусто.`, now),
        banner: "сбросила у обоих. без отдельной травли в общий.",
    };
}
export function statusText(data, actor, text) {
    const clean = text.trim();
    if (!clean || clean.length > 80)
        return { data, banner: "статус — одна короткая строка, до 80 знаков." };
    if (THREAT.test(clean))
        return { data: seal(data, actor, clean, Date.now(), "угроза в статусе", "статус"), banner: "такой статус не поставлю." };
    return {
        data: withPerson(data, actor, { ...data.people[actor], statusText: clean }),
        banner: "строка в профиле обновлена.",
    };
}
export function statusMood(data, actor, mood) {
    const clean = mood.trim().slice(0, 16);
    if (!clean)
        return { data, banner: "настроение пустым не бывает. хотя бы слово." };
    return {
        data: withPerson(data, actor, { ...data.people[actor], mood: clean }),
        banner: `настроение: ${clean}.`,
    };
}
function scoreVibe(personRow, now) {
    const lines = personRow.lines.slice(-50);
    const hours = lines.map((line) => rigaParts(line.at).hour);
    const night = lines.length ? hours.filter((hour) => hour >= 23 || hour < 5).length / lines.length : 0;
    const laughs = lines.filter((line) => LAUGH.test(line.text)).length / Math.max(1, lines.length);
    const help = lines.filter((line) => /(спасибо|помог|держи|осторож)/i.test(line.text)).length / Math.max(1, lines.length);
    const salt = lines.filter((line) => /(бесит|устал|достал|шум|ненавиж)/i.test(line.text)).length / Math.max(1, lines.length);
    const avg = lines.reduce((sum, line) => sum + line.text.length, 0) / Math.max(1, lines.length);
    let archetype = "тихоня";
    if (night > 0.45)
        archetype = "ночная сова";
    else if (laughs > 0.34)
        archetype = "мемолог";
    else if (help > 0.3)
        archetype = "помощник";
    else if (avg > 80)
        archetype = "болтун";
    else if (salt > 0.3)
        archetype = "драма";
    const score = Math.max(12, Math.min(96, Math.round(40 + night * 30 + laughs * 20 + help * 18 + Math.min(avg, 120) / 8 - salt * 10)));
    const note = personRow.notes[0];
    const jokes = {
        "ночная сова": note
            ? `сова, да. и я всё ещё помню: ${note}. ложись, я посторожу чат.`
            : "сова. дневные люди тебе пишут зря, ты их читаешь как архив.",
        мемолог: "мемолог. половина сервера держится на твоём «ахах», и это подозрительно ответственная работа.",
        помощник: "помощник. ты раздаёшь тепло так, будто у тебя абонемент. я вижу.",
        болтун: "болтун. если твои сообщения сложить, получится город. я не против, только дыши.",
        драма: "драма. не диагноз, а погода. я рядом, но кричать вместе не буду.",
        тихоня: "тихоня. мало следов — либо призрак, либо тебе и так нормально. я не тяну клещами.",
    };
    return {
        at: now,
        score,
        archetype,
        joke: jokes[archetype] ?? jokes.тихоня,
        night: Math.round(night * 100),
        talk: Math.round(Math.min(100, avg)),
        salt: Math.round(salt * 100),
    };
}
export function vibecheck(data, who, now) {
    const prev = data.vibe[who];
    if (prev && now - prev.at < VIBE_MS) {
        const mins = Math.max(1, Math.ceil((VIBE_MS - (now - prev.at)) / 60000));
        return { data, banner: `вайб уже снят. следующий через ${mins} мин. чужие сообщения я всё равно не читаю.` };
    }
    if (data.people[who].lines.length < 3) {
        return { data, banner: "мало своих сообщений. напиши ещё, я не выдумываю человека из воздуха." };
    }
    const vibe = scoreVibe(data.people[who], now);
    return {
        data: { ...data, vibe: { ...data.vibe, [who]: vibe }, focus: who },
        banner: `${vibe.archetype}. ${vibe.score}/100. ${vibe.joke}`,
    };
}
export function memoriesNow(data, now) {
    const today = rigaParts(now);
    const hits = data.archive.filter((line) => {
        const parts = rigaParts(line.at);
        return parts.day === today.day && parts.month === today.month && parts.year < today.year;
    });
    if (!hits.length) {
        return {
            data: { ...data, channel: "memory" },
            banner: "в этот день в прошлые годы тихо. не выдумываю ностальгию из пустоты.",
        };
    }
    const best = hits.reduce((top, line) => (line.reactions > top.reactions ? line : top));
    const already = data.memories.some((item) => item.text === best.text && rigaParts(item.at).year === today.year);
    if (already) {
        return { data: { ...data, channel: "memory" }, banner: "этот выпуск уже висит. второй раз трогать не буду." };
    }
    const post = {
        id: uid("mem"),
        author: best.author,
        text: best.text,
        originalAt: best.at,
        reactions: best.reactions,
        at: now,
    };
    return {
        data: say({ ...data, memories: [post, ...data.memories], channel: "memory" }, `в этот день раньше сервер был живой. самое залайканное — от ${data.people[best.author].name}, ${best.reactions} реакций.`, now),
        banner: "положила в летопись. не всё подряд, а то, что тогда держали реакциями.",
    };
}
function validDate(day, month) {
    const md = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return month >= 1 && month <= 12 && day >= 1 && day <= (md[month] ?? 0);
}
function celebrate(data, id, now, year) {
    const row = data.people[id];
    if (row.celebratedYear === year)
        return data;
    const people = {
        ...data.people,
        [id]: { ...row, celebratedYear: year, birthdayRoleUntil: now + ROLE_MS },
    };
    let next = {
        ...data,
        people,
        parties: [{ id: uid("bd"), who: id, at: now }, ...data.parties].slice(0, 20),
    };
    next = say(next, `${row.name}, с днём. роль именинника на сутки, торт не обещаю, общий чат — да.`, now);
    return next;
}
export function birthdaySet(data, actor, day, month, year, now) {
    if (!validDate(day, month))
        return { data, banner: "такого дня в календаре нет. я не буду делать вид." };
    if (year !== undefined && (year < 1940 || year > rigaParts(now).year)) {
        return { data, banner: "год странный. можно без него, день и месяц достаточно." };
    }
    let next = withPerson(data, actor, {
        ...data.people[actor],
        birthday: { day, month, year },
        celebratedYear: null,
    });
    const today = rigaParts(now);
    if (today.day === day && today.month === month)
        next = celebrate(next, actor, now, today.year);
    return {
        data: { ...next, channel: "birthdays" },
        banner: year ? `запомнила ${day}.${month}.${year}. год в профиле можно не светить, он для тебя.` : `запомнила ${day}.${month}. без года.`,
    };
}
export function storyPost(data, author, text, now) {
    const verdict = screenPublic(text, data);
    if (!verdict.ok)
        return { data: seal(data, author, text, now, verdict.why, "история"), banner: verdict.why };
    const story = {
        id: uid("st"),
        author,
        text: text.trim(),
        at: now,
        expires: now + STORY_MS,
        views: [],
    };
    return {
        data: { ...data, stories: [story, ...data.stories], channel: "stories" },
        banner: "история на 24 часа. кто нажмёт «смотрел», попадёт тебе в список. потом текст сотру.",
    };
}
export function storyView(data, actor, storyId) {
    const story = data.stories.find((item) => item.id === storyId);
    if (!story)
        return { data, banner: "история уже сгорела." };
    if (story.author === actor)
        return { data, banner: "себя в просмотры не пишу. список — кнопкой, он только твой." };
    if (story.views.includes(actor))
        return { data, banner: "ты уже в списке. второй раз не считаю." };
    return {
        data: {
            ...data,
            stories: data.stories.map((item) => (item.id === storyId ? { ...item, views: [...item.views, actor] } : item)),
        },
        banner: "отметила просмотр. автор увидит имя, канал — нет.",
    };
}
export function speak(data, text, now) {
    const raw = text.trim();
    if (!raw)
        return { data, banner: "пусто." };
    if (raw.startsWith("/"))
        return command(data, raw, now);
    const verdict = screenChat(data, data.me, raw);
    if (!verdict.ok)
        return { data: seal(data, data.me, raw, now, verdict.why, "чат"), banner: verdict.why };
    const me = remember(data.people[data.me], raw);
    let next = withPerson(data, data.me, { ...me, lines: me.lines.map((line, index) => (index === me.lines.length - 1 ? { ...line, at: now } : line)) });
    next = say(next, raw, now, data.me);
    const lower = raw.toLowerCase();
    const calls = /(вивиан|vivian|эй)/.test(lower);
    const aboutCat = /граф|кот/.test(lower);
    const aboutWork = /работ/.test(lower);
    if (calls || aboutCat || aboutWork) {
        const note = next.people[data.me].notes[0];
        const reply = aboutCat
            ? `граф снова в кадре. я помню: ${note ?? "ты про кота уже говорила"}.`
            : aboutWork
                ? "работа опять. я не буду бодрой цитатой. если хочешь, просто посиди в чате."
                : note
                    ? `слышу. и да, я ещё держу в голове: ${note}.`
                    : "я здесь. не дежурная фраза, просто рядом.";
        next = say(next, reply, now + 1);
    }
    return { data: { ...next, channel: "general" }, banner: "в общем." };
}
function command(data, raw, now) {
    const parts = raw.slice(1).trim().split(/\s+/);
    const head = (parts[0] ?? "").toLowerCase();
    const rest = parts.slice(1);
    if (head === "poke") {
        if ((rest[0] ?? "").toLowerCase() === "stats" || rest.length === 0) {
            const board = pokeBoard(data, data.me);
            const top = board.out[0];
            return {
                data,
                banner: top
                    ? `чаще всего ты тыкаешь ${data.people[top[0]].acc}: ${top[1]}. входящие тоже считаю, смотри карточку.`
                    : "ты ещё никого не тыкал. счётчик пустой, это не стыдно.",
            };
        }
        const who = findMember(data, rest.join(" "));
        if (!who)
            return { data, banner: "не вижу такого человека. имя как в чате, без выдумок." };
        return poke(data, data.me, who, now);
    }
    if (head === "confess") {
        return confess(data, data.me, rest.join(" "), now);
    }
    if (head === "crush") {
        const who = findMember(data, rest.join(" "));
        if (!who)
            return { data, banner: "кого? имя нужно, а не намёк. намёк я никому не отправлю, но и не пойму." };
        return crush(data, data.me, who, now);
    }
    if (head === "friend") {
        const sub = (rest[0] ?? "list").toLowerCase();
        if (sub === "list") {
            const list = friendIds(data, data.me).map((id) => data.people[id].name);
            return { data: { ...data, focus: data.me }, banner: list.length ? `твои: ${list.join(", ")}.` : "друзей пока нет. заявка — /friend add имя." };
        }
        if (sub === "mutual") {
            const who = findMember(data, rest.slice(1).join(" "));
            if (!who)
                return { data, banner: "с кем смотреть общих? напиши имя." };
            const both = mutuals(data, data.me, who).map((id) => data.people[id].name);
            return { data, banner: both.length ? `общие с ${data.people[who].ins}: ${both.join(", ")}.` : `общих с ${data.people[who].ins} нет.` };
        }
        if (sub === "remove") {
            const who = findMember(data, rest.slice(1).join(" "));
            if (!who)
                return { data, banner: "кого убрать? второй не узнает, но имя нужно мне." };
            return friendRemove(data, data.me, who);
        }
        const who = findMember(data, rest.slice(sub === "add" ? 1 : 0).join(" "));
        if (!who)
            return { data, banner: "кому заявку? /friend add имя." };
        return friendAdd(data, data.me, who, now);
    }
    if (head === "wall") {
        const sub = (rest[0] ?? "").toLowerCase();
        if (sub === "privacy") {
            const mode = (rest[1] ?? "").toLowerCase();
            const map = { all: "all", всем: "all", friends: "friends", друзья: "friends", none: "none", никто: "none" };
            const privacy = map[mode];
            if (!privacy)
                return { data, banner: "так: /wall privacy все, друзья или никто." };
            return wallPrivacy(data, data.me, privacy);
        }
        if (sub === "post") {
            const who = findMember(data, rest[1] ?? "");
            if (!who)
                return { data, banner: "куда писать? /wall post имя текст." };
            return wallPost(data, data.me, who, rest.slice(2).join(" "), now);
        }
        const who = findMember(data, rest.join(" ") || data.people[data.focus].name);
        if (!who)
            return { data, banner: "чью стену открыть?" };
        return { data: { ...data, focus: who }, banner: `стена ${data.people[who].name} справа. лайки и комментарии на месте.` };
    }
    if (head === "status") {
        const sub = (rest[0] ?? "").toLowerCase();
        if (sub === "single" || sub === "свободен" || sub === "свободна")
            return statusSingle(data, data.me, now);
        if (sub === "mood")
            return statusMood(data, data.me, rest.slice(1).join(" "));
        if (sub === "text")
            return statusText(data, data.me, rest.slice(1).join(" "));
        if (sub === "relationship" || sub === "отношения") {
            const who = findMember(data, rest.slice(1).join(" "));
            if (!who)
                return { data, banner: "с кем? /status relationship имя. второй должен нажать да." };
            return statusPropose(data, data.me, who, now);
        }
        return statusText(data, data.me, rest.join(" "));
    }
    if (head === "vibecheck" || head === "vibe") {
        const who = rest.length ? findMember(data, rest.join(" ")) : data.me;
        if (who && who !== data.me) {
            return { data, banner: "чужие сообщения без согласия не читаю. пусть сами вызовут /vibecheck." };
        }
        return vibecheck(data, data.me, now);
    }
    if (head === "memories")
        return memoriesNow(data, now);
    if (head === "birthday") {
        if ((rest[0] ?? "list") === "list") {
            return { data: { ...data, channel: "birthdays" }, banner: "ближайшие — в канале именин. без года, если человек сам его не поставил напоказ." };
        }
        const nums = rest.map((part) => Number(part)).filter((n) => Number.isFinite(n));
        if (nums.length < 2)
            return { data, banner: "так: /birthday set 14 3. год по желанию третьим числом." };
        return birthdaySet(data, data.me, nums[0] ?? 0, nums[1] ?? 0, nums[2], now);
    }
    if (head === "story") {
        if ((rest[0] ?? "") === "views") {
            return { data: { ...data, channel: "stories", focus: data.me }, banner: "просмотры только у твоих историй. чужие списки закрыты." };
        }
        const body = (rest[0] ?? "") === "post" ? rest.slice(1).join(" ") : rest.join(" ");
        return storyPost(data, data.me, body, now);
    }
    if (head === "help") {
        return {
            data,
            banner: "poke, confess, crush, friend, wall, status, vibecheck, memories, birthday, story. кнопки ниже делают то же самое.",
        };
    }
    return { data, banner: "такой команды нет. /help — если потерялся." };
}
export function tick(data, now) {
    let next = data;
    if (!next.armedShort) {
        next = {
            ...next,
            armedShort: true,
            stories: next.stories.map((story) => (story.id === "story-short" && story.expires === 0 ? { ...story, expires: now + 90000, at: now } : story)),
        };
    }
    const alive = next.stories.filter((story) => story.expires > now);
    if (alive.length !== next.stories.length) {
        const gone = next.stories.filter((story) => story.expires <= now);
        next = {
            ...next,
            stories: alive,
            ashes: [...gone.map((story) => ({ id: uid("ash"), author: story.author, at: now })), ...next.ashes].slice(0, 12),
        };
    }
    const today = rigaParts(now);
    for (const id of MEMBERS) {
        const row = next.people[id];
        if (row.birthday && row.birthday.day === today.day && row.birthday.month === today.month) {
            next = celebrate(next, id, now, today.year);
        }
        if (row.birthdayRoleUntil && row.birthdayRoleUntil <= now) {
            next = withPerson(next, id, { ...next.people[id], birthdayRoleUntil: null });
        }
    }
    return next;
}
export function temper(data, now) {
    const recent = data.pokes.filter((poke) => now - poke.at < 10 * 60000).length;
    if (recent >= 6)
        return "колкая";
    if (data.chat.length > 0 && now - (data.chat[data.chat.length - 1]?.at ?? now) > 6 * 60 * 60000)
        return "тихая";
    return "мягкая";
}
