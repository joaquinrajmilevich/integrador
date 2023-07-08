"use client";
import MainImage from "@/components/MainImage";
import seniasImage from "@/public/actividades/senias-0-md.jpg";
import somosImage from "@/public/actividades/actividades-sm.jpg";
import jugandoImage from "@/public/actividades/jugando-sm.jpg";
import homeImage from "@/public/home-lg.jpg";
import handImage from "@/public/levantando-manos-sm.jpg";
import DefaultAnimation from "@/components/DefaultAnimation";
import SecondaryAnimation from "@/components/SecondaryAnimation";
import Image from "next/image";
import gc from "@/public/gc.png";
import Axis from "@/components/Axis";
import Slider from "./Slider";
export default function Somos() {
  return (
    <main className="bg-white pb-4">
      <section className="relative h-[400px] mb-3 ">
        <MainImage srcImg={somosImage} />
      </section>
      <section className="text-black mx-auto xl:max-w-7xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg">
        <div className="flex flex-wrap mb-4 -mx-4">
          <Image
            className="w-full lg:w-1/3 rounded-lg px-4 hidden lg:block object-cover h-56"
            src={seniasImage}
            alt="sadas"
          ></Image>
          <div className="w-full lg:w-2/3 px-4">
            <div className="">
              <h1 className="font-semibold text-3xl mb-1">Actividad</h1>
              <h1 className="font-semibold text-3xl">
                <span className="text-white bg-blue-500 pt-1">pedagógica</span>
              </h1>
              <p>
                Creemos que la educación es el medio para que cada persona
                alcance su máximo potencial. Por eso en GC trabajamos para
                ayudar a que cada niño, niña y adolescente pueda adquirir
                herramientas para lograr la alfabetización y comprensión lectora
                en el área de lengua y el razonamiento a través de las
                matemáticas. Buscamos lograr estos objetivos a través de
                materiales didácticos diseñados pedagógicamente con estándares
                de calidad. Además aprenden lenguaje de señas Argentina como un
                nuevo idioma, buscando la estimulación de la creatividad, la
                expresión y la inclusión.
              </p>
            </div>
          </div>
        </div>
        <Slider></Slider>
        <div className="flex flex-wrap mt-4 mb-4 -mx-4">
          <Image
            className="w-full lg:w-1/3 rounded-lg px-4 hidden lg:block object-cover h-56"
            src={jugandoImage}
            alt="sadas"
          ></Image>
          <div className="w-full lg:w-2/3 px-4">
            <div className="">
              <h1 className="font-semibold text-3xl mb-1">Deporte y</h1>
              <h1 className="font-semibold text-3xl">
                <span className="text-white bg-blue-500 pt-1">Recreación</span>
              </h1>
              <p>
                El deporte es una de las mejores escuelas de vida y tienen el
                poder de transformar conductas negativas en positivas. Es el
                medio por el cual podemos estimular, enseñar y entrenar valores
                tales como la lealtad y la cooperación, logrando objetivos en
                equipo y a la vez desarrollando la creatividad, la organización,
                la responsabilidad y la sana competencia. Por eso en GC cada día
                practicamos 40 minutos al deporte y la recreación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
