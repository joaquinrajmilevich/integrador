import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Colabora / ProyectoGC",
  description: "colabora",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
