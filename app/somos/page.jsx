import MainImage from "@/components/MainImage";
import SecondaryAnimation from "@/components/SecondaryAnimation";
import Image from "next/image";
import Images from "@/components/Images";
export default function Somos() {
  return (
    <main className="bg-white text-white pb-4">
      <SecondaryAnimation y={-100}>
        <section className="relative flex flex-col justify-center  items-center sm:items-start sm:mx-auto h-[400px] mb-3">
          <MainImage srcImg={Images.actividadeslg}>
            <div className="md:self-start  relative text-center ms-8 mb-2 w-[60vw] mt-8">
              <h1 className="text-5xl font-semibold mb-4 ">
                <span className="bg-green-secondary rounded-xl py-1 px-4">
                  Misión
                </span>
              </h1>
              <p className="text-base px-8 py-5 bg-blue-secondary rounded-xl leading-7">
                promover el desarrollo integral de los niños, niñas y
                adolescentes a través de la educación donde trabajamos
              </p>
            </div>
          </MainImage>
        </section>
        <section className="md:px-6 px-0 mx-auto overflow:hidden xl:max-w-7xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg">
          <div className="flex justify-center items-center mb-4 ">
            <Image
              src={Images.gc}
              className="w-24 me-16 hidden md:block"
              alt="decoration"
            />
            <h2 className=" text-3xl font-semibold text-center text-black">
              Nuestros Valores
            </h2>
            <div className="w-36 hidden md:block"></div>
          </div>
          <div className="flex flex-wrap text-center -mx-4">
            <div className="w-full min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary rounded-md mb-2">
                  Educación
                </h3>
              </SecondaryAnimation>

              <p className="text-black">
                Es la herramienta que permite a las personas, alcanzar su máximo
                potencial.
              </p>
            </div>
            <div className="w-full min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <h3 className="text-3xl font-semibold py-1 bg-green-secondary rounded-md mb-2">
                Excelencia
              </h3>
              <p className="text-black">
                Emprendemos nuestros proyectos con este principio como base,
                ofreciendo actividades de calidad. Ellos merecen más que algo
                bueno, merecen lo mejor.
              </p>
            </div>
            <div className="w-full min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={-200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary rounded-md mb-2">
                  Transparencia
                </h3>
              </SecondaryAnimation>
              <p className="text-black">
                Ponemos a disposición de nuestros colaboradores toda la
                información necesaria sobre los recursos utilizados en nuestros
                proyectos.
              </p>
            </div>
            <div className="w-full min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary rounded-md mb-2">
                  Empatía
                </h3>
              </SecondaryAnimation>
              <p className="text-black">
                Cada persona es única y merece la mirada apreciativa que los
                hace dignos como seres humanos. Nuestro equipo
                interdisciplinario atiende las necesidades, tanto emocionales,
                físicas, cognitivas.
              </p>
            </div>
            <div className="w-full min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <h3 className="text-3xl font-semibold py-1 bg-green-secondary rounded-md mb-2">
                Equidad
              </h3>
              <p className="text-black">
                Todos tienen el derecho de que se les garanticen los accesos
                para satisfacer sus necesidades básicas.
              </p>
            </div>
            <div className="w-full min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={-200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary rounded-md mb-2">
                  Profesionalismo
                </h3>
              </SecondaryAnimation>
              <p className="text-black">
                Contamos con un equipo de trabajo interdisciplinario que aborda
                todas las problemáticas desde diferentes enfoques para cumplir
                con nuestra misión.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-3 pb-6 flex justify-center items-center">
              <Image
                src={Images.gc}
                className="w-24 hidden md:block"
                alt="decoration"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 pb-6">
              <h3 className="text-3xl font-semibold py-1 bg-green-secondary rounded-md mb-2">
                Desarrollo integral
              </h3>
              <p className="text-black">
                Trabajamos para promover y proveer las oportunidades necesarias
                para garantizar el crecimiento, el conocimiento y el
                compañerismo de todos
              </p>
            </div>
            <div className="w-full  md:w-1/3 px-3 pb-6 flex justify-center items-center">
              <Image
                src={Images.gc}
                className="w-24 hidden md:block"
                alt="decoration"
              />
            </div>
          </div>
        </section>
      </SecondaryAnimation>
    </main>
  );
}
