import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Шеф — Python Developer",
  description: "Интерактивное резюме — Python backend developer (Django, FastAPI, PostgreSQL).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
