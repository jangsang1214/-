import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GARANG — What will you build from here?",
  description: "GARANG creates contemporary objects from accumulated Korean forms, craft, and memory.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
