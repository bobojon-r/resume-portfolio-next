import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Bobojon Rajabov — Python Backend Developer",
  description: "Резюме Bobojon Rajabov: Python, Django, FastAPI, PostgreSQL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
