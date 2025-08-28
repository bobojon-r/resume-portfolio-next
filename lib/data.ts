export const data = {
  about: "Python-разработчик (backend). Более 2 лет коммерческого опыта. Стек: Django/DRF, FastAPI, PostgreSQL, Redis, Celery/Taskiq, Linux, Git, Nginx. Делаю мониторинг, ботов, автоматизацию отчётов DPI. Готов к собеседованию на миддл.",
  skills: [
    "Python", "Django", "Django REST Framework", "FastAPI", "PostgreSQL",
    "SQL (запросы, индексы)", "Redis", "Celery", "Taskiq", "Linux",
    "Docker", "Nginx", "Git", "React (базовый)", "OOP, SOLID",
    "Алгоритмы/структуры данных", "Asyncio", "Aiogram"
  ],
  projects: [
    {
      title: "Система мониторинга устройств с АКБ",
      description: "React-дешборд + FastAPI backend, сбор метрик по SNMP, кэширование тяжёлых вью, комментарии к неактивным устройствам.",
      stack: ["FastAPI", "PostgreSQL", "Redis", "React"],
      link: "#"
    },
    {
      title: "Автоматизация отчётов DPI",
      description: "Планировщики (Celery/Taskiq), агрегации по расписанию, выгрузка CSV/Excel, оптимизация SQL.",
      stack: ["Django", "Celery", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Боты и интеграции",
      description: "Aiogram-боты для уведомлений об авариях (SNMP), inline-репорты, авторизация.",
      stack: ["Aiogram", "Redis"],
      link: "#"
    }
  ],
  contacts: {
    email: "you@example.com",
    github: "https://github.com/yourname",
    linkedin: "https://www.linkedin.com/in/yourname",
    telegram: "https://t.me/yourname"
  }
} as const;
