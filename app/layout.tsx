import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GARANG — What will you build from here?",
    template: "%s — GARANG",
  },
  description: "GARANG is a Seoul-born contemporary luxury house translating accumulated Korean forms, craft, and memory into modern objects.",
  keywords: ["GARANG", "가랑", "Seoul", "Korean luxury", "contemporary jewelry", "GOGOK 001"],
  openGraph: {
    title: "GARANG — What will you build from here?",
    description: "Contemporary objects from accumulated Korean forms, craft, and memory.",
    type: "website",
    locale: "ko_KR",
    siteName: "GARANG",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
