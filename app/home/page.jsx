import Image from "next/image";
import Axis from "@/components/Axis";
import DefaultAnimation from "@/components/DefaultAnimation";
import MainImage from "@/components/MainImage";
import Images from "@/components/Images";
import DecorationAnimation from "@/components/DecorationAnimation";
import SecondaryAnimation from "@/components/SecondaryAnimation";
export default function Home() {
  return (
    <main className="bg-white text-black">
      <SecondaryAnimation y={-100}>
        <section className="relative flex flex-col justify-end lg:items-end sm:mx-auto h-[400px] mb-3">
          <MainImage srcImg={Images.homelg}>
            <DefaultAnimation>
              <div className="md:self-end mx-auto sm:self-center relative py-3 text-center mb-8 md:me-6 text-white bg-green-secondary rounded-lg sm:w-[400px]">
                <h2 className="text-3xl font-semibold ">Trabajamos</h2>
                <p className="">por una gran causa</p>
              </div>
            </DefaultAnimation>
          </MainImage>
        </section>
        <section className="flex flex-row justify-center gap-6 ">
          <DecorationAnimation>
            <Image src={Images.gc} alt="decoration" />
          </DecorationAnimation>
          <div className="text-2xl text-center lg:w-[55%] md:w-[65%] mb-6">
            <h3 className="my-2 ">GC es una organización sin fines de lucro</h3>
            <h3 className="mb-2 py-2 bg-blue-secondary rounded-md text-white">
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
          <div className="w-fit mx-auto rounded-md bg-slate-200 pb-6 pt-3 shadow-lg">
            <div className="flex flex-row justify-center items-center text-center text-2xl font-semibold max-sm:flex-col sm:gap-8">
              <Axis width="200px" />
            </div>
          </div>
        </DefaultAnimation>
        <section className="flex flex-col justify-center items-center mt-14">
          <h1 className="text-center font-semibold text-3xl mb-4 drop-shadow-lg">
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
