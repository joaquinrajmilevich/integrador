import DefaultAnimation from "@/components/DefaultAnimation";
import MainImage from "@/components/MainImage";
import ModalButton from "@/components/ModalButton";
import Images from "@/helpers/Images";
import SecondaryAnimation from "@/components/SecondaryAnimation";
import MediaLinks from "@/components/MediaLinks";
export const metadata = {
  title: "Colabora / ProyectoGC",
  description: "Colabora",
};

export default function Colabora() {
  return (
    <main>
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
            <h3 className="py-2 mt-10 sm:mt-0 text-2xl font-medium bg-blue-accent rounded-md text-white">
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
              <MediaLinks />
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
