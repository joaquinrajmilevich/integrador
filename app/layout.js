import "./globals.css";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });
import Layout from "@/components/Layout";
export const metadata = {
  title: "ProyectoGC",
  description: "ProyectoGC",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-base-100 text-neutral`}>
        <Navbar />
        {children}
        <Layout />
      </body>
    </html>
  );
}
