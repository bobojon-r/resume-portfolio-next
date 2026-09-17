export const data = {
  name: "Bobojon Rajabov",
  role: "Python Backend Developer",
  location: "Dushanbe, Tajikistan",
  summary: "Backend-разработчик с 4+ годами опыта в создании сервисов, автоматизации процессов и интеграций. Проектирую архитектуру, реализую бизнес-логику и API, работаю с базами данных и довожу задачи до production.",
  skills: [
    "Python", "Django", "Django REST Framework", "FastAPI", "PostgreSQL",
    "MySQL", "Redis", "Celery", "Taskiq", "Kafka", "Docker", "Kubernetes",
    "Linux", "Nginx", "CI/CD", "Prometheus", "Grafana", "React", "Git"
  ],
  experience: [
    {
      company: "Babilon-M",
      location: "Dushanbe, Tajikistan",
      role: "Backend Developer",
      period: "с октября 2022",
      highlights: [
        "Разрабатываю и поддерживаю систему мониторинга АКБ на FastAPI: сбор данных с 2 000+ устройств по SNMP, асинхронная обработка через Taskiq и кэширование в Redis.",
        "Разработал платформу отчётности DPI на Django: ежедневная агрегация данных о трафике и абонентах через Celery, интерактивные диаграммы на Chart.js.",
        "Интегрировал Prometheus и Grafana для мониторинга показателей и ускорения их анализа."
      ]
    },
    {
      company: "МегаФон-Таджикистан",
      location: "Dushanbe, Tajikistan",
      role: "Billing Engineer",
      period: "октябрь 2019 — март 2021",
      highlights: [
        "Автоматизировал часть обработки клиентских обращений с помощью Python.",
        "Участвовал в разработке и настройке тарифных пакетов и дополнительных услуг в биллинговых системах.",
        "Разработал внутренних Telegram-ботов для автоматизации корпоративных процессов."
      ]
    }
  ],
  projects: [
    {
      title: "Система мониторинга устройств с АКБ",
      description: "React-дешборд + FastAPI backend, сбор метрик по SNMP, кэширование тяжёлых вью, комментарии к неактивным устройствам.",
      stack: ["FastAPI", "PostgreSQL", "Redis", "React"],
      link: ""
    },
    {
      title: "Автоматизация отчётов DPI",
      description: "Планировщики (Celery/Taskiq), агрегации по расписанию, выгрузка CSV/Excel, оптимизация SQL.",
      stack: ["Django", "Celery", "PostgreSQL"],
      link: ""
    },
    {
      title: "Боты и интеграции",
      description: "Aiogram-боты для уведомлений об авариях (SNMP), inline-репорты, авторизация.",
      stack: ["Aiogram", "Redis"],
      link: ""
    }
  ],
  contacts: {
    email: "rbobojon1@gmail.com",
    phone: "+992987808205",
    github: "https://github.com/bobojon-r",
    linkedin: "https://www.linkedin.com/in/bobojon-rajabov-a16114368/",
    telegram: "https://t.me/bobojon_r"
  },
  education: {
    degree: "Бакалавр технологических наук",
    institution: "Технологический университет Таджикистана",
    location: "Dushanbe, Tajikistan",
    year: "2019"
  },
  languages: ["Русский", "Английский"]
} as const;
