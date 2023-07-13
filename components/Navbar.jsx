"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "../components/NavLinks";
import logo from "@/public/logoGC175x178.png";
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-50 ">
      <nav className="bg-white shadow-md">
        <div className="w-full mx-auto px-8 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-s hrink-0">
                <Link href={"/home"}>
                  <Image src={logo} width={50} height={54} />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLinks />
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-green-600  hover:bg-blue-200"
              >
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "max-h-52" : "max-h-0 invisible"
          } md:hidden transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks />
          </div>
        </div>
      </nav>
    </header>
  );
}
