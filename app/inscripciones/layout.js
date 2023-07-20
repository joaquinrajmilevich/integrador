"use client";
import "../globals.css";

import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Proyecto GC</title>
        <meta name="inscripciones"></meta>
      </head>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
