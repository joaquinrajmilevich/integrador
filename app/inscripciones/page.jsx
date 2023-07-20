"use client";
import Image from "next/image";
import DropDown from "@/components/Dropdown";
import Images from "@/components/Images";
export default function Inscripciones() {
  return (
    <main className="bg-white text-black ">
      <div className="text-green-secondary text-5xl text-center font-semibold pt-4">
        <h1>Inscripciones</h1>
      </div>
      <div className="flex sm:flex-row justify-center flex-col py-10 sm:gap-7 gap-2 mx-10 sm:mx-auto xl:max-w-[70vw] lg:max-w-[80vw] sm:max-w-[90vw]">
        <div className="flex flex-col sm:w-[50vw]">
          <div className=" py-2 bg-blue-secondary rounded-t-xl w-full ps-3">
            <h4 className="text-xl text-white">REQUISITOS DE INSCRIPCIÓN</h4>
          </div>
          <div className="border-x-2 border-b-2 py-2 ps-2">
            <p>Tener entre 5 y hasta 11 años</p>
          </div>
          <div className="border-x-2 border-b-2 sm:border-b-0  py-2 ps-2 ">
            <p>Tener acompañamiento de la familia durante el ciclo lectivo</p>
          </div>

          <Image
            src={Images.aplaudiendo}
            className="hidden sm:block rounded-b-xl"
            alt="aplaudiendo"
          ></Image>
        </div>
        <div className="flex flex-col sm:w-[50vw] gap-2 ">
          <div className="flex flex-row">
            <h2>
              Para comenzar el proceso de inscripción deben completar el
              siguiente formulario
            </h2>
            <Image src={Images.gc} className="w-20" alt="decoration"></Image>
          </div>
          <form className="flex flex-col gap-1">
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="nameTutor" className="font-bold">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Nombre y apellido (padre/madre/tutor)"
                id="nameTutor"
                name="nameTutor"
                className="rounded-md border-2 py-2 ps-4"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="name" className="font-bold">
                Nombre Alumno
              </label>
              <input
                type="text"
                placeholder="Nombre Alumno"
                id="name"
                name="name"
                className="rounded-md border-2 py-2 ps-4"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="miemail@mail.com*"
                id="email"
                name="email"
                className="rounded-md border-2 py-2 ps-4"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="number" className="font-bold">
                Numero de teléfono
              </label>
              <input
                type="number"
                placeholder="numero de teléfono*"
                id="number"
                name="number"
                className="rounded-md border-2 py-2 ps-4"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="turn" className="font-bold">
                Turno
              </label>
              <DropDown className="rounded-md border-2 py-2 ps-2">
                <option value="Option 1">Mañana</option>
                <option value="Option 2">Tarde</option>
                <option value="Option 3">Noche</option>
              </DropDown>
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="message" className="font-bold">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="rounded-md border-2 py-2 ps-4"
              ></textarea>
              <span id="messageHelp" className="text-sm text-slate-500 ">
                Contanos en que podemos ayudarte. 200 caracteres
              </span>
            </div>
            <button
              type="submit"
              className="bg-green-secondary px-4 py-2 rounded-md text-white hover:bg-green-accent w-20"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
