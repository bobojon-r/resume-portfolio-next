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
      { company: "Babilon-M", location: "Dushanbe, Tajikistan", role: "Backend Developer", period: "с октября 2022", highlights: ["Разрабатываю и поддерживаю систему мониторинга АКБ на FastAPI: сбор данных с 2 000+ устройств по SNMP, асинхронная обработка через Taskiq и кэширование в Redis.", "Разработал платформу отчётности DPI на Django: ежедневная агрегация данных о трафике и абонентах через Celery, интерактивные диаграммы на Chart.js.", "Интегрировал Prometheus и Grafana для мониторинга показателей и ускорения их анализа."] },
      { company: "МегаФон-Таджикистан", location: "Dushanbe, Tajikistan", role: "Billing Engineer", period: "октябрь 2019 — март 2021", highlights: ["Автоматизировал часть обработки клиентских обращений с помощью Python.", "Участвовал в разработке и настройке тарифных пакетов и дополнительных услуг в биллинговых системах.", "Разработал внутренних Telegram-ботов для автоматизации корпоративных процессов."] }
    ],
    projects: [
      { title: "Система мониторинга устройств с АКБ", description: "React-дешборд и FastAPI backend: сбор метрик по SNMP, кэширование тяжёлых представлений и комментарии к неактивным устройствам.", stack: ["FastAPI", "PostgreSQL", "Redis", "React"] },
      { title: "Автоматизация отчётов DPI", description: "Планировщики Celery и Taskiq, агрегации по расписанию, выгрузка CSV/Excel и оптимизация SQL.", stack: ["Django", "Celery", "PostgreSQL"] },
      { title: "Боты и интеграции", description: "Aiogram-боты для уведомлений об авариях по SNMP, inline-отчёты и авторизация.", stack: ["Aiogram", "Redis"] }
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
      { company: "Babilon-M", location: "Dushanbe, Tajikistan", role: "Backend Developer", period: "Since October 2022", highlights: ["Develop and maintain a FastAPI battery-device monitoring system: data collection from 2,000+ devices via SNMP, asynchronous Taskiq processing, and Redis caching.", "Built a Django DPI reporting platform with daily traffic and subscriber-data aggregation via Celery and interactive Chart.js visualizations.", "Integrated Prometheus and Grafana to monitor key metrics and speed up analysis."] },
      { company: "MegaFon Tajikistan", location: "Dushanbe, Tajikistan", role: "Billing Engineer", period: "October 2019 — March 2021", highlights: ["Automated part of the customer-complaint workflow using Python.", "Contributed to the development and configuration of tariff plans and additional services in billing systems.", "Built internal Telegram bots to automate corporate processes."] }
    ],
    projects: [
      { title: "Battery Device Monitoring System", description: "React dashboard and FastAPI backend for SNMP metric collection, caching of expensive views, and device-status comments.", stack: ["FastAPI", "PostgreSQL", "Redis", "React"] },
      { title: "DPI Reporting Automation", description: "Celery and Taskiq schedulers, scheduled aggregations, CSV/Excel exports, and SQL optimization.", stack: ["Django", "Celery", "PostgreSQL"] },
      { title: "Bots & Integrations", description: "Aiogram bots for SNMP incident notifications, inline reports, and authorization.", stack: ["Aiogram", "Redis"] }
    ],
    contactText: "Open to opportunities and professional conversations.", call: "Call",
    education: { degree: "Bachelor of Technological Sciences", institution: "Technological University of Tajikistan", location: "Dushanbe, Tajikistan", year: "2019" },
    languages: ["Russian", "English"], footer: "Built with Next.js. Updated in 2026."
  }
} as const;
