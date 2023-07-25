"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks({ onClick }) {
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
          <Link href={link.href} key={link.name} onClick={onClick}>
            <div
              className={`w-fit x-3 py-1 px-2 text-md rounded-md font-semibold ${
                isActive ? "bg-neutral text-white" : "hover:bg-base-200"
              }`}
            >
              {link.name}
            </div>
          </Link>
        );
      })}
    </>
  );
}
