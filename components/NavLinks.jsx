"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks({ path }) {
  const pathname = usePathname();
  const links = [
    { name: "QUIENES SOMOS", href: "/somos" },
    { name: "PROYECTO", href: "/proyecto" },
    { name: "ACTIVIDADES", href: "/actividades" },
    { name: "COLABORA", href: "/colabora" },
    { name: "INSCRIPCIONES", href: "/inscripciones" },
  ];
  return (
    <>
      {links.map((link) => {
        const isActive = pathname.includes(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "text-slate-800" : "text-slate-400"}
          >
            <div className=" hover:text-slate-800 x-3 py-2 rounded-md text-md font-semibold">
              {link.name}
            </div>
          </Link>
        );
      })}
    </>
  );
}
