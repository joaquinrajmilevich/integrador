"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import "./styles.css";
import React, { useCallback, useEffect, useState } from "react";
import Images from "@/components/Images";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);
  const img = () => {
    return sources.map((source, index) => (
      <div className="embla__slide" key={index}>
        <Image
          key={index}
          src={source}
          alt={`Image-${index}`}
          width={400}
          height={300}
          priority={true}
          quality={65}
        />
      </div>
    ));
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{img(sources)}</div>
      </div>
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </div>
  );
}
