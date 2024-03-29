import Image from "next/image";
import Axis from "@/components/Axis";
import DefaultAnimation from "@/components/DefaultAnimation";
import MainImage from "@/components/MainImage";
import Images from "@/helpers/Images";
import DecorationAnimation from "@/components/DecorationAnimation";
import SecondaryAnimation from "@/components/SecondaryAnimation";
export const metadata = {
  title: "ProyectoGC",
  description: "Home",
};
export default function Home() {
  return (
    <main className="">
      <SecondaryAnimation y={-100}>
        <section className="relative flex flex-col justify-end sm:items-end sm:mx-auto h-[300px] sm:h-[400px] mb-3]">
          <MainImage srcImg={Images.homelg}>
            <DefaultAnimation>
              <div className="sm:text-5xl text-xl font-bold md:self-end mx-16 sm:self-center relative py-2 text-center sm:mb-8 mb-24 md:me-6 bg-green-secondary text-white  rounded-md sm:w-[500px] ">
                <h2 className="">Trabajamos</h2>
                <p className="font-medium ">por una gran causa</p>
              </div>
            </DefaultAnimation>
          </MainImage>
        </section>
        <section className="flex flex-row justify-center gap-6 mx-3 sm:mx-0">
          <DecorationAnimation>
            <Image src={Images.gc} alt="decoration" />
          </DecorationAnimation>
          <div className="text-2xl text-center lg:w-[55%] md:w-[65%] mb-6">
            <h3 className="my-2 ">GC es una organización sin fines de lucro</h3>
            <h3 className="mb-2 py-2 bg-secondary text-white font-medium rounded-md ">
              que trabaja para promover el desarrollo integral de niños, niñas y
              adolescentes a través de la educación
            </h3>
            <h3>
              <span className="mb-2 ">
                articulando los siguientes tres ejes:
              </span>
            </h3>
          </div>
        </section>
        <DefaultAnimation>
          <div className="w-fit mx-auto rounded-md bg-base-200 pb-6 pt-3 shadow-xl">
            <div className="flex flex-row justify-center items-center text-center text-2xl font-semibold max-sm:flex-col sm:gap-8">
              <Axis width="200px" />
            </div>
          </div>
        </DefaultAnimation>
        <section className="flex flex-col justify-center items-center mt-14">
          <h1 className="text-center font-semibold text-5xl mb-4 drop-shadow-lg">
            Proyecto GC
          </h1>
          <iframe
            className="w-[68vw] h-[315px] rounded-md mb-4"
            src="https://www.youtube.com/embed/QHtjlg1BU0s?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </SecondaryAnimation>
    </main>
  );
}
