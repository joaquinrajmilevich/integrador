"use client";
import "../globals.css";

import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });
import SecondaryAnimation from "@/components/SecondaryAnimation";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Proyecto GC</title>
        <meta name="description" content="inscripciones" />
      </head>
      <body className={font.className}>
        <Navbar />
        <SecondaryAnimation y={-100}>{children}</SecondaryAnimation>
      </body>
    </html>
  );
}
