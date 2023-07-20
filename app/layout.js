"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Proyecto GC</title>
        <meta name="description" content="home" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
