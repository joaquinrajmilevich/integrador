import "./globals.css";
import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Proyecto GC",
  description: "home",
};
export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
