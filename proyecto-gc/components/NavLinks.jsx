"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const links = [
  { name: "QUIENES SOMOS", href: "/somos" },
  { name: "PROYECTO", href: "/proyecto" },
  { name: "ACTIVIDADES", href: "/actividades" },
  { name: "COLABORAR", href: "/colaborar" },
  { name: "INSCRIPCIONES", href: "/inscripciones" },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "text-gray-800" : "text-gray-400"}
          >
            <div className=" hover:text-gray-800 x-3 py-2 rounded-md text-md font-medium">
              {link.name}
            </div>
          </Link>
        );
      })}
    </>
  );
}
