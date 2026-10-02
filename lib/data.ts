export type Locale = "ru" | "en";

export const profile = {
  name: "Bobojon Rajabov",
  role: "Software Engineer | Python | Django | FastAPI",
  location: "Dushanbe, Tajikistan",
  headlineSkills: "Python, Django, FastAPI, Celery, PostgreSQL, Linux, Redis, Docker, Git, Kafka, CI/CD, Aiogram.",
  contacts: {
    email: "rbobojon1@gmail.com", phone: "+992987808205", github: "https://github.com/bobojon-r",
    linkedin: "https://www.linkedin.com/in/bobojon-rajabov-a16114368/", telegram: "https://t.me/bobojon_r"
  },
  skills: ["Python", "Django", "FastAPI", "Celery", "PostgreSQL", "Linux", "Redis", "Docker", "Git", "Kafka", "CI/CD", "Aiogram"]
} as const;

export const content = {
  ru: {
    resume: "Резюме",
    summary: "Software Engineer с 4+ годами опыта в разработке. Создаю backend-сервисы на Python: проектирую архитектуру, реализую бизнес-логику и API, работаю с базами данных и автоматизирую процессы. Беру задачу от идеи до надёжного production-решения.",
    nav: { experience: "Опыт", skills: "Навыки", projects: "Проекты", contact: "Контакты" },
    headings: { experience: "Опыт работы", skills: "Навыки", projects: "Проекты", contact: "Связаться", education: "Образование и языки", languages: "Языки" },
    experience: [
      { company: "Babilon-M", location: "Dushanbe, Tajikistan", role: "Backend Developer", period: "с октября 2022", highlights: ["Разрабатываю и поддерживаю систему мониторинга АКБ на FastAPI: сбор данных с 2 000+ устройств по SNMP, асинхронная обработка через Taskiq и кэширование в Redis.", "Разработал платформу аналитики DPI и переписал её с Django на FastAPI + React: ежедневная агрегация данных о трафике и абонентах по всем базовым станциям, статистика, сравнение периодов и интерактивные графики.", "Интегрировал Prometheus и Grafana для мониторинга показателей и ускорения их анализа."] },
      { company: "МегаФон-Таджикистан", location: "Dushanbe, Tajikistan", role: "Billing Engineer", period: "октябрь 2019 — март 2021", highlights: ["Автоматизировал часть обработки клиентских обращений с помощью Python.", "Участвовал в разработке и настройке тарифных пакетов и дополнительных услуг в биллинговых системах.", "Разработал внутренних Telegram-ботов для автоматизации корпоративных процессов."] }
    ],
    projectLabels: { work: "Рабочие проекты", personal: "Личные проекты", more: "Подробнее", github: "GitHub" },
    projects: [
      { kind: "work", title: "Система мониторинга АКБ", description: "Сервис для NOC-инженеров: следит за состоянием аккумуляторов на 2 000+ устройствах и вовремя показывает проблемные.", features: ["Опрос устройств по SNMP каждые 5 минут: заряд, напряжение, температура и другие параметры.", "Асинхронная обработка через Taskiq и кэширование тяжёлых представлений в Redis.", "React-дешборд со статусами устройств и комментариями к неактивным.", "Метрики в Prometheus и Grafana."], stack: ["FastAPI", "Taskiq", "Redis", "PostgreSQL", "React", "SNMP", "Grafana"] },
      { kind: "work", title: "Платформа аналитики DPI", description: "Ежедневно собирает данные о трафике и абонентах по всем базовым станциям и превращает их в графики и отчёты.", features: ["Переписал платформу с Django на FastAPI + React: она стала быстрее, удобнее и проще масштабируется.", "Добавил новые инструменты анализа: статистику и сравнение данных за разные периоды.", "Планировщик каждую ночь собирает и агрегирует данные за сутки; интерактивные графики и выгрузка в CSV/Excel.", "Оптимизация SQL-запросов к большим объёмам данных."], stack: ["FastAPI", "React", "PostgreSQL"] },
      { kind: "work", title: "Бот аварийных уведомлений", description: "Telegram-бот, который предупреждает инженеров об авариях и показывает остаток заряда АКБ, чтобы вовремя принять меры или включить дизель-генератор.", features: ["Мгновенные уведомления об авариях по SNMP.", "Остаток заряда и предупреждение, на сколько его хватит.", "Inline-отчёты и авторизация пользователей."], stack: ["Aiogram", "Redis", "SNMP"] },
      { kind: "personal", title: "Бот выбора направления в IT", description: "Telegram-бот для новичков: выбираешь направление, и бот подсказывает, какие языки и технологии изучать.", features: ["14 направлений: веб, игры, ИИ, мобильная разработка, DevOps, безопасность и другие.", "Уточнение направления через inline-кнопки (например, Front-end / Back-end / Fullstack).", "Список технологий со ссылками на учебные материалы."], stack: ["Python", "Aiogram"], github: "https://github.com/bobojon-r/Bot_select_lang_programming" },
      { kind: "personal", title: "Income-Expense Bot", description: "Telegram-бот для учёта личных финансов: доходы, расходы, отчёты по месяцам и годовая статистика.", features: ["Пошаговое добавление доходов и расходов через FSM.", "Просмотр записей и итогового отчёта по году и месяцу.", "График доходов и расходов за год, построенный в Matplotlib."], stack: ["Python", "Aiogram", "PostgreSQL", "Matplotlib"], github: "https://github.com/bobojon-r/Income-Expense-Bot" }
    ],
    contactText: "Открыт к предложениям и профессиональному общению.", call: "Позвонить",
    education: { degree: "Бакалавр технологических наук", institution: "Технологический университет Таджикистана", location: "Dushanbe, Tajikistan", year: "2019" },
    languages: ["Русский", "Английский"], footer: "Сделано на Next.js. Обновлено в 2026 году."
  },
  en: {
    resume: "Resume",
    summary: "Software Engineer with 4+ years of development experience. I build Python backend services, design architecture, implement business logic and APIs, work with databases, and automate processes. I take products from idea to reliable production solutions.",
    nav: { experience: "Experience", skills: "Skills", projects: "Projects", contact: "Contact" },
    headings: { experience: "Work experience", skills: "Skills", projects: "Projects", contact: "Get in touch", education: "Education & languages", languages: "Languages" },
    experience: [
      { company: "Babilon-M", location: "Dushanbe, Tajikistan", role: "Backend Developer", period: "Since October 2022", highlights: ["Develop and maintain a FastAPI battery-device monitoring system: data collection from 2,000+ devices via SNMP, asynchronous Taskiq processing, and Redis caching.", "Built a DPI analytics platform and rewrote it from Django to FastAPI + React: daily traffic and subscriber-data aggregation across all base stations, statistics, period comparison, and interactive charts.", "Integrated Prometheus and Grafana to monitor key metrics and speed up analysis."] },
      { company: "MegaFon Tajikistan", location: "Dushanbe, Tajikistan", role: "Billing Engineer", period: "October 2019 — March 2021", highlights: ["Automated part of the customer-complaint workflow using Python.", "Contributed to the development and configuration of tariff plans and additional services in billing systems.", "Built internal Telegram bots to automate corporate processes."] }
    ],
    projectLabels: { work: "Work projects", personal: "Personal projects", more: "Details", github: "GitHub" },
    projects: [
      { kind: "work", title: "Battery Monitoring System", description: "A service for NOC engineers that tracks battery health across 2,000+ devices and surfaces problems early.", features: ["Polls devices via SNMP every 5 minutes: charge, voltage, temperature, and other parameters.", "Asynchronous processing with Taskiq and Redis caching of expensive views.", "React dashboard with device statuses and comments on inactive devices.", "Metrics in Prometheus and Grafana."], stack: ["FastAPI", "Taskiq", "Redis", "PostgreSQL", "React", "SNMP", "Grafana"] },
      { kind: "work", title: "DPI Analytics Platform", description: "Collects daily traffic and subscriber data across all base stations and turns it into charts and reports.", features: ["Rewrote the platform from Django to FastAPI + React, making it faster, easier to use, and easier to scale.", "Added new analysis tools: statistics and period-over-period data comparison.", "A nightly scheduler collects and aggregates the day's data; interactive charts and CSV/Excel exports.", "Optimized SQL queries over large data volumes."], stack: ["FastAPI", "React", "PostgreSQL"] },
      { kind: "work", title: "Incident Alert Bot", description: "A Telegram bot that alerts engineers about incidents and shows remaining battery charge, so they can act in time or start a diesel generator.", features: ["Instant SNMP-based incident notifications.", "Remaining charge with a warning about how long it will last.", "Inline reports and user authorization."], stack: ["Aiogram", "Redis", "SNMP"] },
      { kind: "personal", title: "IT Career Path Bot", description: "A Telegram bot for beginners: pick a field and the bot tells you which languages and technologies to learn.", features: ["14 fields: web, games, AI, mobile, DevOps, security, and more.", "Inline buttons to narrow the choice (e.g. Front-end / Back-end / Fullstack).", "A list of technologies with links to learning resources."], stack: ["Python", "Aiogram"], github: "https://github.com/bobojon-r/Bot_select_lang_programming" },
      { kind: "personal", title: "Income-Expense Bot", description: "A Telegram bot for personal finance tracking: income, expenses, monthly reports, and yearly statistics.", features: ["Step-by-step income and expense entry using FSM.", "Records and summary reports by year and month.", "Yearly income vs. expense chart built with Matplotlib."], stack: ["Python", "Aiogram", "PostgreSQL", "Matplotlib"], github: "https://github.com/bobojon-r/Income-Expense-Bot" }
    ],
    contactText: "Open to opportunities and professional conversations.", call: "Call",
    education: { degree: "Bachelor of Technological Sciences", institution: "Technological University of Tajikistan", location: "Dushanbe, Tajikistan", year: "2019" },
    languages: ["Russian", "English"], footer: "Built with Next.js. Updated in 2026."
  }
} as const;
