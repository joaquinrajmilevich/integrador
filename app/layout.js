"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Proyecto GC",
  description: "Home",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
