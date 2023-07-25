"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
const Layout = () => {
  const pathname = usePathname();
  const shouldRender = pathname !== "/integrador/inscripciones";
  return <>{shouldRender ? <Footer /> : <></>}</>;
};

export default Layout;
