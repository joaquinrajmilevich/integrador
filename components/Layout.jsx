"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { useEffect } from "react";
const Layout = ({ children }) => {
  const pathname = usePathname();
  const shouldRender = pathname !== "/inscripciones";
  return <>{shouldRender ? <Footer /> : <></>}</>;
};

export default Layout;
