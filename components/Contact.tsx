"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "sending">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id="contact" onSubmit={onSubmit} className="card max-w-xl">
      <label className="block mb-2">
        <span className="text-sm">Имя</span>
        <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
      </label>
      <label className="block mb-2">
        <span className="text-sm">Email</span>
        <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
      </label>
      <label className="block mb-4">
        <span className="text-sm">Сообщение</span>
        <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2" />
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          {status === "sending" ? "Отправка…" : "Отправить"}
        </button>
        {status === "ok" && <span className="text-green-600">Отправлено</span>}
        {status === "error" && <span className="text-red-600">Ошибка</span>}
      </div>
      <p className="text-xs text-neutral-500 mt-3">
        По умолчанию сообщения логируются в серверных логах Vercel. Можно подключить Resend/Nodemailer позже.
      </p>
    </form>
  );
}
