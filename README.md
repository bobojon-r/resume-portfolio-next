# Интерактивное резюме (Next.js + Tailwind + Framer Motion)

Готово к деплою на Vercel.

## Локальный запуск
```bash
npm i
npm run dev
```

## Деплой на Vercel
1. Создай новый репозиторий на GitHub и залей сюда файлы.
2. В Vercel -> Add New Project -> Import из GitHub -> Framework: **Next.js** -> Deploy.
3. (Опционально) в логи будут приходить сообщения формы `/api/contact`.
   Для отправки писем подключи Resend/Nodemailer (понадобится API-ключ).

## Настройка контента
Редактируй `lib/data.ts` (о себе, навыки, проекты, контакты).
Заглушка аватара — `public/avatar.svg`.
Титулы/описания страницы — `app/layout.tsx`.
