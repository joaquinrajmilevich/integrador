"use client";
import MainImage from "@/components/MainImage";
import proyectoImage from "@/public/proyecto-header-md.jpg";
import handImage from "@/public/levantando-manos-sm.jpg";
import SecondaryAnimation from "@/components/SecondaryAnimation";
import Image from "next/image";
import Axis from "@/components/Axis";
import Images from "@/components/Images";
export default function Somos() {
  return (
    <main className="bg-white pb-4 overflow-hidden">
      <section className="relative h-[400px] mb-12">
        <MainImage srcImg={Images.proyectoheadermd} />
      </section>
      <section className="text-black mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-lg">
        <SecondaryAnimation x={400}>
          <div className="mb-16">
            <h1 className="font-semibold text-3xl mb-3">Proyecto GC</h1>
            <p>
              Los niños asisten a contra turno escolar en nuestro predio de
              González Catán cada semana. El proyecto GC realiza un programa
              educativo con actividades simultáneas como educación física, apoyo
              escolar, recreación con talleres de arte, música e idiomas. Los
              niños también participan de una merienda saludable. Las
              actividades están diseñadas para estimular, enseñar y entrenar las
              capacidades cognitivas, las relaciones de compañerismo con otros y
              el desarrollo físico.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-3xl mb-4">
            <h4 className="font-semibold text-2xl text-center py-6 px-8">
              "El cerebro no es un vaso por llenar, sino una lámpara por
              encender".
            </h4>
          </div>
        </SecondaryAnimation>
        <div>
          <SecondaryAnimation x={-400}>
            <div className="flex flex-wrap mb-4 -mx-4">
              <Image
                className="w-full lg:w-1/3 px-4 hidden lg:block"
                src={Images.levantandomanossm}
              ></Image>
              <div className="w-full lg:w-2/3 px-4">
                <div className="mb-16 pt-6">
                  <h1 className="font-semibold text-4xl mb-3">Objetivos</h1>
                  <p>
                    Para lograr nuestro objetivo de proveer oportunidades para
                    el desarrollo integral de los niños y adolescentes, Los
                    proyectos de GC se basan en tres ejes:
                  </p>
                  <div className="flex md:flex-row justify-center mx-auto items-center text-center font-semibold flex-col lg:gap-12 gap-0">
                    <Axis></Axis>
                  </div>
                </div>
              </div>
            </div>
          </SecondaryAnimation>
          <p className="-mt-10 sm:mt-0 mb-4">
            A través de nuestro programa educativo desarrollamos actividades que
            proveen oportunidades para lograr que los niños tengan buen
            crecimiento físico a través del deporte y la alimentación
            balanceada; para ayudar el desarrollo del conocimiento tienen apoyo
            pedagógico con enfoque en lenguas y matemáticas; y en lo relacional
            con talleres de arte, música e idiomas.
          </p>
        </div>
      </section>
    </main>
  );
}
