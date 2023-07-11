"use client";
import Image from "next/image";
import slogan from "@/public/logoGC_slogan.webp";
export default function Footer() {
  return (
    <footer className="bg-slate-700">
      <div className="flex flex-row justify-center text-white py-10 gap-7 mx-16">
        <div className="flex flex-col w-[50vw]">
          <h4 className="text-2xl mx-auto font-semibold py-2 bg-green-secondary rounded-xl w-full ps-3 mb-3">
            Escribinos
          </h4>
          <ul className="ps-10">
            <li>Manzoni 1360,</li>
            <li>Gonzalez Catán</li>
            <li>Provincia de Buenos Aires</li>
            <li>Tel. (54)5277 0815</li>
            <li>info@proyectogc.org</li>
            <Image src={slogan} className="bg-white rounded-2xl" />
          </ul>
        </div>
        <div className="flex flex-col w-[50vw]">
          <form className="flex flex-col gap-1">
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                id="name"
                name="name"
                className="rounded-md py-2 ps-4 "
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="miemail@mail.com"
                id="email"
                name="email"
                className="rounded-md py-2 ps-4"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                className="rounded-md py-2 ps-4"
              ></textarea>
              <span id="messageHelp" className="text-sm text-slate-500 ">
                Contanos en que podemos ayudarte. 200 caracteres
              </span>
            </div>
            <button
              type="submit"
              className="bg-blue-secondary px-4 py-2 rounded-md hover:bg-blue-accent w-20"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
