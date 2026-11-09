(() => {
  'use strict';
  const english = {
  "ТВОЙ СЕРВЕР. ТВОИ ЛЮДИ. VIVIAN.": "YOUR SERVER. YOUR PEOPLE. VIVIAN.",
  "У сервера": "Your server",
  "есть характер.": "has character.",
  "Vivian помогает поддерживать порядок, собирать людей в голосовых каналах и делать общение живее — прямо внутри Discord.": "Vivian helps keep things organized, bring people together in voice channels, and make conversations feel alive — all inside Discord.",
  "Добавить Vivian в Discord": "Add Vivian to Discord",
  "Открыть Control Center": "Open Control Center",
  "Посмотреть, как работает": "See it in action",
  "Выбери, что интересно": "Pick what interests you",
  "# модерация": "# moderation",
  "# AI-чат": "# AI chat",
  "# музыка": "# music",
  "# XP": "# XP",
  "Демо Discord-интерфейса": "Discord interface demo",
  "Открыть команды": "Browse commands",
  "ЭКОСИСТЕМА VIVIAN": "VIVIAN ECOSYSTEM",
  "Четыре стороны одного сервера.": "Four sides of one server.",
  "Не набор разрозненных кнопок — инструменты, которые помогают сообществу жить своей жизнью.": "Not a collection of random buttons — tools that help a community thrive.",
  "Не просто слова. Посмотри интерфейс.": "More than words. See the interface.",
  "Найди свою команду.": "Find your command.",
  "VIVIAN / КАК ЭТО ВЫГЛЯДИТ": "VIVIAN / SEE IT IN ACTION",
  "КОМАНДЫ VIVIAN": "VIVIAN COMMANDS",

  "Модерация, музыка, ИИ и 69 команд: капсулы времени, голосования, истории, приватные комнаты и многое другое.": "Moderation, music, AI and 69 commands: time capsules, ballots, stories, private rooms and more.",

  "О Vivian, её возможностях и текущем состоянии.": "About Vivian, its features and current status.",
  "Пульс чата, вклад участников и срез активности сервера.": "Chat pulse, member contributions and server activity overview.",
  "Выбрать модель для разговоров с Vivian.": "Choose an AI model for conversations with Vivian.",
  "Заблокировать участника на сервере.": "Ban a member from the server.",
  "Опубликовать реальные изображения до и после.": "Publish real before-and-after images.",
  "Ближайшие дни рождения на сервере.": "Upcoming birthdays on the server.",
  "Сохранить свою дату дня рождения.": "Save your birthday.",
  "Сообщить команде Vivian об ошибке, можно со скриншотом.": "Report a bug to the Vivian team, optionally with a screenshot.",
  "Добавить или заменить заметку до раскрытия капсулы.": "Add or replace a private note before a capsule is revealed.",
  "Отменить закрытую капсулу и удалить её заметки.": "Cancel a sealed capsule and delete its notes.",
  "Создать капсулу с дедлайном и порогом участников.": "Create a capsule with a deadline and contributor quorum.",
  "Показать десять последних капсул канала.": "List the ten newest capsules in this channel.",
  "Открыть готовую капсулу или проверить условия раскрытия.": "Open a ready capsule or check its remaining conditions.",
  "Карточка участника: аватар, уровень, XP, статистика и достижения.": "Member card: avatar, level, XP, statistics and achievements.",
  "Карточка участника": "Member card: avatar, level, XP, statistics and achieveme",
  "Журнал изменений Vivian с указанием версий.": "Vivian changelog with release versions.",
  "Удалить недавние сообщения из текущего канала.": "Delete recent messages from the current channel.",
  "Псевдоним команды /card.": "Alias for the /card command.",
  "Посмотреть варианты решения без раскрытия голосов.": "View a decision and its options without revealing any votes.",
  "Отменить открытое решение и удалить его голосования.": "Cancel an open decision and erase its ballots.",
  "Создать закрытое голосование с последующим анализом результата.": "Create a sealed ballot with a later outcome review.",
  "Создать закрытое голосование с последующим анализом резу": "Create a sealed ballot with a later outcome review.",
  "История решений канала и ожидающих итогов.": "List recent decisions and pending outcome reviews.",
  "Зафиксировать результат после даты проверки.": "Record the observed result once the review date arrives.",
  "Показать анонимные результаты и итог после дедлайна.": "Display anonymous results and the outcome after the deadline.",
  "Проголосовать или изменить тайный голос до дедлайна.": "Cast or replace a private ballot before the deadline.",
  "Проверить подтверждение запуска новой версии Vivian.": "Check whether a new Vivian deployment was confirmed.",
  "Найти взаимные совпадения навыков участников канала.": "Find reciprocal skill matches in this channel.",
  "Скрыть свой профиль из поиска совпадений.": "Hide your profile from matching until you update it.",
  "Опубликовать навыки и сведения о себе для поиска совпадений.": "Publish skills and identity for matching in this channel.",
  "Опубликовать навыки и сведения о себе для поиска совпаде": "Publish skills and identity for matching in this channel",
  "Удалить профиль обмена навыками для этого канала.": "Permanently erase your exchange profile in this channel.",
  "Показать свой профиль обмена навыками.": "Show your exchange profile in this channel.",
  "Статус отправленной ошибки или предложения.": "Track your submitted bug report or suggestion.",
  "Посмотреть команды Vivian и их краткие описания.": "View Vivian commands and brief descriptions.",
  "Удалить участника с сервера без блокировки повторного входа.": "Remove a member; they may rejoin later.",
  "Удалить участника с сервера без блокировки повторного вх": "Remove a member; they may rejoin later.",
  "Запретить обычным участникам отправлять сообщения в канале.": "Prevent regular members from messaging in this channel.",
  "Запретить обычным участникам отправлять сообщения в кана": "Prevent regular members from messaging in this channel.",
  "Включить или выключить повтор текущего трека.": "Toggle repetition of the current track.",
  "Опубликовать воспоминание дня прямо сейчас.": "Publish today's memory now.",
  "Приостановить текущий трек.": "Pause the current track.",
  "Показать задержку соединения Vivian с Discord.": "Show Vivian's Discord connection latency.",
  "Поиск по YouTube в разработке; для музыки используется !play.": "YouTube search is in development; use !play for music.",
  "Поиск по YouTube в разработке; для музыки используется !": "YouTube search is in development; use !play for music.",
  "Изменить статус пункта плана проекта (команда сервера).": "Change the status of a roadmap item (server team).",
  "Цели, прогресс дня, путь участника и общие события.": "Chat goals, daily progress, participant journeys and events.",
  "Панель трека, очередь и управление музыкой.": "Open track, queue and music controls.",
  "Прогресс участника, вклад в разговор и достижения.": "View member progress, chat contribution and achievements.",
  "Посмотреть обращение или статус предложения по номеру.": "Check a report or suggestion status by number.",
  "Возобновить приостановленный трек.": "Resume the paused track.",
  "Публичный план развития Vivian.": "Open Vivian's public development roadmap.",
  "Добавить пункт в план развития (команда сервера).": "Add a roadmap item (server team).",
  "Вернуть управление приватной комнатой после выхода владельца.": "Reclaim your private room if its owner has left.",
  "Вернуть управление приватной комнатой после выхода владе": "Reclaim your private room if its owner has left.",
  "Создать приватную голосовую комнату для выбранных участников.": "Create a private voice room for selected members.",
  "Создать приватную голосовую комнату для выбранных участн": "Create a private voice room for selected members.",
  "Открыть панель управления своей приватной комнатой.": "Open the management panel for your private room.",
  "Настроить общую панель приватных комнат (администратор).": "Configure private voice rooms (administrators).",
  "Сохранённые карточки изменений «до и после».": "View saved before-and-after showcases.",
  "Перейти к следующему треку.": "Skip to the next track.",
  "Задать интервал между сообщениями в канале.": "Set the delay between messages in this channel.",
  "Предложить участнику отношения.": "Propose a relationship to another member.",
  "Задать свободный статус и настроение.": "Set your freeform status and mood.",
  "Завершить отношения.": "End a relationship.",
  "Показать статус и отношения участника.": "Show a member's status and relationships.",
  "Остановить очередь и отключить Vivian от голосового канала.": "Stop the queue and disconnect Vivian from voice.",
  "Остановить очередь и отключить Vivian от голосового кана": "Stop the queue and disconnect Vivian from voice.",
  "Опубликовать историю на 24 часа.": "Publish a story for 24 hours.",
  "Назначить канал для историй на 24 часа.": "Choose a channel for 24-hour stories.",
  "Предложить улучшение Vivian и начать голосование.": "Suggest an improvement and start a community vote.",
  "Задания за общение и совместные события Vivian.": "Open chat and community event quests.",
  "Снова разрешить сообщения в текущем канале.": "Allow messages in the current channel again.",
  "Центр Vivian: активность, события, задания и хроника.": "Open Vivian's center: server pulse, events, quests and chronicle.",
  "Центр Vivian": "Open Vivian's center: server pulse, events, quests and c",
  "Оценить настроение по недавним сообщениям этого канала.": "Check the mood of recent messages in this channel.",
  "Изменить громкость плеера от 0 до 120%.": "Set player volume from 0 to 120%.",
  "Воспроизвести музыку: !play название (YouTube или SoundCloud).": "Play audio with !play title (YouTube or SoundCloud).",
  "Воспроизвести музыку": "Play audio with !play title (YouTube or SoundCloud).",
  "Остановить музыку и выйти из голосового канала.": "Stop the music and leave the voice channel.",
  "В каталоге: модерация, карточки, активность, музыка и /veyr.": "Listed features: moderation, profile cards, activity, music and /veyr.",
  "В /help присутствуют капсулы времени, голосования, истории, обмен навыками, статусы и комнаты.": "/help lists time capsules, ballots, stories, skill exchange, statuses and private rooms.",
  "Новый /play указан как находящийся в разработке. Для воспроизведения используется !play.": "The new /play is in development; use !play for playback.",
  "Модуль памяти проходит исправление; до проверки работы базы не заявляем его как полностью исправный.": "The memory module is being fixed; do not consider it fully restored until database tests pass.",
  "Актуальные пункты и статусы проверяй через /roadmap и /changelog в Discord.": "Check current plans and statuses via /roadmap and /changelog in Discord.",
  "Закрытые голосования через /crossroads и заметки с условиями раскрытия через /capsule.": "Sealed ballots with /crossroads and condition-based time capsules with /capsule.",
  "Карточки, статусы, дни рождения, анкеты навыков и поиск совпадений.": "Cards, statuses, birthdays, skill profiles and matching.",
  "Управление личными войсами, истории, цели, задания и хроника сервера в /veyr.": "Private voice rooms, stories, goals, quests and server chronicle via /veyr.",
  "Выбор модели через /ai, анализ настроения через /vibecheck. Работа ИИ зависит от доступности провайдеров.": "Choose an AI model with /ai and check mood with /vibecheck. AI availability depends on providers.",
  "Vivian использует Discord ID, служебные настройки, активность и записи диалогов для отдельных функций. Условия хранения зависят от типа данных и конфигурации. Подробности и запрос удаления — в ": "Vivian uses Discord IDs, configuration, activity and conversation records for specific functions. Retention depends on data type and settings. More details and deletion requests: ",
  "Напиши на ": "Contact the ",
  " с запросом на удаление данных. Срок обработки уточняется в поддержке.": " to request deletion of your data. Ask support for processing times.",
  "сервер поддержки": "support server",

  "69 команд. Один бот.": "69 commands. One bot.",
  "Каталог команд из /help Vivian (31 октября 2026). Поиск и фильтры; демонстрация не выполняет действия в Discord. Для музыки доступна !play, а новый /play ещё в разработке.": "Command catalog from Vivian /help (October 31, 2026). Search and filters; demo actions do not affect Discord. Use !play for music; the new /play is in development.",
  "ИИ": "AI",
  "Сообщество": "Community",
  "Приватные комнаты": "Private rooms",
  "04 — НЕ ТОЛЬКО МОДЕРАЦИЯ": "04 — BEYOND MODERATION",
  "Сервер — это люди.": "A server is its people.",
  "Vivian объединяет ежедневные инструменты сервера с социальными сценариями. Никаких искусственных «до/после» — только конкретные команды.": "Vivian combines daily server utilities with social experiences. No artificial before/after comparisons — just real commands.",
  "Решения и капсулы времени": "Decisions and time capsules",
  "Идентичность и связи": "Identity and connections",
  "Приватные комнаты и события": "Private rooms and events",
  "Разговор и настроение": "Chat and mood",
  "Что работает и что проверяем.": "What works and what we are verifying.",
  "Статус основан на опубликованных командах, а не на обещаниях. Доступность конкретных функций зависит от версии и настроек сервера.": "Status follows published commands, not promises. Feature availability depends on version and server settings.",
  "Команды сервера": "Server commands",
  "Социальные модули": "Social features",
  "Музыкальный поиск": "Music search",
  "Память и ИИ": "Memory and AI",
  "План развития": "Development plan",

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
  "Vivian.": "Vivian.",
  "Discord-бот.": "Discord bot.",
  "Модерация, живое общение, музыка и уровни — в одном боте для Discord.": "Moderation, live chat, music and levels — all in one Discord bot.",
  "Добавить Vivian": "Add Vivian",
  "Посмотреть в работе": "See it in action",
  "/ Общение и модерация": "/ Chat and moderation",
  "01 / ЭКРАН DISCORD": "01 / DISCORD PREVIEW",
  "Есть кто сегодня в войс?": "Anyone joining voice chat today?",
  "БОТ": "BOT",
  "Всем привет. Кто хочет собрать компанию?": "Hey everyone! Who wants to hang out?",
  "Ответ Vivian": "Vivian replies",
  "Я зайду через пять минут.": "I'll join in five minutes.",
  "Сообщение #general": "Message #general",
  "ДЕМОНСТРАЦИЯ ИНТЕРФЕЙСА": "INTERFACE DEMO",
  "01 — ФУНКЦИИ": "01 — FEATURES",
  "По делу.": "Straight to the point.",
  "Четыре направления. Без длинных обещаний.": "Four essentials. No grand promises.",
  "Автомодерация": "Auto-moderation",
  "Фильтры, очистка, блокировки и ограничения.": "Filters, cleanup, bans and restrictions.",
  "Живое общение": "Live chat",
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
  "Vivian — Discord-бот": "Vivian — Discord bot",
  "Vivian: общение, модерация, музыка, активность и команды.": "Vivian: chat, moderation, music, activity and commands.",
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
  "Выбери категорию или введи команду. Доступно: /card, /mute, /play, /rank и другие команды.": "Choose a category or enter a command. Try /card, /mute, /play, /rank and more.",
  "Страницы zev1x": "zev1x profiles",
  "zev1x в X": "zev1x on X",
  "zev1x в Spotify": "zev1x on Spotify",
  "zev1x в Steam": "zev1x on Steam",
  "zev1x в Twitch": "zev1x on Twitch",
  "zev1x в GitHub": "zev1x on GitHub",
  "Скоро": "Soon",
  "Модерация, живое общение, музыка и уровни. Дальше — друзья, стена и признания прямо внутри сервера.": "Moderation, live chat, music and levels. Next — friends, a wall and confessions right inside your server.",
  "ДОРОЖНАЯ КАРТА": "ROADMAP",
  "Что дальше.": "What's next.",
  "Что уже работает и что выйдет следом.": "What works today and what ships next.",
  "База сервера": "Server basics",
  "Готово: модерация, музыка, уровни, ответы в чате.": "Done: moderation, music, levels, chat replies.",
  "Друзья и стена": "Friends and wall",
  "В разработке: заявки в друзья, посты на стене, лайки и комментарии.": "In development: friend requests, wall posts, likes and comments.",
  "Признания и краши": "Confessions and crushes",
  "Скоро: анонимные признания и тайный краш, совпадение видно только при взаимности.": "Soon: anonymous confessions and secret crushes, a match is shown only when it's mutual.",
  "Апелляции и защита": "Appeals and protection",
  "Скоро: заявка на разбан кнопкой, карантин для новичков и режим рейда.": "Soon: one-button ban appeals, quarantine for new members and raid mode.",
  "Профиль на сайте": "Profile on the site",
  "Скоро: вход через Discord, карточка, друзья и стена на одной странице.": "Soon: Discord login, your card, friends and wall on one page.",
  "Какие данные хранит Vivian?": "What data does Vivian store?",
  "Только то, что нужно для работы: уровни, предупреждения, настройки сервера и историю диалога с ИИ в канале.": "Only what it needs to work: levels, warnings, server settings and the AI conversation history in a channel.",
  "Политика конфиденциальности": "Privacy policy",
  "Как удалить свои данные?": "How do I delete my data?",
  "Напиши в поддержку": "Contact support",
  "— данные удалят. Самостоятельное удаление командой скоро.": "— we'll delete it. Self-service deletion by command is coming soon.",
  "Конфиденциальность": "Privacy",
  "Условия": "Terms"
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
