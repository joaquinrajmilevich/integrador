"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import "../app/globals.css";
import React, { useCallback, useEffect, useState } from "react";
import Images from "@/helpers/Images";
export default function Slider() {
  const sources = [
    Images.aprendiendosm,
    Images.jugando1md,
    Images.jugandosm,
    Images.recreacion0md,
    Images.senias0md,
    Images.senias1md,
    Images.senias2md,
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });
  const img = () => {
    return sources.map((source, index) => (
      <div className="embla__slide" key={index}>
        <Image key={index} src={source} alt={`Image-${index}`} quality={65} />
      </div>
    ));
  };

  return (
    <div className="embla rounded-box h-[255px] ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{img(sources)}</div>
      </div>
    </div>
  );
  // const img = () => {
  //   return sources.map((source, index) => (
  //     <div className="carousel-item">
  //       <Image
  //         key={index}
  //         src={source}
  //         alt={`Image-${index}`}
  //         width={380}
  //         height={300}
  //         quality={65}
  //         className="rounded-box"
  //       />
  //     </div>
  //   ));
  // };
  // return (
  //   <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
  //     {img(sources)}
  //   </div>
  // );
}
