import MainImage from "@/components/MainImage";
import Image from "next/image";
import Slider from "./Slider";
import Images from "@/components/Images";
import SecondaryAnimation from "@/components/SecondaryAnimation";
export const metadata = {
  title: "Actividades / ProyectoGC",
  description: "actividades",
};
export default function Somos() {
  return (
    <main className="bg-white pb-4">
      <SecondaryAnimation y={-100}>
        <section className="relative h-[300px] sm:h-[400px] mb-3 ">
          <MainImage srcImg={Images.actividadeslg} />
        </section>
        <section className="text-black mx-3 sm:mx-auto xl:max-w-7xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg">
          <div className="flex flex-wrap mb-4 -mx-4">
            <Image
              className="w-full lg:w-1/3 rounded-lg px-4 hidden lg:block object-cover h-56"
              src={Images.senias0md}
              alt="sadas"
            ></Image>
            <div className="w-full lg:w-2/3 px-4">
              <div className="">
                <h1 className="font-semibold text-3xl mb-1">Actividad</h1>
                <h1 className="font-semibold text-3xl">
                  <span className="text-white bg-blue-secondary rounded-md px-4">
                    pedagógica
                  </span>
                </h1>
                <p>
                  Creemos que la educación es el medio para que cada persona
                  alcance su máximo potencial. Por eso en GC trabajamos para
                  ayudar a que cada niño, niña y adolescente pueda adquirir
                  herramientas para lograr la alfabetización y comprensión
                  lectora en el área de lengua y el razonamiento a través de las
                  matemáticas. Buscamos lograr estos objetivos a través de
                  materiales didácticos diseñados pedagógicamente con estándares
                  de calidad. Además aprenden lenguaje de señas Argentina como
                  un nuevo idioma, buscando la estimulación de la creatividad,
                  la expresión y la inclusión.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-dark-primary pb-6 pt-3 shadow-lg px-10">
            <Slider></Slider>
          </div>

          <div className="flex flex-wrap mt-4 mb-4 -mx-4">
            <Image
              className="w-full lg:w-1/3 rounded-lg px-4 hidden lg:block object-cover h-56"
              src={Images.jugandosm}
              alt="sadas"
            ></Image>
            <div className="w-full lg:w-2/3 px-4">
              <div className="">
                <h1 className="font-semibold text-3xl mb-1">Deporte y</h1>
                <h1 className="font-semibold text-3xl">
                  <span className="text-white bg-blue-secondary rounded-md px-4">
                    Recreación
                  </span>
                </h1>
                <p>
                  El deporte es una de las mejores escuelas de vida y tienen el
                  poder de transformar conductas negativas en positivas. Es el
                  medio por el cual podemos estimular, enseñar y entrenar
                  valores tales como la lealtad y la cooperación, logrando
                  objetivos en equipo y a la vez desarrollando la creatividad,
                  la organización, la responsabilidad y la sana competencia. Por
                  eso en GC cada día practicamos 40 minutos al deporte y la
                  recreación.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SecondaryAnimation>
    </main>
  );
}
