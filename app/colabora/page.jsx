"use client";
import { motion } from "framer-motion";
import DefaultAnimation from "@/components/DefaultAnimation";
import MainImage from "@/components/MainImage";
import ModalButton from "@/components/ModalButton";
import Link from "next/link";
import Images from "@/components/Images";
import SecondaryAnimation from "@/components/SecondaryAnimation";
// TODO: make page server component
export default function Colabora() {
  return (
    <main className="bg-white text-black">
      <SecondaryAnimation y={-100}>
        <section className="relative flex flex-col justify-center sm:items-end h-[300px] mb-3">
          <MainImage srcImg={Images.donarlg}>
            <DefaultAnimation>
              <div className="sm:self-end self-center relative py-3 text-center mb-8 sm:me-20 mx-4 text-white bg-green-secondary rounded-lg sm:w-[400px]">
                <h1 className="text-3xl font-semibold ">
                  Colabora con nosotros
                </h1>
              </div>
            </DefaultAnimation>
          </MainImage>
        </section>

        <section className="flex flex-row justify-center gap-6 py-12">
          <div className="flex flex-col items-center font-semibold text-4xl text-center lg:w-[55%] md:w-[65%] w-[60%] sm:mb-10 sm:gap-10 gap-0">
            <h3 className="mb-10">¡Apoya a Proyecto GC y cambia vidas!</h3>
            <div className="flex flex-col lg:flex-row justify-center gap-10">
              <ModalButton
                child1={"Haz una donación"}
                child2={"Ayudanos a seguir adelante"}
                modalId={"my_modal_1"}
                type={"button"}
              ></ModalButton>
              <ModalButton
                child1={"Hazte socio"}
                child2={"Apoyanos mes a mes"}
                modalId={"my_modal_2"}
                type={"button-down"}
              ></ModalButton>
              <ModalButton
                child1={"Siguenos"}
                child2={"Nuestras redes sociales"}
                modalId={"my_modal_3"}
                type={"button-reverse"}
              ></ModalButton>
            </div>
            <h3 className="py-2 mt-10 sm:mt-0 text-2xl font-medium bg-blue-secondary rounded-md text-white">
              Conviértete en socio o realiza una donación hoy mismo. Tu
              generosidad nos permite llevar esperanza y oportunidades a quienes
              más lo necesitan. ¡Haz parte de nuestro impacto positivo y crea un
              mundo más justo y solidario!
            </h3>
          </div>
        </section>

        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box bg-white">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="flex flex-col justify-between py-3">
              <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Nombre"
                      id="name"
                      name="name"
                      className="rounded-md py-2 ps-2 border-2 basic-input"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Apellidos"
                      id="name"
                      name="name"
                      className="rounded-md py-2 ps-2 border-2 basic-input"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      className="rounded-md py-2 ps-2 border-2 basic-input"
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col w-1/2 text-white font-semibold gap-1">
                      <div className="flex flex-row rounded-md py-3 ps-2 border-2 border-gray-300 focus-within:border-green-secondary text-gray-500">
                        <span>$</span>
                        <input
                          placeholder="cantidad"
                          type="number"
                          name="amount"
                          id="amount"
                          className=" ps-1 w-full outline-none text-gray-400 "
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="flex flex-col w-1/2 bg-blue-secondary py-3 rounded-lg text-white font-semibold items-center text-center"
                    >
                      Donar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box bg-white">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="flex flex-col justify-between py-3 gap-3">
              <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row gap-5">
                    <div className="flex flex-col w-3/4">
                      <input
                        type="text"
                        placeholder="Nombre"
                        id="name"
                        name="name"
                        className="rounded-md py-2 ps-2 border-2 basic-input"
                      />
                    </div>
                    <div className=" radio border-0 flex justify-center my-auto items-center px-10 sm:px-12">
                      <input
                        name="answer"
                        type="radio"
                        id="A1"
                        hidden="hidden"
                        value="A"
                      />
                      <label
                        htmlFor="A1"
                        className="flex justify-center w-full py-2 px-10 sm:px-12 rounded-md bg-black"
                      >
                        <span>$15</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="flex flex-col w-3/4">
                      <input
                        type="text"
                        placeholder="Apellidos"
                        id="name"
                        name="name"
                        className="rounded-md py-2 ps-2 border-2 basic-input"
                      />
                    </div>
                    <div className="radio border-0 flex justify-center my-auto items-center px-10 sm:px-12">
                      <input
                        name="answer"
                        type="radio"
                        id="B1"
                        hidden="hidden"
                        value="B"
                      />
                      <label
                        htmlFor="B1"
                        className=" flex justify-center w-full py-2 px-10 sm:px-12 rounded-md bg-black"
                      >
                        <span>$25</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="flex flex-col w-3/4">
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        className="rounded-md py-2 ps-2 border-2 basic-input"
                      />
                    </div>
                    <div className="radio border-0 flex justify-center my-auto items-center px-10 sm:px-12">
                      <input
                        name="answer"
                        type="radio"
                        id="C1"
                        hidden="hidden"
                        value="C"
                      />
                      <label
                        htmlFor="C1"
                        className=" flex justify-center w-full py-2 px-10 sm:px-12 rounded-md bg-black"
                      >
                        <span>$50</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="flex flex-col bg-blue-secondary py-3 rounded-lg text-white font-semibold items-center text-center"
              >
                Quiero ser socio
              </button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box bg-white">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="flex flex-row py-3 sm:mx-16 gap-3 items-center justify-between h-20 ">
              <Link
                target="_blank"
                className="flex w-20"
                href={"https://www.instagram.com/francolapinto/"}
                aria-label="Instagram"
              >
                <motion.svg
                  whileHover={{ scale: 0.7, rotate: 25 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#70bf44 "
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </motion.svg>
              </Link>
              <Link
                target="_blank"
                className="flex w-20"
                href={"https://twitter.com/Nanosecso"}
                aria-label="Twitter"
              >
                <motion.svg
                  whileHover={{ scale: 0.7, rotate: 25 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#70bf44 "
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </motion.svg>
              </Link>
              <Link
                target="_blank"
                className="flex w-20"
                href={"https://www.tiktok.com/@fernandoalonso"}
                aria-label="tiktok"
              >
                <motion.svg
                  whileHover={{ scale: 0.7, rotate: 25 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#70bf44"
                    d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"
                  />
                </motion.svg>
              </Link>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </SecondaryAnimation>
    </main>
  );
}
