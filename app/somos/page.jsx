import MainImage from "@/components/MainImage";
import SecondaryAnimation from "@/components/SecondaryAnimation";
import Image from "next/image";
import Images from "@/helpers/Images";
export const metadata = {
  title: "Somos / ProyectoGC",
  description: "somos",
};
export default function Somos() {
  return (
    <main className="pb-4">
      <SecondaryAnimation y={-100}>
        <section className="relative flex flex-col justify-center items-center lg:items-start md:mx-auto h-[300px] mb-3">
          <MainImage srcImg={Images.actividadeslg}>
            <div className="md:self-center text-base-100 relative text-center sm:ms-8 mb-2 md:w-[600px] sm:w-[500px] w-[90vw] mt-9 sm:pt-5 pt-2 bg-blue-accent rounded-xl">
              <h1 className="text-5xl sm:text-5xl font-bold ">
                <span className="py-1 sm:px-1 ">Misión</span>
              </h1>
              <p className="text-sm sm:text-xl font-medium sm:px-1 px-2 pb-4 py-2 sm:leading-7">
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
            <h2 className=" text-4xl font-semibold text-center ">
              Nuestros Valores
            </h2>
            <div className="w-36 hidden md:block"></div>
          </div>
          <div className="flex flex-wrap text-center sm:-mx-4">
            <div className=" min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary text-base-100 rounded-md mb-2">
                  Educación
                </h3>
              </SecondaryAnimation>

              <p className="font-medium">
                Es la herramienta que permite a las personas, alcanzar su máximo
                potencial.
              </p>
            </div>
            <div className=" min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <h3 className="text-3xl font-semibold py-1 bg-green-secondary text-base-100 rounded-md mb-2">
                Excelencia
              </h3>
              <p className="font-medium">
                Emprendemos nuestros proyectos con este principio como base,
                ofreciendo actividades de calidad. Ellos merecen más que algo
                bueno, merecen lo mejor.
              </p>
            </div>
            <div className=" min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={-200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary text-base-100 rounded-md mb-2">
                  Transparencia
                </h3>
              </SecondaryAnimation>
              <p className="font-medium">
                Ponemos a disposición de nuestros colaboradores toda la
                información necesaria sobre los recursos utilizados en nuestros
                proyectos.
              </p>
            </div>
            <div className=" min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary text-base-100 rounded-md mb-2">
                  Empatía
                </h3>
              </SecondaryAnimation>
              <p className="font-medium">
                Cada persona es única y merece la mirada apreciativa que los
                hace dignos como seres humanos. Nuestro equipo
                interdisciplinario atiende las necesidades, tanto emocionales,
                físicas, cognitivas.
              </p>
            </div>
            <div className=" min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <h3 className="text-3xl font-semibold py-1 bg-green-secondary text-base-100 rounded-md mb-2">
                Equidad
              </h3>
              <p className="font-medium">
                Todos tienen el derecho de que se les garanticen los accesos
                para satisfacer sus necesidades básicas.
              </p>
            </div>
            <div className=" min-[576px]:w-1/2 min-[768px]:w-1/3 px-3 pb-6">
              <SecondaryAnimation x={-200} time={0.4}>
                <h3 className="text-3xl font-semibold py-1 bg-green-secondary text-base-100 rounded-md mb-2">
                  Profesionalismo
                </h3>
              </SecondaryAnimation>
              <p className="font-medium">
                Contamos con un equipo de trabajo interdisciplinario que aborda
                todas las problemáticas desde diferentes enfoques para cumplir
                con nuestra misión.
              </p>
            </div>
            <div className=" md:w-1/3 px-3 pb-6 flex justify-center items-center">
              <Image
                src={Images.gc}
                className="w-24 hidden md:block"
                alt="decoration"
              />
            </div>
            <div className=" md:w-1/3 px-3 pb-6">
              <h3 className="text-3xl font-semibold py-1 bg-green-secondary text-base-100 rounded-md mb-2">
                Desarrollo integral
              </h3>
              <p className="font-medium">
                Trabajamos para promover y proveer las oportunidades necesarias
                para garantizar el crecimiento, el conocimiento y el
                compañerismo de todos
              </p>
            </div>
            <div className=" md:w-1/3 px-3 pb-6 flex justify-center items-center">
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
